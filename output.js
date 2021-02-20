const path = require('path')
const fs = require('fs')

const output = {
  libraries: [
    {
      libraryId: 1,
      books: [
        5, 2, 3
      ]
    },
    {
      libraryId: 0,
      books: [
        0, 1, 2, 3, 4
      ]
    }
  ]
}

const writeOutput = (file, solution) => {
  const filePath = path.join(__dirname, file)
  const lines = []
  lines.push('' + solution.libraries.length)
  solution.libraries.forEach(library => {
    lines.push([library.libraryId, library.books.length].join(' '))
    lines.push(library.books.join(' '))
  })
  const data = lines.join('\n')
  fs.writeFileSync(filePath, data, 'ascii')
}

module.exports = {
  writeOutput
}
