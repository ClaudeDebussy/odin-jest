import { capitalize, isTitle, isUpperCase } from "./capitalize"

describe('capitalizing words', () => {
  it('should capitalize the first letter of a word', () => {
    expect(capitalize('claude')).toBe('Claude')
  })

  it('should capitalize the first letter in a multi-word string', () => {
    expect(capitalize('i am a multi-word sentence.')).toBe('I am a multi-word sentence.')
  })

  it('should capitalize only the first letter in all-caps sentence and lower-case the rest', () => {
    expect(capitalize('I AM A MULTI-WORD SENTENCE.')).toBe('I am a multi-word sentence.')
  })

  it('should accept a number as the first char', () => {
    expect(capitalize('101 dachsunds')).toBe('101 dachsunds')
  })

  it('should respect titles and keep their capitalized first chars capitalized', () => {
    expect(capitalize('1001 Arabian Nights')).toBe('1001 Arabian Nights')
  })

  it('should return true if title is title', () => {
    expect(isTitle("The Giver")).toBe(true)
  })

  it('should return true if a title starts with a number', () => {
    expect(isTitle('1001 Dalmatians')).toBe(true)
  })

  it('should return true if a title has a number at start of non-first word', () => {
    expect(isTitle('Platform 9 And Three Quarters')).toBe(true)
  })

  it('should return false if a string is not a title', () => {
    expect(isTitle('I have never seen this before.')).toBe(false)
  })

  it('should return false if only one word in string is capitalized', () => {
    expect(isTitle(`I once saw Oasis perform live.`)).toBe(false)
  })

  it('should detect if a char is upper case', () => {
    expect(isUpperCase('A')).toBe(true)
  })

  it('should return false if char is not upper case', () => {
    expect(isUpperCase('a')).toBe(false)
  })
})