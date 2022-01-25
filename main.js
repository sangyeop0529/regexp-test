const str = `
010-1234-5678
good@gmail.com
http://www.omdbapi.com/?apikey=7035c60&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccddd
`

console.log(
  str.match(/(?<=@).{1,}/g)
)