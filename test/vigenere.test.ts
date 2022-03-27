const { encrypt, decrypt } = useVigenereCipher()
const message = 'CRYPTOGRAPHY'
const key = 'BREAKBREAKBR'

test('encrypt', async () => {
  expect(encrypt(message, key)).toEqual('DICPDPXVAZIP')
})

test('decrypt', async () => {
  expect(decrypt('DICPDPXVAZIP', key)).toEqual(message)
})
