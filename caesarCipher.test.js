import { caesar } from "./caesarCipher"

describe('encrypting via Caesar Cipher', () => {

  it('should perform Caesar Cypher on one char with a shift of 3', () => {
    expect(caesar.caesarCipher('a', 3)).toBe('d')
  })
  
  it('should perform a proper Caesar Cipher on a word using shift of 3', () => {
    expect(caesar.caesarCipher('andrew', 3)).toBe('dqguhz')
  })

  it('should properly wrap from end of alphabet to beginning again', () => {
    expect(caesar.caesarCipher('xyz', 3)).toBe('abc')
  })

  it('should preserve cases', () => {
    expect(caesar.caesarCipher('HeLLo', 3)).toBe('KhOOr')
  })

  it('should preserve punctuation', () => {
    expect(caesar.caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
  })

  it('should work with massive shifts and negative shifts', () => {
    expect(caesar.caesarCipher('xyz', 3 + (26*543))).toBe('abc')
    expect(caesar.caesarCipher('Andrew', -23)).toBe('Dqguhz')
  })

})