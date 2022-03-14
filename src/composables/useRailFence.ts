const railFenceEncrypt = (message: string, rows: number) => {
  const res: string[][] = [...Array(rows).keys()].map(() => [])
  for (let i = 0; i < message.length; ++i) {
    const k = i % (rows * 2 - 2)
    res[k < rows ? k : rows - (k % rows + 1) - 1][i] = message[i]
  }

  return res.flat().join('')
}

const railFenceDecrypt = (message: string, rows: number) => {

}

export default () => ({
  railFenceEncrypt,
  railFenceDecrypt
})
