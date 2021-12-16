import React from 'react'

import { Character } from '../../generated/graphql'
import LabeledValue from '../LabeledValue/LabeledValue'
import { Image, Wrapper } from './styled'

type Props = Character

const CharacterDetails = ({
  name,
  image,
  gender,
  origin,
  species,
  status,
  type,
}: Props) => {
  const fieldsToDisplay = {
    gender,
    origin,
    species,
    status,
    type,
  }
  const fields = Object.entries(fieldsToDisplay).map(
    ([key, value]) =>
      typeof value === 'string' && (
        <LabeledValue key={key} label={key} value={value} />
      ),
  )
  return (
    <Wrapper>
      {image && <Image src={image} alt={name ?? 'Character'} />}
      {name && <LabeledValue label="name" value={name} />}
      {fields}
    </Wrapper>
  )
}

export default CharacterDetails
