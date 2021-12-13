import React from 'react'

import { CharactersQueryHookResult } from '../../generated/graphql'
import Character from '../Character/Character'
import { Grid, GridCell } from './styled'

interface Props {
  data: CharactersQueryHookResult['data']
}

const CharactersGrid = ({ data }: Props) => (
  <Grid>
    {data?.characters?.results?.map(
      (character) =>
        character && (
          <GridCell key={character.id}>
            {character.name && character.image && (
              <Character name={character.name} image={character.image} />
            )}
          </GridCell>
        ),
    )}
  </Grid>
)

export default CharactersGrid
