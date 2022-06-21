const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
module.exports = withContentlayer({
  reactStrictMode: true,
  images: {
    domains: ["bestinsingapore.com", "d1vbn70lmn1nqe.cloudfront.net"],
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  publicRuntimeConfig: {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  },
  env: {
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: 'pk_live_51Ksdn9KWQcwve4yMOHMrsQdROqK9psrjskfCuFxlkSltJLi3gdopKDOlXsjc2kplaRoKPAYpNqeeFroIF2VUyNUd009aK2wHu5'
  }
});

// Trigger deploy
