import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

import streamlines from '@anvaka/streamlines'
import { LanguageSwitcher, useTranslation } from 'next-export-i18n'
import { useWindowSize } from 'react-use'

import { LanguageSwitcherMenu } from '../components/language-switcher-menu'
import generateFunction from '../lib/streamlines/generate-function'

export default function NotionDomainPage() {
  const { t } = useTranslation()

  const ref = useRef(null)
  const boundingBox = { left: -5, top: -5, width: 10, height: 10 }
  const lineColor = 'rgba(30, 30, 30, 0.6)'

  const size = useWindowSize()
  const streamline = useRef(null)

  useEffect(() => {
    const f = generateFunction()
    console.log(f)
    const func = new Function('p', f)
    // 👇️ use document.getElementById()
    const canvas = ref.current
    const ctx = canvas.getContext('2d')

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    function onPointAdded(a, b) {
      ctx.beginPath()
      ctx.strokeStyle = lineColor
      a = transform(a)
      b = transform(b)
      ctx.moveTo(a.x, a.y)
      ctx.lineTo(b.x, b.y)
      ctx.stroke()
      ctx.closePath()
      return true
    }

    function transform(pt) {
      const tx = (pt.x - boundingBox.left) / boundingBox.width
      const ty = (pt.y - boundingBox.top) / boundingBox.height
      const width = size.width
      const height = size.height
      // var ar = width/height;
      //tx /= ar;
      return {
        x: tx * width,
        y: (1 - ty) * height
      }
    }

    canvas.width = size.width
    canvas.height = size.height

    if (streamline.current) {
      streamline.current.dispose()
    }
    streamline.current = streamlines({
      // As usual, define your vector field:
      vectorField: (p) => func(p),
      timeStep: 0.01,
      stepsPerIteration: 12,
      dSep: 0.1,
      dTest: 0.005,

      // And print the output to this canvas:
      onPointAdded
    })
    streamline.current.run()
  }, [size])

  return (
    <>
      <Head>
        <title>{t('index.title')}</title>
        <meta name='description' content={t('index.meta')} />
      </Head>
      <LanguageSwitcherMenu />
      <h1 className='text-4xl sm:text-[8rem] font-soyuz whitespace-nowrap'>
        {t('index.hero')}
        <br />
        <span className='font-soyuz'>{t('index.hero2')}</span>
      </h1>
      <Link href='/notes'>
        <a className='text-3xl'>notes</a>
      </Link>
      <canvas ref={ref} className='fixed top-0 left-0 z-[-1]'></canvas>
    </>
  )
}
