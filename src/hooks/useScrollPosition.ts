import debounce from 'lodash.debounce'
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

    const handleScrollDebounced = debounce(handleScroll, 150)

    if (isBrowser) {
      window.addEventListener('scroll', handleScrollDebounced, {
        passive: true,
      })
      return () => window.removeEventListener('scroll', handleScrollDebounced)
    }
  }, [])

  return scrollPosition
}
