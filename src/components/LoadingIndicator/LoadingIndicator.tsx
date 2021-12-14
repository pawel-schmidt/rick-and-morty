import React from 'react'

import { Dot, Dots } from './styled'

type Props = React.ComponentProps<typeof Dot>

const LoadingIndicator = ({ size = 'normal' }: Props) => {
  return (
    <Dots>
      <Dot size={size} />
      <Dot size={size} />
      <Dot size={size} />
      <Dot size={size} />
    </Dots>
  )
}

export default LoadingIndicator
