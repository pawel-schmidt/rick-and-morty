import React, { PropsWithChildren } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const helmetContext = {}

const AppHelmet = ({ children }: PropsWithChildren<{}>) => (
  <HelmetProvider context={helmetContext}>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Cabin+Sketch:wght@400;700&family=Raleway:wght@300;400&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    {children}
  </HelmetProvider>
)

export default AppHelmet
