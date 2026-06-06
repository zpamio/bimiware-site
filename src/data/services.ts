// The service ladder. One entry here generates one /services/<slug> page,
// one card on the homepage, one Service + Offer schema block, and one
// FAQPage block. Edit prices, copy and FAQs in this file only.
//
// stripeUrl: paste your Stripe Payment Link. Until you do, the button
// renders disabled with a clear placeholder so nothing ships broken.
// recurring: true marks the retainer so the offer schema and button copy
// read as a subscription.

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface Service {
  slug: string;
  tier: string;
  name: string;
  price: string;        // display string, e.g. "$49" or "from $1,500"
  priceValue: number;   // numeric, for Offer schema
  priceQualifier?: string; // e.g. "/mo"
  recurring?: boolean;
  oneLiner: string;
  summary: string;
  deliverables: string[];
  turnaround: string;
  stripeUrl: string;    // TODO: paste Stripe Payment Link per tier
  faqs: ServiceFaq[];
}

export const SERVICES: Service[] = [
  {
    slug: 'bimi-svg-fix',
    tier: 'Entry',
    name: 'BIMI SVG logo fix',
    price: '$49',
    priceValue: 49,
    oneLiner:
      'Your logo re-engineered to pass SVG Tiny PS, so it displays in supported inboxes.',
    summary:
      'BIMI rejects most SVG files on the first pass. The spec is SVG Tiny PS, a strict profile that bans scripts, external references, raster embeds, and dozens of attributes that ordinary export tools leave in. We rebuild your logo to validate cleanly and host the final asset on a reliable, globally available endpoint.',
    deliverables: [
      'Logo rebuilt to the SVG Tiny PS profile and passing validation',
      'Correct square aspect ratio, title element, and version attributes',
      'Final SVG hosted on a stable endpoint, ready for your DNS record',
      'The exact BIMI DNS record value to publish',
    ],
    turnaround: 'Typically 1 to 2 business days.',
    stripeUrl: 'https://buy.stripe.com/REPLACE_WITH_YOUR_PAYMENT_LINK',
    faqs: [
      {
        q: 'Why does my SVG keep getting rejected?',
        a: 'BIMI does not accept normal SVG. It requires SVG Tiny PS, a constrained profile. Common rejection causes include embedded raster images, external font or stylesheet references, scripts, disallowed elements, a missing title element, and a non-square viewBox. The fix is a rebuild, not a tweak.',
      },
      {
        q: 'Do I need a certificate for this step?',
        a: 'Not for the logo file itself. The SVG must be correct first. A VMC or CMC is a separate step that some inbox providers require before the logo displays. Yahoo shows logos without any certificate, Gmail needs a VMC or CMC, and Apple Mail needs a VMC.',
      },
      {
        q: 'Will the logo show up immediately?',
        a: 'Display also depends on DMARC enforcement and certificate status. Inbox providers cache BIMI results, so allow a few hours to a few days after the record is published.',
      },
    ],
  },
  {
    slug: 'bimi-implementation',
    tier: 'Done for you',
    name: 'Full BIMI implementation',
    price: 'from $390',
    priceValue: 390,
    oneLiner:
      'End to end setup: SVG, DNS record, authentication check, and certificate guidance.',
    summary:
      'The complete path to a logo in the inbox, handled for you. We engineer the SVG, verify your SPF, DKIM and DMARC alignment, publish the BIMI record, and guide the VMC or CMC decision based on which inboxes you care about. You approve, we deploy.',
    deliverables: [
      'SVG Tiny PS logo, validated and hosted',
      'Authentication review: SPF, DKIM and DMARC alignment confirmed',
      'BIMI DNS record published and verified',
      'VMC vs CMC recommendation for your provider mix',
      'Post-deploy verification across Gmail, Yahoo and Apple Mail',
    ],
    turnaround: 'Typically 3 to 5 business days, plus certificate lead time.',
    stripeUrl: 'https://buy.stripe.com/REPLACE_WITH_YOUR_PAYMENT_LINK',
    faqs: [
      {
        q: 'What is the difference between a VMC and a CMC?',
        a: 'A VMC requires a registered trademark and unlocks the verified checkmark in Gmail. A CMC, accepted by Gmail since 2024, needs no trademark, only proof your logo has been publicly displayed on your domain for at least 12 months. CMC opened BIMI to brands without a registered mark.',
      },
      {
        q: 'Does BIMI require DMARC?',
        a: 'Yes. Your domain needs DMARC at enforcement, meaning a policy of quarantine or reject. At p=none the logo will not display reliably. If you are not at enforcement yet, the DMARC enforcement project is the prerequisite.',
      },
    ],
  },
  {
    slug: 'dmarc-enforcement',
    tier: 'Authentication',
    name: 'DMARC enforcement project',
    price: 'from $1,500',
    priceValue: 1500,
    oneLiner:
      'Move your domain from p=none to p=reject without breaking legitimate mail.',
    summary:
      'BIMI is gated behind DMARC enforcement, and most domains are stuck at monitoring. We take you to a reject policy safely: inventory every legitimate sending source, align SPF and DKIM, read the aggregate reports, and tighten the policy in controlled stages so real mail keeps flowing while spoofing is blocked.',
    deliverables: [
      'Full inventory of legitimate sending sources',
      'SPF and DKIM alignment corrected across sources',
      'Aggregate report analysis and a staged enforcement plan',
      'Policy advanced to quarantine, then reject, with monitoring at each step',
      'Documentation of the final authenticated sending posture',
    ],
    turnaround: 'Typically 3 to 6 weeks, depending on sending complexity.',
    stripeUrl: 'https://buy.stripe.com/REPLACE_WITH_YOUR_PAYMENT_LINK',
    faqs: [
      {
        q: 'Will moving to p=reject block my own email?',
        a: 'Not when it is done in stages. The risk comes from jumping to reject before every legitimate source is aligned. We inventory sources first, confirm alignment in the aggregate reports, and only then tighten the policy, watching the reports at each step.',
      },
      {
        q: 'How long until I am at enforcement?',
        a: 'It depends on how many systems send mail as your domain and how clean their authentication is. Simple setups reach reject in a few weeks. Complex sending across many platforms takes longer because each source must be verified before the policy tightens.',
      },
    ],
  },
  {
    slug: 'deliverability-audit',
    tier: 'Diagnostic',
    name: 'Deliverability audit & inbox placement',
    price: 'from $750',
    priceValue: 750,
    oneLiner:
      'Find out why mail lands in spam, and get a prioritized plan to fix it.',
    summary:
      'A structured diagnostic of why your mail does or does not reach the inbox. We assess authentication, domain and IP reputation, list hygiene, content signals, and seed-test placement across major providers. You receive findings ranked by impact, not a generic checklist.',
    deliverables: [
      'Authentication review: SPF, DKIM, DMARC and alignment',
      'Domain and sending reputation assessment',
      'Seed placement test across major inbox providers',
      'List hygiene and infrastructure review',
      'Findings ranked by impact, with a remediation plan',
    ],
    turnaround: 'Typically 1 to 2 weeks.',
    stripeUrl: 'https://buy.stripe.com/REPLACE_WITH_YOUR_PAYMENT_LINK',
    faqs: [
      {
        q: 'What do I get at the end?',
        a: 'A findings document that ranks issues by their effect on inbox placement, with a concrete remediation order. The point is to tell you what to fix first, not to hand you a generic list.',
      },
    ],
  },
  {
    slug: 'monitoring-retainer',
    tier: 'Ongoing',
    name: 'Authentication monitoring',
    price: 'from $290',
    priceValue: 290,
    priceQualifier: '/mo',
    recurring: true,
    oneLiner:
      'Continuous DMARC monitoring, certificate renewal, and deliverability watch.',
    summary:
      'Authentication is not a one time job. New sending sources appear, certificates expire, and policies drift. We monitor your DMARC aggregate reports, watch for unauthorized senders and alignment failures, track VMC and CMC renewal dates, and flag deliverability changes before they cost you placement.',
    deliverables: [
      'Ongoing DMARC aggregate report monitoring',
      'Alerts on new or failing sending sources',
      'Certificate renewal tracking for VMC and CMC',
      'Monthly deliverability and authentication summary',
      'Priority support when something changes',
    ],
    turnaround: 'Monthly engagement, cancel anytime.',
    stripeUrl: 'https://buy.stripe.com/REPLACE_WITH_YOUR_SUBSCRIPTION_LINK',
    faqs: [
      {
        q: 'Why monitor after enforcement is done?',
        a: 'Because the posture decays. Marketing adds a new sending platform, a vendor changes infrastructure, a certificate lapses. Any of these can break alignment or the logo display. Monitoring catches the drift before it becomes a deliverability problem.',
      },
    ],
  },
];
