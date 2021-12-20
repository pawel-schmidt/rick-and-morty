import React, { useEffect, useState } from 'react'

import CharactersGrid from '../components/CharactersGrid/CharactersGrid'
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator'
import { useCharactersQuery } from '../generated/graphql'
import useBottomReached from '../hooks/useBottomReached'

const Characters = (): React.ReactElement => {
  const [skip, setSkip] = useState(false)
  const { loading, error, data, fetchMore } = useCharactersQuery({
    skip,
    notifyOnNetworkStatusChange: true,
  })

  // TODO: find better solution for "Can't perform a React state update on an unmounted component"
  // ref: https://github.com/apollographql/apollo-client/issues/6209#issuecomment-854421744
  useEffect(() => {
    return () => {
      setSkip(true)
    }
  }, [])

  const loadMore = async () => {
    const nextPage = data?.characters?.info?.next
    if (nextPage) {
      await fetchMore({
        variables: { page: nextPage },
      })
    }
  }

  useBottomReached({ callback: loadMore })

  if (!data && loading) return <LoadingIndicator />
  if (error) return <p>Error :(</p>
  if (!data) return <p>No data…</p>

  return (
    <>
      <h1>Characters</h1>
      <CharactersGrid characters={data.characters?.results ?? []} />
      {loading && <LoadingIndicator />}
    </>
  )
}

export default Characters
