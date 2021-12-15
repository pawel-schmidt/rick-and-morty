import React from 'react'

import CharactersGrid from '../components/CharactersGrid/CharactersGrid'
import LoadingIndicator from '../components/LoadingIndicator/LoadingIndicator'
import { useCharactersQuery } from '../generated/graphql'
import useBottomReached from '../hooks/useBottomReached'

const Characters = (): React.ReactElement => {
  const { loading, error, data, fetchMore } = useCharactersQuery({
    notifyOnNetworkStatusChange: true,
  })

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
      <CharactersGrid characters={data.characters?.results ?? []} />
      {loading && <LoadingIndicator />}
    </>
  )
}

export default Characters
