'use strict'

const { readInput } = require('./input.js')
const { solve } = require('./core.js')

const files = ['inputFiles/a.in',
  'inputFiles/b.in',
  'inputFiles/c.in',
  'inputFiles/d.in',
  'inputFiles/e.in',
  'inputFiles/f.in']

files.forEach(file => {
  const input = readInput(file)
  const output = solve(input)
  console.log(output)
})
