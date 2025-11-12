export const caesar = {
  caesarCipher(msg, shift) {
    const  ALPHABET = ['a','b','c','d','e','f','g','h','i','j',
      'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let cipherText = []
    const normalizedShift = ((shift % 26) + 26) % 26

    for (let i = 0; i < msg.length; i++) {
      let originalChar = msg.charAt(i)
      let indexOfOriginalCharInAlphabet
      let newChar

      if (!ALPHABET.includes(originalChar.toLowerCase())) { // If it is a non-letter character
        cipherText.push(originalChar)
        continue

      } else if (isUpperCase(originalChar)) { // If it is an uppercase character
        originalChar = originalChar.toLowerCase()
        indexOfOriginalCharInAlphabet = ALPHABET.indexOf(originalChar)
        newChar = ALPHABET[(indexOfOriginalCharInAlphabet + normalizedShift) % 26].toUpperCase()
        cipherText.push(newChar)
        
      } else {
        indexOfOriginalCharInAlphabet = ALPHABET.indexOf(originalChar)
        newChar = ALPHABET[(indexOfOriginalCharInAlphabet + normalizedShift) % 26]
        cipherText.push(newChar)
      }       
    }
    cipherText = cipherText.join('') 
    return cipherText
  }
}

function isUpperCase(char) {
  return char >= 'A' && char <= 'Z';
}