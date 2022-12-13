import * as React from 'react'
import { useRouter } from 'next/router'

import { useLanguageQuery, useTranslation } from 'next-export-i18n'

import { MyDropdown } from './ui/dropdown'

export function LanguageSwitcherMenu() {
  const router = useRouter()
  const updateLanguage = (value: string) => {
    router.push(
      {
        pathname: router.pathname,
        query: { lang: value }
      },
      undefined,
      { shallow: false }
    )
  }
  const { t } = useTranslation()
  const langs = ['en', 'ru', 'kz']
  const [query] = useLanguageQuery()
  return (
    <MyDropdown
      button={t('lang')}
      items={langs.map((lang) => ({
        text: lang,
        onClick: () => {
          updateLanguage(lang)
        }
      }))}
    />
  )
}
