import {
  ApolloClient,
  FieldMergeFunction,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'

import { API_URL } from './environmentVariables'
import { Characters } from './generated/graphql'

const httpLink = new HttpLink({
  uri: API_URL,
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      ),
    )

  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const mergeCharacters: FieldMergeFunction<Characters, Characters> = (
  existing,
  incoming,
) => {
  const merged: Characters = {
    __typename: incoming.__typename,
    info: incoming?.info,
    results: [...(existing?.results ?? []), ...(incoming.results ?? [])],
  }
  return merged
}

const apolloClient = new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          characters: {
            keyArgs: [],
            merge: mergeCharacters,
          },
        },
      },
    },
  }),
})

export default apolloClient
