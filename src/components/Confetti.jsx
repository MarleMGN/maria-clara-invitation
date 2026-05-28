import { useEffect, useRef } from 'react'
import confetti from 'canvas-confetti'

const Confetti = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const myConfetti = confetti.create(canvas, { resize: true })
    const colors = ['#d4a017', '#e8c44a', '#ff6bae', '#ff9ece', '#ffffff']
    let colorIndex = 0

    const interval = setInterval(() => {
      myConfetti({
        particleCount: 2,
        startVelocity: 0,
        spread: 360,
        origin: { x: Math.random(), y: 0 },
        colors: [colors[colorIndex % colors.length]],
        gravity: 0.5,
        scalar: 0.8,
        ticks: 200,
      })
      colorIndex++
    }, 20)

    return () => {
      clearInterval(interval)
      myConfetti.reset()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 999,
      }}
    />
  )
}

export default Confetti
