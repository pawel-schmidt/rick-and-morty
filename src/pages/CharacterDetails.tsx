import React from 'react'
import { useParams } from 'react-router-dom'

import CharacterDetailsView from '../components/CharacterDetails/CharacterDetails'
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator'
import { useCharacterDetailsQuery } from '../generated/graphql'

const CharacterDetails = (): React.ReactElement => {
  const { characterId = '' } = useParams<'characterId'>()
  const { loading, error, data } = useCharacterDetailsQuery({
    variables: {
      id: characterId,
    },
  })

  if (loading) return <LoadingIndicator />
  if (error) return <p>Error :(</p>
  if (!data?.character) return <p>No data…</p>

  return (
    <>
      <h1>{data.character.name ?? 'Character Details'}</h1>
      {data.character && <CharacterDetailsView character={data.character} />}
    </>
  )
}

export default CharacterDetails
