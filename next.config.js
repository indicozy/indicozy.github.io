// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  // i18n: {
  //   // These are all the locales you want to support in
  //   // your application
  //   locales: ['en-US', 'ru', 'kz'],
  //   // This is the default locale you want to be used when visiting
  //   // a non-locale prefixed path e.g. `/hello`
  //   defaultLocale: 'en-US',
  //   localeDetection: true,
  //   // This is a list of locale domains and the default locale they
  //   // should handle (these are only required when setting up domain routing)
  //   // Note: subdomains must be included in the domain value to be matched e.g. "fr.example.com".
  //   domains: [
  //     {
  //       domain: 'indicozy.vercel.com',
  //       defaultLocale: 'en-US'
  //       // an optional http field can also be used to test
  //       // locale domains locally with http instead of https
  //       // http: true
  //     }
  //   ]
  // },
  staticPageGenerationTimeout: 300,
  images: {
    unoptimized: true,
    domains: [
      'www.notion.so',
      'notion.so',
      'images.unsplash.com',
      'pbs.twimg.com',
      'abs.twimg.com',
      's3.us-west-2.amazonaws.com',
      'transitivebullsh.it',
      'vitals.vercel-insights.com'
    ],
    formats: ['image/avif', 'image/webp'],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
  }
})
