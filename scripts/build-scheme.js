#!/usr/bin/env node
const { writeFileSync } = require('fs')
const { resolve } = require('path')

const { default: schemeConvert } = require('../dist-raw/lib/scheme-convert')
const scheme = require('../scheme.json')


const result = schemeConvert(scheme)

writeFileSync(
  resolve(__dirname, '..', 'scheme-generated.json'),
  JSON.stringify(result, 2, 2),
  'utf8'
)

// eslint-disable-next-line no-console
console.log('Created file: scheme-generated.json')
