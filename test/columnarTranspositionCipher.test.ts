const { encrypt, decrypt } = useColumnarTranspositionCipher()
const message = 'HERE IS A SECRET MESSAGE ENCIPHERED BY TRANSPOSITION'

test('encrypt', async () => {
  const key = 'CONVENIENCE'
  expect(encrypt(message, key)).toEqual('HECRN CEYI ISEP SGDI RNTO AAES RMPN SSRO EEBT ETIA EEHS')
})

test('decrypt', async () => {
  const key = 'CONVENIENCE'
  expect(decrypt('HECRN CEYI ISEP SGDI RNTO AAES RMPN SSRO EEBT ETIA EEHS', key))
    .toEqual(message.replace(/ +/g, ''))
})
