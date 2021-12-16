import React from 'react'
import { useParams } from 'react-router-dom'

import Character from '../components/Character/Character'
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

  const { name, image } = data.character

  return (
    <div>
      Character Details
      {data.character && <pre>{JSON.stringify(data.character, null, 2)}</pre>}
      {name && <Character image={image} name={name} />}
    </div>
  )
}

export default CharacterDetails
