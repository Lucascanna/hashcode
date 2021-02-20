const output = {
  libraries: [
    {
      libraryId: 1,
      books: [
        5, 2, 3
      ],
    },
    {
      libraryId: 0,
      books: [
        0, 1, 2, 3, 4
      ],
    }
  ]
}



const writeOutput = (file, output) => {
  const filePath = path.join(__dirname, file)
}