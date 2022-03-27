const { encrypt, decrypt } = useColumnarTranspositionCipher()
const message = 'HERE IS A SECRET MESSAGE ENCIPHERED BY TRANSPOSITION'

test('encrypt', async () => {
  const key = 'CONVENIENCE'
  expect(encrypt(message, key)).toEqual('HECRNCEYIISEPSGDIRNTOAAESRMPNSSROEEBTETIAEEHS')
})

test('decrypt', async () => {
  const key = 'CONVENIENCE'
  expect(decrypt('HECRNCEYIISEPSGDIRNTOAAESRMPNSSROEEBTETIAEEHS', key))
    .toEqual(message.replace(/ +/g, ''))
})
