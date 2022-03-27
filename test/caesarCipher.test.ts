const { ceasarEncrypt, ceasarDecrypt } = useCeasarCipher()


test('encrypt with 2 column key', async () => {
    const message = 'CRYPTOGRAPHY'
    const key = '2'
  
    expect(ceasarEncrypt(message, key)).toEqual('ETARVQITCRJA')
    expect(ceasarDecrypt(ceasarEncrypt(message, key), key)).toEqual(message)
  })

test('encrypt with 3 column key', async () => {
    const message = 'CRYPTOGRAPHY'
    const key = '3'
  
    expect(ceasarEncrypt(message, key)).toEqual('FUBSWRJUDSKB')
    expect(ceasarDecrypt(ceasarEncrypt(message, key), key)).toEqual(message)
  })

  test('encrypt with 4 column key', async () => {
    const message = 'CRYPTOGRAPHY'
    const key = '4'
  
    expect(ceasarEncrypt(message, key)).toEqual('GVCTXSKVETLC')
    expect(ceasarDecrypt(ceasarEncrypt(message, key), key)).toEqual(message)
  })

  test('encrypt with 5 column key', async () => {
    const message = 'CRYPTOGRAPHY'
    const key = '5'
  
    expect(ceasarEncrypt(message, key)).toEqual('HWDUYTLWFUMD')
    expect(ceasarDecrypt(ceasarEncrypt(message, key), key)).toEqual(message)
  })

