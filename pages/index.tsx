import Head from 'next/head'
import Link from 'next/link'

import { LanguageSwitcher, useTranslation } from 'next-export-i18n'

import { StreamlinesFull } from '@/lib/streamlines/streamlines-draw'

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
      <h1 className='text-4xl leading-normal sm:text-[8rem] font-domain uppercase font-extrabold whitespace-nowrap'>
        {t('index.hero')}
        <br />
        <span className=''>{t('index.hero2')}</span>
      </h1>
      <Link href='/notes'>
        <a className='text-3xl'>notes</a>
      </Link>
    </>
  )
}
