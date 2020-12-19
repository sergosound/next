const webpack = require('./webpack');
const flags = require('./next/flags');
const variables = require('./next/variables');

module.exports = { ...webpack, ...flags, ...variables() };