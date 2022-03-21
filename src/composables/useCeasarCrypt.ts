const ceasarEncrypt = (message: string, key: number) => {
    const alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = ''
    message = message.toUpperCase();
    for(let i = 0 ; i < message.length; i++){
        let index = alphabet.indexOf(message[i])
        
        result = result + alphabet[(+index + +key) % 26]
        
    }
    return result;

  }
 
  
  const ceasarDecrypt = (message: string, key: number) => {
    return ceasarEncrypt(message, key * -1)
  }

export default () => ({
    ceasarEncrypt,
    ceasarDecrypt
  })