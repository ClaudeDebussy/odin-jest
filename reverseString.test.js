import { reverseString } from "./reverseString"

describe('reversing strings', () => {
  
  it('should return a reversed string from a single word', () => {
    expect(reverseString('Andrew')).toBe('werdnA')
  })

  it('should return a reversed string from many words', () => {
    expect(reverseString('Andrew is a developer')).toBe('repoleved a si werdnA')
  })
})