// Proof. These are PLACEHOLDERS. Replace the text, names and countries
// with real quotes from your Fiverr reviews before launch. Keep them
// short and specific. The `fiverrUrl` is the verifiable source: the
// section links to it so anyone (human or AI) can confirm the proof.
//
// Note on schema: we intentionally do not emit Review or AggregateRating
// JSON-LD here, because self-declared ratings without a verifiable review
// system can be flagged. The trust signal is the link to your real Fiverr
// profile, not invented structured data. Once you decide how you want to
// represent ratings, we can add compliant schema.

export const PROOF = {
  fiverrUrl: 'https://www.fiverr.com/tatlisert',
  // Headline numbers. projectsCompleted is the real one from your record.
  // Confirm the rating string against your actual Fiverr profile.
  rating: '5.0', // TODO: confirm against your live Fiverr rating
  ratingLabel: 'on Fiverr Pro',
};

export interface Review {
  text: string;
  name: string;
  country: string; // shown as a small flag-style tag
  flag: string;    // emoji or 2-letter code, your choice
  service: string; // which service this relates to
}

export const REVIEWS: Review[] = [
  {
    text:
      'Sent over an SVG that three certificate authorities had already rejected. It came back validating cleanly and the logo was live in Gmail within a day. Knew exactly what the validators wanted.',
    name: 'Marcus',
    country: 'United States',
    flag: 'US',
    service: 'BIMI SVG logo fix',
  },
  {
    text:
      'We were stuck at p=none for months and our logo would not show. The enforcement work was methodical, nothing broke, and we reached reject without a single legitimate email getting blocked.',
    name: 'Sofia',
    country: 'Germany',
    flag: 'DE',
    service: 'DMARC enforcement project',
  },
  {
    text:
      'Explained the VMC versus CMC decision in plain terms and saved us from buying a certificate we did not need. Fast, technical, no fluff.',
    name: 'Daniel',
    country: 'United Kingdom',
    flag: 'GB',
    service: 'Full BIMI implementation',
  },
];
