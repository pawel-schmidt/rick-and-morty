import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom'

import apolloClient from './apolloClient'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
