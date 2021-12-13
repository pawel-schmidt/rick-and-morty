import React from 'react'

import { Character as CharacterType } from '../../generated/graphql'
import { Image, Name, Wrapper } from './styled'

type Props = Pick<CharacterType, 'name' | 'image'>

const Character = ({ name, image }: Props) => (
  <Wrapper>
    {image && <Image src={image} alt={name ?? 'Character'} />}
    <Name>{name}</Name>
  </Wrapper>
)

export default Character
