import React, { PropsWithChildren } from 'react'

import { Container, Wrapper } from './styled'

type Props = PropsWithChildren<{
  widthToHeightRatio?: number
}>

const Proportional = ({ children, widthToHeightRatio = 1 }: Props) => {
  if (widthToHeightRatio === 0) return null

  return (
    <Wrapper style={{ paddingBottom: 100 / widthToHeightRatio + '%' }}>
      <Container>{children}</Container>
    </Wrapper>
  )
}

export default Proportional
