const path = require('path')
const fs = require('fs')

const problem = {
  numOfDifferentBooks: 6,
  numOfLibraries: 2,
  numOfDays: 7,
  booksScores: [
    1, 2, 3, 6, 5, 4
  ],
  libraries: [
    {
      libraryId: 0,
      numOfBooks: 5,
      signupDuration: 2,
      booksPerDay: 2,
      booksIds: [
        0, 1, 2, 3, 4
      ]
    },
    {
      libraryId: 1,
      numOfBooks: 4,
      signupDuration: 3,
      booksPerDay: 1,
      booksIds: [
        3, 2, 5, 0
      ]
    }
  ]
}

const readInput = (file) => {
  const filePath = path.join(__dirname, file)
  const data = fs.readFileSync(filePath, 'ascii')
  const lines = data.split('\n')
  const output = {}
  const firstLine = lines[0]
  const values = firstLine.split(' ')
  output.numOfDifferentBooks = parseInt(values[0])
  output.numOfLibraries = parseInt(values[1])
  output.numOfDays = parseInt(values[2])
  output.booksScores = lines[1].split(' ').map(v => parseInt(v))
  output.libraries = []
  for (let n = 2; n < lines.length; n++) {
    const i = Math.floor(n / 2) - 1
    const values = lines[n].split(' ').map(v => parseInt(v))
    if (n % 2 === 0) {
      output.libraries[i] = { libraryId: i }
      output.libraries[i].numOfBooks = values[0]
      output.libraries[i].signupDuration = values[1]
      output.libraries[i].booksPerDay = values[2]
    } else {
      output.libraries[i].booksIds = values
    }
  }

  return output
}

module.exports = { readInput }
