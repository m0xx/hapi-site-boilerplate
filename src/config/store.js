const Confidence = require('confidence');
const config = require('./../../config');

const store = new Confidence.Store(config);

const criteria = {
  env: process.env.NODE_ENV
}

exports.get = function (key) {

  return store.get(key, criteria);
};
