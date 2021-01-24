const webpack = require('./webpack');
const flags = require('./next/flags');
const i18n = require('./i18n');
const variables = require('./next/variables');

module.exports = { ...webpack, ...flags, ...i18n, ...variables() };