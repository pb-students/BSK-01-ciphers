const { railFenceEncrypt, railFenceDecrypt } = useRailFence()

test('encrypt with n = 3', async () => {
  const message = 'CRYPTOGRAPHY'
  const n = 3

  expect(railFenceEncrypt(message, n)).toEqual('CTARPORPYYGH')
})

test('encrypt with n = 4', async () => {
  const message = 'CRYPTOGRAPHY'
  const n = 4

  expect(railFenceEncrypt(message, n)).toEqual('CGRORYYTAHPP')
})

test('encrypt with n = 5', async () => {
  const message = 'CRYPTOGRAPHY'
  const n = 5

  expect(railFenceEncrypt(message, n)).toEqual('CARRPYGHPOYT')
})

test('encrypt with n = 6', async () => {
  const message = 'CRYPTOGRAPHY'
  const n = 6

  expect(railFenceEncrypt(message, n)).toEqual('CHRPYYAPRTGO')
})
