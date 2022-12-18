import { useEffect, useMemo, useRef } from 'react'

import streamlines from '@anvaka/streamlines'
import { useWindowSize } from 'react-use'

import generateFunction from './generate-function'

export const Streamlines = () => {
  const ref = useRef(null)
  const boundingBox = { left: -5, top: -5, width: 10, height: 10 }
  const lineColor = 'rgba(30, 30, 30, 0.6)'

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
    if (size.width < 600) {
      sizeMultiplier = 2
    }

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
      const width = size.width * sizeMultiplier
      const height = size.height * sizeMultiplier
      // var ar = width/height;
      //tx /= ar;
      return {
        x: tx * width,
        y: (1 - ty) * height
      }
    }

    canvas.width = size.width * sizeMultiplier
    canvas.height = size.height * sizeMultiplier

    if (streamline.current) {
      streamline.current.dispose()
    }
    streamline.current = streamlines({
      // As usual, define your vector field:
      vectorField: (p) => func(p),
      timeStep: 0.01,
      stepsPerIteration: 4,
      dSep: 0.2,
      dTest: 0.005,

      // And print the output to this canvas:
      onPointAdded
    })
    streamline.current.run()
  }, [size])
  return <canvas ref={ref}></canvas>
}

export const StreamlinesFull = () => {
  return (
    <div className='fixed z-[-1] w-screen h-screen'>
      <Streamlines />
    </div>
  )
}
