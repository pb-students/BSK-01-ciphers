const matrixEncrypt = (message: string, key: string) => {
  const indexes = key.split('-').map((i: any) => i - 1)
  
  const chunks = message.split('')
    .reduce((accumulator: string[][], char: string, index: number) => {
      accumulator[index % indexes.length] ??= []
      accumulator[index % indexes.length].push(char)
      return accumulator
    }, [])

  return transpose(indexes.map(i => chunks[i])).flat().join('')
}

const matrixDecrypt = (message: string, key: string) => {

}

export default () => ({
  matrixEncrypt,
  matrixDecrypt
})

