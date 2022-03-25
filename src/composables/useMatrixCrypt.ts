const matrixEncrypt = (message: string, key: string) => {
  const indexes = key.split('-').map((i: any) => i - 1)
  
  const chunks = message.split('')
    .reduce((accumulator: string[][], char: string, index: number) => {
      accumulator[index % indexes.length] ??= []
      accumulator[index % indexes.length].push(char)
      return accumulator
    }, [])

  return transpose(indexes.map(i => chunks[i])).flat().join('')
}

const matrixDecrypt = (message: string, key: string) => {
 const indexes = key.split('-').map((i) => i - 1)
 let result = ''
  
  let matrix = message.match(new RegExp('.{1,' + indexes.length + '}', 'g')).map((e) => {
    if(indexes.length === e.length){
      for(let i = indexes.length - 1; i >= 0; i--){
        result += e[indexes[i]]
      }
    }else{
      let length = e.length
      let reducedIndexes = indexes.filter((e) => e < length)
       console.log(reducedIndexes)
   
      for(let i = reducedIndexes.length - 1; i >= 0; i--){
        result += e[reducedIndexes[i]]
      }
    }
    
  })
  
  return result
  
  
}



export default () => ({
  matrixEncrypt,
  matrixDecrypt
})

