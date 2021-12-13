import React from 'react'

import { CharactersQueryHookResult } from '../../generated/graphql'
import Character from '../Character/Character'
import { Grid, GridCell, GridWrapper } from './styled'

interface Props {
  data: CharactersQueryHookResult['data']
}

const CharactersGrid = ({ data }: Props) => (
  <GridWrapper>
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
  </GridWrapper>
)

export default CharactersGrid
