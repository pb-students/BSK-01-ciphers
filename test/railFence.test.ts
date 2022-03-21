const { railFenceEncrypt, railFenceDecrypt } = useRailFence()

test('encrypt and decrypt with n = 3', async () => {
  const message = 'CRYPTOGRAPHY'
  const n = 3

  expect(railFenceEncrypt(message, n)).toEqual('CTARPORPYYGH')
  expect(railFenceDecrypt(railFenceEncrypt(message, n), n)).toEqual(message)
})

test('encrypt and decrypt with n = 4', async () => {
  const message = 'CRYPTOGRAPHY'
  const n = 4

  expect(railFenceEncrypt(message, n)).toEqual('CGRORYYTAHPP')
  expect(railFenceDecrypt(railFenceEncrypt(message, n), n)).toEqual(message)
})

test('encrypt and decrypt with n = 5', async () => {
  const message = 'CRYPTOGRAPHY'
  const n = 5

  expect(railFenceEncrypt(message, n)).toEqual('CARRPYGHPOYT')
  expect(railFenceDecrypt(railFenceEncrypt(message, n), n)).toEqual(message)
  
})

test('encrypt and decrypt with n = 6', async () => {
  const message = 'CRYPTOGRAPHY'
  const n = 6

  expect(railFenceEncrypt(message, n)).toEqual('CHRPYYAPRTGO')
  expect(railFenceDecrypt(railFenceEncrypt(message, n), n)).toEqual(message)
})
