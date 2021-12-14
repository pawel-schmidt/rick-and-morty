import React from 'react'

import CharactersGrid from '../components/CharactersGrid/CharactersGrid'
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator'
import { useCharactersQuery } from '../generated/graphql'

const Characters = (): React.ReactElement => {
  const { loading, error, data } = useCharactersQuery()

  if (loading) return <LoadingIndicator />
  if (error) return <p>Error :(</p>
  if (!data) return <p>No data…</p>

  return <CharactersGrid data={data} />
}

export default Characters
