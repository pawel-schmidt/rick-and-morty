import { useQuery } from '@apollo/client'
import React from 'react'

import { GET_CHARACTERS } from './GraphQL/queries'

interface Character {
  name: string
}

interface CharactersResponse {
  characters: {
    results: Character[]
  }
}

const Characters = (): React.ReactElement => {
  const { loading, error, data } = useQuery<CharactersResponse>(GET_CHARACTERS)

  if (loading) return <p>Loading…</p>
  if (error) return <p>Error :(</p>
  if (!data) return <p>No data…</p>

  return (
    <div>
      {data.characters.results.map(({ name }) => (
        <h2 key={name}>{name}</h2>
      ))}
    </div>
  )
}

export default Characters
