module.exports = (phase, { defaultConfig }) => {

  defaultConfig.future.webpack5 = true;

  return {

    ...defaultConfig,

    webpack: (config, { isServer }) => {
      return config;
    },

    // i18n: {
    //   locales: ['en-US', 'es'],
    //   defaultLocale: 'en-US'
    // }

  };


}