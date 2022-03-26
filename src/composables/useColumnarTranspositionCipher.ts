const encrypt = (message: string, key: string) => {
  const indexes = key.toUpperCase().split('')
    .map((char, index) => ({ char, index, code: char.charCodeAt(0) }))
    .sort((a, b) => a.code - b.code)
    .map(entry => entry.index)

  const matrix = messageToMatrix(message.replace(/ +/g, ''), indexes.length)
  return indexes.map(i => matrix[i]).map(i => i.join('')).join(' ')
}

const decrypt = (message: string, key: string) => {
  const indexes = key.toUpperCase().split('')
    .map((char, index) => ({ char, index, code: char.charCodeAt(0) }))
    .sort((a, b) => a.code - b.code)
    .map((entry, index) => ({ ...entry, strength: index }))
    .sort((a, b) => a.index - b.index)
    .map(entry => entry.strength)

  const columns = message.split(' ')
  return transpose(indexes.map(i => columns[i].split('')))
    .flat().join('')
}

export default () => ({
  encrypt,
  decrypt
})