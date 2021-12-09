import { useQuery } from '@apollo/client'
import React from 'react'
import styled from 'styled-components'

import { GET_CHARACTERS } from './GraphQL/queries'

interface Character {
  name: string
  image: string
}

interface CharactersResponse {
  characters: {
    results: Character[]
  }
}

const AllCharacters = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -8px;
  margin-right: -8px;
`

const CharacterWrapper = styled.div`
  flex-basis: 25%;
  padding-left: 8px;
  padding-right: 8px;
  border-radius: 4px;
  overflow: hidden;
`

const Name = styled.div`
  text-transform: capitalize;
`

const Image = styled.img`
  display: block;
  width: 100%;
  height: 200px;
`

const Characters = (): React.ReactElement => {
  const { loading, error, data } = useQuery<CharactersResponse>(GET_CHARACTERS)

  if (loading) return <p>Loading…</p>
  if (error) return <p>Error :(</p>
  if (!data) return <p>No data…</p>

  return (
    <AllCharacters>
      {data.characters.results.map(({ name, image }) => (
        <CharacterWrapper key={name}>
          <Image src={image} alt={name} />
          <Name>{name}</Name>
        </CharacterWrapper>
      ))}
    </AllCharacters>
  )
}

export default Characters
