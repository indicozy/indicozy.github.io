import Head from 'next/head'

import { LanguageSwitcher, useTranslation } from 'next-export-i18n'

import { LanguageSwitcherMenu } from '../components/language-switcher-menu'

export default function NotionDomainPage() {
  const { t } = useTranslation()
  return (
    <>
      <Head>
        <title>{t('index.title')}</title>
        <meta name='description' content={t('index.meta')} />
      </Head>
      <LanguageSwitcherMenu />
      <h1 className='text-6xl font-soyuz'>hello</h1>
    </>
  )
}
