#!/usr/bin/env node
/* eslint-disable no-console */
const { readFileSync, writeFileSync } = require('fs')
const { resolve } = require('path')
const chalk = require('chalk')

const { version } = require('../package.json')
const assets = require('../assets.json')


const yb = chalk.yellow.bold
const gb = chalk.green.bold
const b = chalk.white.bold

const SOURCE_FILE = resolve(__dirname, 'service.tpl.js')
const TARGET_DIR = require('../webpack/base').output.path
const OUT_FILE = resolve(TARGET_DIR, 'service.js')


console.log(b('\n\n', '[[ SERVICE WORKER GENERATOR ]]'), '\n\n')

const templateSource = readFileSync(SOURCE_FILE).toString()

const cacheName = `task-manager-${version}`
const assetsList = ['index', 'polyfill']
  .map(name => [assets[name].js, assets[name].css].filter(e => !!e))
  .reduce((all, curr) => all.concat(curr))

console.log('Cache name:', cacheName)
console.log(yb('Found assets:'), b('[', assetsList.join(', '), ']'))

// Add / before, wrap to quotes and join
const compiledAssets = assetsList.map(path => `'/${path}'`).join(', ')

const resultFile = templateSource
  .replace('\'{{CACHE_NAME}}\'', `'${cacheName}'`)
  .replace('\'{{CACHE_URLS}}\'', compiledAssets)

writeFileSync(OUT_FILE, resultFile)

console.log(gb('Writed service code to:'), b(OUT_FILE))
