import NextI18Next from 'next-i18next';
import config from 'next/config';
import path from 'path';

const { localeSubpaths } = config().publicRuntimeConfig;

module.exports = new NextI18Next({
    languages: ['en', 'de'],
    otherLanguages: ['ru'],
    defaultLanguage: 'en',
    localeSubpaths,
    localePath: path.resolve('./public/static/locales')
});