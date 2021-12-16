import React from 'react'

import { Character as CharacterType } from '../../generated/graphql'
import Proportional from '../Proportional/Proportional'
import { Image, Name, Wrapper } from './styled'

type Props = Pick<CharacterType, 'name' | 'image'>

const Character = ({ name, image }: Props) => (
  <Proportional widthToHeightRatio={0.75}>
    <Wrapper>
      {image && <Image src={image} alt={name ?? 'Character'} />}
      <Name>{name}</Name>
    </Wrapper>
  </Proportional>
)

export default Character
