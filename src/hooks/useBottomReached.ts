import { useEffect, useState } from 'react'

import { useScrollPosition } from './useScrollPosition'

interface BottomReachedProps {
  callback: () => void
  threshold?: number
}

const useBottomReached = ({
  callback,
  threshold = 100,
}: BottomReachedProps): void => {
  const [isBottom, setIsBottom] = useState(false)
  const { y } = useScrollPosition()

  useEffect(() => {
    if (isBottom) {
      callback()
    }
  }, [isBottom])

  useEffect(() => {
    const totalPageHeight = document.body.scrollHeight
    const scrollPoint = y + threshold + window.innerHeight
    const isScrollable = totalPageHeight >= window.innerHeight
    const bottomReached = scrollPoint >= totalPageHeight

    if (isScrollable) {
      if (bottomReached && !isBottom) {
        setIsBottom(true)
      } else if (!bottomReached && isBottom) {
        setIsBottom(false)
      }
    }
  }, [threshold, y, isBottom])
}

export default useBottomReached
