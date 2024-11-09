import { withSentryConfig } from '@sentry/nextjs';

const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
};

// Make sure adding Sentry options is the last code to run before exporting
export default withSentryConfig(nextConfig, {
  org: 'mohammed-hiajzi',
  project: 'repairshop',

  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: false,
  hideSourceMaps: true,
  disableLogger: true,
});
