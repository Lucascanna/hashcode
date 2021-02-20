'use strict'

function sortBooks (scores) {
  const scoresCopy = [...scores]
  const sorteBooks = []
  for (let index = 0; index < scoresCopy.length; index++) {
    const maxIndex = scoresCopy.indexOf(Math.max(...scoresCopy))
    sorteBooks.push(maxIndex)
    scoresCopy[maxIndex] = -1
  }
  return sorteBooks
}

function computeScoreLibrary (library) {
  const score = library.booksPerDay
  return {
    libraryId: library.libraryId,
    score
  }
}

function selectLibrary (book, result, input) {
  const candidatesLibraries = input.libraries.filter(library => library.booksIds.includes(book))
  const librariesScores = candidatesLibraries.map(computeScoreLibrary)
  let max = 0
  let argMax
  librariesScores.forEch(x => {
    if (x.score >= max) {
      max = x.score
      argMax = x.libraryId
    }
  })
  return argMax
}

function addBook (bookId, result, input) {
  const { libraries } = result
  for (const resultLibrary of libraries) {
    const { libraryId } = resultLibrary
    const library = input.libraries[libraryId]
    if (library.booksIds.includes(bookId)) {
      resultLibrary.books.push(bookId)
      return
    }
  }
  const newLibraryId = selectLibrary(bookId, result, input)
  if (newLibraryId != null) {
    result.libraries.push({ libraryId: newLibraryId, books: [bookId] })
  }
}

function solve (input) {
  const sortedBooks = sortBooks(input.booksScores)
  const result = {
    libraries: []
  }
  for (const book of sortedBooks) {
    addBook(book, result, input)
  }
  return result
}

module.exports = { solve }
