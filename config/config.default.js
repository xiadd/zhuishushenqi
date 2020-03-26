/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  config.view = {
    defaultViewEngine: 'nunjucks',
  }

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1577691145255_9449';

  // add your middleware config here
  config.middleware = [];

  config.redis = {
    client: {
      port: process.env.REDIS_PORT || 6379,          // Redis port
      host: process.env.REDIS_HOST || '127.0.0.1',   // Redis host
      password: '',
      db: 0,
    },
  }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
