export default (matrix: any[][]) => {
  return matrix.map(row => row.reduce((a, b, i) => ((a[i] = b), a), [...Array(matrix.length)].map(() => null)))
    .reduce((prev, next) => next.map((item: any, i: number) => (prev[i] || []).concat(next[i])), [])
    .filter(row => row.some(item => item !== null))
}
