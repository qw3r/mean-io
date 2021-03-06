'use strict';

module.exports = {
  db: process.env.MONGOLAB_URI,
  app: {
    name: 'MEAN - A Modern Stack - Production'
  },
  facebook: {
    clientID: 'APP_ID',
    clientSecret: 'APP_SECRET',
    callbackURL: 'http://mean-io-example.herokuapp.com/auth/facebook/callback'
  },
  twitter: {
    clientID: 'CONSUMER_KEY',
    clientSecret: 'CONSUMER_SECRET',
    callbackURL: 'http://mean-io-example.herokuapp.com/auth/twitter/callback'
  },
  github: {
    clientID: 'APP_ID',
    clientSecret: 'APP_SECRET',
    callbackURL: 'http://mean-io-example.herokuapp.com/auth/github/callback'
  },
  google: {
    clientID: 'APP_ID',
    clientSecret: 'APP_SECRET',
    callbackURL: 'http://mean-io-example.herokuapp.com/auth/google/callback'
  },
  linkedin: {
    clientID: 'API_KEY',
    clientSecret: 'SECRET_KEY',
    callbackURL: 'http://mean-io-example.herokuapp.com/auth/linkedin/callback'
  },
  emailFrom: 'SENDER EMAIL ADDRESS', // sender address like ABC <abc@example.com>
  mailer: {
    service: 'SERVICE_PROVIDER',
    auth: {
      user: 'EMAIL_ID',
      pass: 'PASSWORD'
    }
  }
};
