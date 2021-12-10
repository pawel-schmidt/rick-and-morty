import React from 'react'

import { Image, Name, Wrapper } from './styled'

interface Props {
  name: string
  imageUrl?: string
}

const Character = ({ name, imageUrl }: Props) => (
  <Wrapper>
    {imageUrl && <Image src={imageUrl} alt={name} />}
    <Name>{name}</Name>
  </Wrapper>
)

export default Character
