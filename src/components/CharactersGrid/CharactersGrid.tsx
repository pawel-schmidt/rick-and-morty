import React from 'react'

import { Character as CharacterType, Maybe } from '../../generated/graphql'
import Character from '../Character/Character'
import { Grid, GridCell, GridWrapper } from './styled'

interface Props {
  // TODO: figure out better type
  characters: Maybe<
    Array<
      Maybe<
        { __typename?: 'Character' } & Pick<
          CharacterType,
          'id' | 'name' | 'image'
        >
      >
    >
  >
}

const CharactersGrid = ({ characters }: Props) => (
  <GridWrapper>
    <Grid>
      {characters?.map(
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
