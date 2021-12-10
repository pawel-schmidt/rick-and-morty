import { useQuery } from '@apollo/client'
import React from 'react'

import CharactersGrid from '../components/CharactersGrid/CharactersGrid'
import { GET_CHARACTERS } from '../GraphQL/queries'

interface CharacterResult {
  id: number
  name: string
  image: string
}

interface CharactersResponse {
  characters: {
    results: CharacterResult[]
  }
}

const Characters = (): React.ReactElement => {
  const { loading, error, data } = useQuery<CharactersResponse>(GET_CHARACTERS)

  if (loading) return <p>Loading…</p>
  if (error) return <p>Error :(</p>
  if (!data) return <p>No data…</p>

  return <CharactersGrid characters={data.characters.results} />
}

export default Characters
