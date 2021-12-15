import { useEffect, useState } from 'react'

interface ScrollPosition {
  x: number
  y: number
}

const isBrowser = typeof window !== `undefined`

const getScrollPosition = (): ScrollPosition =>
  isBrowser ? { x: window.scrollX, y: window.scrollY } : { x: 0, y: 0 }

export const useScrollPosition = (): ScrollPosition => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>(
    getScrollPosition(),
  )

  useEffect(() => {
    let requestRunning: number | null = null
    const handleScroll = () => {
      if (isBrowser && requestRunning === null) {
        requestRunning = window.requestAnimationFrame(() => {
          setScrollPosition(getScrollPosition())
          requestRunning = null
        })
      }
    }

    if (isBrowser) {
      window.addEventListener('scroll', handleScroll, { passive: true })
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return scrollPosition
}
