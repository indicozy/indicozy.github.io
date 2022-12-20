import { useEffect, useMemo, useRef } from 'react'

import streamlines from '@anvaka/streamlines'
import { useTheme } from 'next-themes'
import { useWindowSize } from 'react-use'

import generateFunction from './generate-function'

// background: '#ece7e1',
// foreground: 'rgb(26, 24, 24)',
// back_dark: '#27272a',
// fore_dark: '#e4e4e7',

export const Streamlines = () => {
  const { theme, setTheme } = useTheme()
  const ref = useRef(null)
  const boundingBox = { left: -5, top: -5, width: 10, height: 10 }

  let lineColor = 'rgb(26, 24, 24)'
  if (theme === 'dark') {
    lineColor = '#e4e4e7'
  }

  const size = useWindowSize()
  const streamline = useRef(null)
  const f = useMemo(() => generateFunction(), [])
  const func = new Function('p', f)

  useEffect(() => {
    // 👇️ use document.getElementById()
    const canvas = ref.current
    const ctx = canvas.getContext('2d')
    console.log(f)

    let sizeMultiplier = 1
    if (size.width < 720) {
      sizeMultiplier = 2
    }
    canvas.width = size.width * sizeMultiplier
    canvas.height = size.height * sizeMultiplier

    // ctx.clearRect(0, 0, canvas.width, canvas.height)

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
      // const ar = width / height
      // tx /= ar
      return {
        x: tx * width,
        y: ty * height
      }
    }

    if (streamline.current) {
      streamline.current.dispose()
    }
    streamline.current = streamlines({
      // As usual, define your vector field:
      vectorField: (p) => func(p),
      timeStep: 0.01,
      stepsPerIteration: 1,
      dSep: 0.2,
      dTest: 0.005,

      // And print the output to this canvas:
      onPointAdded
    })
    streamline.current.run()
  }, [size, theme])
  return <canvas ref={ref}></canvas>
}

export const StreamlinesFull = () => {
  return (
    <div className='fixed w-screen h-screen z-[-1]'>
      <Streamlines />
    </div>
  )
}
