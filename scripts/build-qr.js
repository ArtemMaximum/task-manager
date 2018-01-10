#!/usr/bin/env node
const { writeFileSync } = require('fs')
const { resolve } = require('path')
const qr = require('qr-image')


const { CI_BUILD_REF_NAME = 'NULL' } = process.env
const pathImage = resolve(__dirname, '..', 'dist', 'qr.png')
const link = CI_BUILD_REF_NAME === 'master'
  ? 'https://task-manager'
  : `http://${CI_BUILD_REF_NAME}.branches.task-manager`

const image = qr.imageSync(link, { type: 'png', size: 10 })

writeFileSync(pathImage, image)

console.log(`Generated file: ${pathImage} linked to ${link}`)
