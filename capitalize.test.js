import { capitalize } from "./capitalize"

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

it('should strip whitespace before the first char', () => {
  expect(capitalize(' i have never seen this before.'))
})