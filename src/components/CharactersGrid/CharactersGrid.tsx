import React from 'react'

import Character from '../Character/Character'
import { Grid, GridCell } from './styled'

interface CharacterResult {
  id: number
  name: string
  image: string
}

interface Props {
  characters: CharacterResult[]
}

const CharactersGrid = ({ characters }: Props) => (
  <Grid>
    {characters.map(({ id, name, image }) => (
      <GridCell key={id}>
        <Character name={name} imageUrl={image} />
      </GridCell>
    ))}
  </Grid>
)

export default CharactersGrid
