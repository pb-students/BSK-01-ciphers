const { matrixEncrypt, matrixDecrypt } = useMatrixCrypt()

test('encrypt with 2 column key', async () => {
  const message = 'CRYPTOGRAPHY'
  const key = '2-1'

  expect(matrixEncrypt(message, key)).toEqual('RCPYOTRGPAYH')
})

test('encrypt with 4 column key', async () => {
  const message = 'CRYPTOGRAPHYOSA'
  const key = '3-1-4-2'

  expect(matrixEncrypt(message, key)).toEqual('YCPRGTROHAYPAOS')
})

test('encrypt with 5 column key', async () => {
  const message = 'CRYPTOGRAPHY'
  const key = '3-4-1-5-2'

  expect(matrixEncrypt(message, key)).toEqual('YPCTRRAOPGHY')
})
