test('transpose matrix', () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]

  expect(transpose(matrix)).to.deep.equal([
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
  ])
})

test('transpose matrix with empty last value', () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8],
  ]

  expect(transpose(matrix)).to.deep.equal([
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, null],
  ])
})

test('transpose matrix with half-empty last column', () => {
  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7],
  ]

  expect(transpose(matrix)).to.deep.equal([
    [1, 4, 7],
    [2, 5, null],
    [3, 6, null],
  ])
})

test('transpose non-square matrix', () => {
  const matrix = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8]
  ]

  expect(transpose(matrix)).to.deep.equal([
    [1, 3, 5, 7],
    [2, 4, 6, 8]
  ])
})

test('transpose non-square matrix with half-empty column', () => {
  const matrix = [
    [1, 2],
    [3, 4],
    [5],
    [7]
  ]

  expect(transpose(matrix)).to.deep.equal([
    [1, 3, 5, 7],
    [2, 4, null, null]
  ])
})
