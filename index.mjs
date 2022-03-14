export const encodeRailFence = (message, rows) => {
    const res = [...Array(rows).keys()].map(() => [])
    for (let i = 0; i < message.length; ++i) {
        const k = i % (rows * 2 - 2)
        res[k < n ? k : rows - (k % rows + 1) - 1][i] = message[i]
    }
  
    return res.flat().join('')
}
