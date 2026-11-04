/**
 * Site configuration
 * Centralized settings for social handles, personal info, and site metadata
 */

// Social handles configuration
export const socialHandles = {
  linkedin: {
    url: "https://www.linkedin.com/in/dtemitope/",
    handle: "dtemitope",
  },
  twitter: {
    url: "https://x.com/devtemitope",
    handle: "devtemitope",
  },
  github: {
    url: "https://github.com/devdre1909",
    handle: "devdre1909",
  },
} as const;

export const siteConfig = {
  name: "Temitope Adegoke",
  title: "Senior Frontend & React Native Engineer",
  description: "Senior Frontend & React Native Engineer with 6+ years building web and mobile products. Specialized in React Native (Expo), Next.js, and event-driven architectures. Open to remote roles (UTC+1).",
  location: {
    city: "Ibadan",
    country: "Nigeria",
    timezone: "UTC+1",
  },
  email: "adegoketemitope1909@gmail.com",
  canonicalUrl: "https://www.temitope.dev",
} as const;
