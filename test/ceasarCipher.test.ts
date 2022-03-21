const { ceasarEncrypt, ceasarDecrypt } = useCeasarCrypt()


test('encrypt with 2 column key', async () => {
    const message = 'CRYPTOGRAPHY'
    const key = '2'
  
    expect(ceasarEncrypt(message, key)).toEqual('ETARVQITCRJA')
  })

test('encrypt with 3 column key', async () => {
    const message = 'CRYPTOGRAPHY'
    const key = '3'
  
    expect(ceasarEncrypt(message, key)).toEqual('FUBSWRJUDSKB')
    //expect(ceasarDecrypt('FUBSWRJUDSKB', 3)).toEqual(message)
  })

  test('encrypt with 4 column key', async () => {
    const message = 'CRYPTOGRAPHY'
    const key = '4'
  
    expect(ceasarEncrypt(message, key)).toEqual('GVCTXSKVETLC')
  })

  test('encrypt with 5 column key', async () => {
    const message = 'CRYPTOGRAPHY'
    const key = '5'
  
    expect(ceasarEncrypt(message, key)).toEqual('HWDUYTLWFUMD')
  })
