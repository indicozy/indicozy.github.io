import Head from 'next/head'
import Link from 'next/link'

import { LanguageSwitcher, useTranslation } from 'next-export-i18n'

import { Span } from '@/components/ui/span'
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
      <div className='relative ml-32 h-screen'>
        <div className='absolute left-0 bottom-20'>
          <h1 className='text-4xl leading-normal sm:text-[6rem] font-domain uppercase font-extrabold whitespace-nowrap'>
            {t('index.hero')}
            <br />
            <span className=''>{t('index.hero2')}</span>
          </h1>
          <div className='leading-[3]'>
            <p className='text-2xl font-bold uppercase font-domain'>
              <Span>Burkit Karlibay</Span>
            </p>
            <p>
              <Span>Fullstack developer</Span>
            </p>
            <p>
              <Span>
                Currently working as a CEO at{' '}
                <Link className='underline' href='https://op-onai.kz'>
                  op-onai.kz
                </Link>{' '}
              </Span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
