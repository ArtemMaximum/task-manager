import { resolve } from 'path'
import { readFileSync, writeFileSync } from 'fs'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { ThemeProvider, ServerStyleSheet, StyleSheetManager } from 'styled-components'
import chalk from 'chalk'

import Routes from './routes'
import { theme, globalStyles } from './theme'

/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
// TODO: remove no-unused-vars
// TODO: refactor to babel compiled src
// TODO: fix static build

const file = readFileSync(resolve(__dirname, '..', 'dist', 'index.html')).toString()
const yb = chalk.yellow.bold
const gb = chalk.green.bold
const rb = chalk.red.bold
const b = chalk.white.bold

console.log(b('\n\n', '[[ STATIC PAGE GENERATOR ]]'), '\n\n')


const run = (path) => {
  const context = {}
  const sheet = new ServerStyleSheet()
  
  globalStyles()
  
  const html = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <ThemeProvider theme={theme}>
        <div>
          <StaticRouter context={context} location={path}>
            <Routes/>
          </StaticRouter>
        </div>
      </ThemeProvider>
    </StyleSheetManager>,
  )
  
  const styles = sheet.getStyleTags()
  
  const full = file
    .replace(/<center.+center>/gm, html)
    .replace('</head>', `${styles}</head>`)
  
  
  const targetFileName = path === '/' ? 'index' : path.replace(/^\//, '')
  const targetPath = resolve(__dirname, '..', 'dist', `${targetFileName}.html`)
  
  console.log('Saving...', (targetPath))
  
  writeFileSync(targetPath, full, { encoding: 'utf8' })
  
  console.log(gb('Writed!'))
};
['/', '/contacts', '/404'].forEach(run)
