import 'normalize.css'

import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import apolloClient from './apolloClient'
import App from './App'
import AppHelmet from './AppHelmet'
import AppTheme from './AppTheme'

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <AppTheme>
        <AppHelmet>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AppHelmet>
      </AppTheme>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
