/** core */
import React from 'react'
import fetch from 'node-fetch'
/** apollo */
import { ApolloProvider } from '@apollo/react-common'
import { ApolloClient } from 'apollo-client'
import { RestLink } from 'apollo-link-rest'
import { StaticRouter } from 'react-router'
import { InMemoryCache } from 'apollo-cache-inmemory'
/** style */
import Layout from '../routes/Layout'
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'
import { GlobalStyle, Theme } from 'assets/style'

const createApolloClient = (req, res, next) => {
  if (global.Headers == null) {
    const fetch = require('node-fetch')
    global.Headers = fetch.Headers
  }

  res.apolloClient = new ApolloClient({
    ssrMode: true,
    // Remember that this is the interface the SSR server will use to connect to the
    // API server, so we need to ensure it isn't firewalled, etc
    link: new RestLink({
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json;charset=utf-8'
      },
      credentials: 'same-origin',
      customFetch: fetch,
      // uri: `${process.env.URL_REST_SEARCH}`,
      endpoints: {
        home: ''
      }
    }),
    cache: new InMemoryCache()
    // link: createHttpLink({
    //   // uri: `${process.env.BASE_URL}`,
    //   credentials: 'same-origin',
    //   headers: {
    //     // authorization: `${process.env.AUTH}`,
    //     cookie: req.header('Cookie'),
    //   },
    //   fetch: fetch
    // }),
  })

  const context = {}

  // The client-side App will instead use <BrowserRouter>
  res.App = (
    <ApolloProvider client={res.apolloClient}>
      <StaticRouter location={req.url} context={context}>
        <ThemeProvider theme={Theme}>
          <GlobalStyle />
          <Reset />
          <Layout />
        </ThemeProvider>
      </StaticRouter>
    </ApolloProvider>
  )

  next()
}

export default createApolloClient