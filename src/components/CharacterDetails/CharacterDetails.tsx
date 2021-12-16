import React from 'react'

import { Character } from '../../generated/graphql'
import LabeledValue from '../LabeledValue/LabeledValue'
import { Image, Wrapper } from './styled'

interface Props {
  character: { __typename?: 'Character' } & Pick<
    Character,
    | 'id'
    | 'name'
    | 'status'
    | 'species'
    | 'type'
    | 'gender'
    | 'image'
    | 'created'
  >
}

const CharacterDetails = ({ character }: Props) => {
  const { name, image, gender, species, status, type } = character
  const fieldsToDisplay = {
    gender,
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
