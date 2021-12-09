import { gql } from '@apollo/client'

export const GET_CHARACTERS = gql`
  query getCharacters($page: Int = 1) {
    characters(page: $page) {
      info {
        count
      }
      results {
        name
        image
      }
    }
  }
`
