/**
 * @see https://www.npmjs.com/package/next-compose-plugins
 */
const pkg = require('./package.json');
const nextCompose = require('next-compose-plugins');

const nextConfig = {

  env: {
    NAME: pkg.name,
    VERSION: pkg.version
  },

  reactStrictMode: true,

  // @see https://nextjs.org/docs/api-reference/next.config.js/rewrites
  // Quite powerful see above link for examples
  async rewrites() {
    return [
      // Example:
      // {
      //   source: '/from/path',
      //   destination: '/to/path'
      // }
    ]
  },

  // i18n: {
  //   locales: ['en-US', 'es'],
  //   defaultLocale: 'en-US'
  // }

};

module.exports = nextCompose([
 // your  
], nextConfig);
