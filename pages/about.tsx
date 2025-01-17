import { GetStaticProps, NextPage } from 'next'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import { FC, Suspense } from 'react'

import { PDFDownloadLink } from '@react-pdf/renderer'
import { avatarImg, contributions } from 'data/contributions'
import { useTranslation } from 'next-export-i18n'

import SkillsAll from '@/components/Skills'
import { Badge } from '@/components/ui/badge'

const DynamicPdf = dynamic(() => import('../components/ReactPdf'), {
  suspense: true
})

const DynamicPdfDownloadLink = dynamic(
  () => import('../components/ReactPdfDownload'),
  {
    suspense: true
  }
)

interface iSSG {
  nodeEnv: 'development' | 'preview' | 'production' | undefined
}

export const getStaticProps: GetStaticProps<iSSG> = async () => {
  const nodeEnv = process.env.NODE_ENV as
    | 'development'
    | 'preview'
    | 'production'
    | undefined
  return { props: { nodeEnv } }
}

const About: NextPage<iSSG> = ({ nodeEnv }) => {
  const { t } = useTranslation()
  return (
    <div className='pt-40 relative'>
      <Image
        className='w-48 absolute top-[4rem] left-[30rem] z-[-1]'
        src='/me.jpg'
        width={1000}
        height={1000}
        alt='Burkit Karlibay'
      />
      <h1 className='text-6xl md:text-[8rem] font-runs font-normal hover:font-bold transition-all'>
        About Me
      </h1>

      {nodeEnv === 'development' ? (
        <Suspense fallback={<div>Loading...</div>}>
          <DynamicPdf t={t} />
        </Suspense>
      ) : (
        <></>
      )}
      <div>
        <p>
          I like many stuff: Photography, Cinematography, programming, FOSS,
          designs, interior designs, mentoring, management, marketing, sales,
          economics...
        </p>
        <p>
          For now, I&apos;m developing a LMS for collaborative programming.
          Whether I will succeed or you&apos;ll see in May 2023. See ya.
        </p>
      </div>
      <div className='mt-12'>
        <p className='text-4xl md:text-6xl font-runs font-normal hover:font-bold transition-[font-weight]'>
          Resume:
        </p>
        <div className='mt-4'>
          <Suspense fallback={<div>Loading...</div>}>
            <DynamicPdfDownloadLink t={t} />
          </Suspense>
        </div>
      </div>
      <div className='mt-20'>
        <p className='text-4xl md:text-6xl font-runs font-normal hover:font-bold transition-[font-weight]'>
          Contributed to:
        </p>
        {contributions.map((c, i) => (
          <Badge
            key={i}
            href={`https://github.com/${c.name}`}
            icon={
              <Image src={avatarImg + c.img} width={300} height={300} alt='' />
            }
          >
            {c.name}
          </Badge>
        ))}
      </div>
      <div className='mt-20'>
        <SkillsAll />
      </div>
    </div>
  )
}
export default About
