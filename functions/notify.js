// Server-side notification trigger for Novu or Courier.
//
// WHY THIS EXISTS: Novu and Courier authenticate with SECRET keys, so they
// cannot be called from the static front-end (the key would be exposed to
// everyone). This small function holds the secret and makes the call
// server-side. It is the only server-side piece in the project.
//
// DEPLOY:
//  - On a Cloudflare PAGES project, files in /functions run automatically.
//    This handler answers POST /notify with zero extra config.
//  - If you deploy as a Cloudflare WORKER instead, move this logic into your
//    Worker's fetch() handler; the body is identical.
//
// SECRETS (set in Cloudflare dashboard > Settings > Variables, encrypted —
// never commit them). Configure ONE provider:
//   Novu:    NOVU_SECRET_KEY, NOVU_WORKFLOW_ID
//   Courier: COURIER_AUTH_TOKEN, COURIER_TEMPLATE_ID
// Optional: STRIPE_WEBHOOK_SECRET to verify Stripe-triggered calls.
//
// TRIGGER IT FROM:
//  - a Stripe webhook (recommended: verify the stripe-signature header first),
//  - your Formaloo form's webhook,
//  - or the site itself: fetch('/notify', { method:'POST',
//      headers:{'content-type':'application/json'},
//      body: JSON.stringify({ email, name, event:'lead' }) }).

export async function onRequestPost(context) {
  const { request, env } = context;

  let data;
  try {
    data = await request.json();
  } catch {
    return json({ error: 'invalid JSON body' }, 400);
  }

  const email = data.email;
  const name = data.name || '';
  const event = data.event || 'lead'; // e.g. 'lead' | 'purchase'
  if (!email) return json({ error: 'email is required' }, 400);

  // TODO: authenticate the caller before trusting the body. For Stripe,
  // verify the 'stripe-signature' header against STRIPE_WEBHOOK_SECRET.
  // For Formaloo or your own front-end, check a shared secret header.

  try {
    if (env.NOVU_SECRET_KEY) {
      const res = await fetch('https://api.novu.co/v1/events/trigger', {
        method: 'POST',
        headers: {
          Authorization: `ApiKey ${env.NOVU_SECRET_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: env.NOVU_WORKFLOW_ID, // the workflow identifier from Novu
          to: { subscriberId: email, email },
          payload: { name, event },
        }),
      });
      if (!res.ok) return json({ error: 'novu trigger failed', detail: await res.text() }, 502);
    } else if (env.COURIER_AUTH_TOKEN) {
      const res = await fetch('https://api.courier.com/send', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${env.COURIER_AUTH_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: {
            to: { email },
            template: env.COURIER_TEMPLATE_ID, // the notification template id
            data: { name, event },
          },
        }),
      });
      if (!res.ok) return json({ error: 'courier send failed', detail: await res.text() }, 502);
    } else {
      return json({ error: 'no notification provider configured' }, 500);
    }

    return json({ ok: true });
  } catch (err) {
    return json({ error: String(err) }, 500);
  }
}

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
