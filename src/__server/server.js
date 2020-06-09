import Express from 'express'
import React from 'react'
import {
  renderToString,
  renderToStaticMarkup
} from 'react-dom/server'
/** apollo */
import createApolloClient from './createApolloClient'
import { getDataFromTree } from '@apollo/react-ssr'
/** styles */
import Html from './Html'
import { ServerStyleSheet } from 'styled-components'

const app = new Express()

app.use(Express.static('./build/client'))

/** create apollo client */
app.use(createApolloClient)

app.use((req, res) => {
  
  getDataFromTree(res.App)
  .then(() => {
    /* We are ready to render for real */
    const content = renderToString(res.App)
    /* prepare style on server */
    const sheet = new ServerStyleSheet()
    const styleTags = sheet.getStyleTags()

    const initialState = res.apolloClient.extract()
  
    const html = <Html
                  styles={styleTags}
                  content={content}
                  state={initialState}
                />
  
    res.status(200)
    res.send(`<!doctype html>\n${renderToStaticMarkup(html)}`)
    res.end()
  })
  .catch(error => {
    console.warn('< GET DATA FROM TREE : ERROR > ', error)
    res.end()
  })

})

app.listen(process.env.PORT, process.env.HOST, () => console.log( // eslint-disable-line no-console
  `< SERVER RUNNING : PORT ${process.env.PORT} : HOST ${process.env.HOST} >`
))