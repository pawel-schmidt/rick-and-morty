import 'normalize.css'

import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import apolloClient from './apolloClient'
import App from './App'
import GlobalStyle from './GlobalStyle'

const theme = {
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
}

const helmetContext = {}

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={apolloClient}>
      <ThemeProvider theme={theme}>
        <HelmetProvider context={helmetContext}>
          <GlobalStyle />
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </HelmetProvider>
      </ThemeProvider>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
