'use strict'

function getNextLibrary (libraries, selected) {
  if (libraries.length === 0) {
    return null
  }
  const lib = libraries.splice(0, 1)
  selected.push(lib)
  return lib
}

function selectBooks (lib) {
  return lib.booksIds
}

function solve (input) {
  const output = {
    libraries: []
  }
  const selected = []
  while (true) {
    const lib = getNextLibrary(input.libraries, selected)
    if (!lib) {
      return output
    }
    const books = selectBooks(lib)
    output.libraries.push({ libraryId: lib.libraryId, books })
  }
}

module.exports = { solve }
