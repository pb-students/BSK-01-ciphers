const { encrypt, decrypt } = useVigenereCipher()
const message = 'CRYPTOGRAPHY'

test('encrypt1', async () => {
  const key = 'BREAKBREAKBR'
  expect(encrypt(message, key)).toEqual('DICPDPXVAZIP')
})

test('decrypt1', async () => {
  const key = 'BREAKBREAKBR'
  expect(decrypt('DICPDPXVAZIP', key)).toEqual(message)
})

test('encrypt2', async () => {
  const key = 'POLITECHNIKA'
  expect(encrypt(message, key)).toEqual('RFJXMSIYNXRY')
})

test('decrypt2', async () => {
  const key = 'POLITECHNIKA'
  expect(decrypt('RFJXMSIYNXRY', key)).toEqual(message)
})

test('encrypt3', async () => {
  const key = 'POLITECHNIK'
  expect(encrypt(message, key)).toEqual('RFJXMSIYNXRN')
})

test('decrypt3', async () => {
  const key = 'POLITECHNIK'
  expect(decrypt('RFJXMSIYNXRN', key)).toEqual(message)
})

test('encrypt4', async () => {
  const key = 'POLITECHNIKAA'
  expect(encrypt(message, key)).toEqual('RFJXMSIYNXRY')
})

test('decrypt4', async () => {
  const key = 'POLITECHNIKAA'
  expect(decrypt('RFJXMSIYNXRY', key)).toEqual(message)
})