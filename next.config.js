/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async headers() {
    return [
      {
        source: "/fonts/CircularStd-Bold.woff2",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fonts/CircularStd-Book.woff2",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fonts/Gazpacho-Bold.woff2",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
  env: {
    products_api: process.env.PRODUCTS_API,
    insta_token: process.env.INSTA_TOKEN,
    mailer_domain: process.env.MAILER_DOMAIN,
    mailer_api_key: process.env.MAILER_API_KEY
  },
  sassOptions: {
    includePaths: ['./app/styles'],
    prependData: `@import "variables.scss";`
  },
  async redirects() {
    return [
      {
        source: '/rate-us',
        destination: 'https://forms.office.com/pages/responsepage.aspx?id=2kq8kPWJYk6j4z4UEwLrkc3cS_spLWBDvX43MFYEQYJUQzIyWFNRUDVLT1gxVjZRVjc0Tk8yMFpJUS4u',
        permanent: false,
      },
    ]
  }
}

module.exports = nextConfig
