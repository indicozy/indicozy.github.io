/* eslint-disable @typescript-eslint/no-var-requires */
var en = require('./generated/en.json')
var ru = require('./generated/ru.json')
var kz = require('./generated/kz.json')

const i18n = {
  translations: {
    en,
    ru,
    kz
  },
  defaultLang: 'en',
  useBrowserDefault: true
}

module.exports = i18n
