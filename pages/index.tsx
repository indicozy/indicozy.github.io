import Head from 'next/head'
import Link from 'next/link'

import { useTranslation } from 'next-export-i18n'

import SubscribeForm from '@/components/SubscribeForm'
import { Span } from '@/components/ui/span'

export default function NotionDomainPage() {
  const { t } = useTranslation()

  // Scopus / Web of Science

  return (
    <>
      <Head>
        <title>{t('index.title')}</title>
        <meta name='description' content={t('index.meta')} />
      </Head>
      <div className='relative h-screen'>
        <div className='absolute left-0 bottom-40 sm:bottom-20'>
          <h1 className='text-2xl leading-normal sm:text-4xl md:text-6xl lg:text-[4rem]  font-domain uppercase font-bold whitespace-nowrap'>
            {t('index.hero')}
            <br />
            <span className=''>{t('index.hero2')}</span>
          </h1>
          <div className='leading-[3]'>
            <p className='text-xl font-bold uppercase sm:text-2xl font-domain'>
              <Span>{t('name')}</Span>
            </p>
            <p>
              <Span>Fullstack developer</Span>
            </p>
            <p>
              <Span>
                Currently learning Machine Learning, Graph-based Databases,
                ElasticSearch and Management
              </Span>
            </p>
          </div>
        </div>
      </div>
      <SubscribeForm />
    </>
  )
}
