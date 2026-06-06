// Single source of truth for brand identity and entity data.
// Everything that feeds JSON-LD schema and the AI-legibility files
// (robots.txt, llms.txt) reads from here. Edit the TODO lines and
// the rest of the site stays consistent.

export const SITE = {
  name: 'Bimiware',
  url: 'https://bimiware.com',
  tagline: 'BIMI, engineered to pass.',
  description:
    'Bimiware implements BIMI end to end: SVG Tiny PS logo engineering, VMC and CMC acquisition, and the DMARC, SPF and DKIM alignment that BIMI depends on. Over 400 completed logo projects.',

  // Contact
  email: 'hello@bimiware.com', // TODO: confirm the address you want public

  // Proof
  projectsCompleted: 400,

  // The person behind the brand. This is a core AI-trust signal,
  // so fill it in fully rather than leaving it generic.
  founder: {
    name: 'Burak', // TODO: add full name for the E-E-A-T / author signal
    jobTitle: 'Fractional CRM & Lifecycle Architect, Email Deliverability',
    // Short author bio used on guide bylines. Rewrite in your own voice.
    bio: 'Email deliverability and lifecycle consultant. Over 400 BIMI logo projects shipped, with a focus on the authentication work that makes them actually display.',
    linkedin: 'https://www.linkedin.com/in/tatlisert/',
    sameAs: [
      'https://www.linkedin.com/in/tatlisert/',
      'https://github.com/zpamio',
      'https://gist.github.com/zpamio',
      'https://www.fiverr.com/tatlisert',
    ],
  },

  // Profiles the Organization is associated with. Cross-platform
  // presence is one of the strongest signals for AI recommendation.
  sameAs: [
    'https://www.linkedin.com/in/tatlisert/',
    'https://github.com/zpamio',
    'https://www.fiverr.com/tatlisert',
  ],

  // Topical authority. Used in Organization.knowsAbout.
  knowsAbout: [
    'BIMI',
    'Brand Indicators for Message Identification',
    'SVG Tiny PS',
    'Verified Mark Certificate',
    'Common Mark Certificate',
    'DMARC',
    'SPF',
    'DKIM',
    'Email authentication',
    'Email deliverability',
  ],
} as const;

export const NAV = [
  { label: 'Services', href: '/#services' },
  { label: 'Tools', href: '/tools' },
  { label: 'Start a project', href: '/start' },
];
