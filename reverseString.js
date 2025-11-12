export function reverseString(string) {
  let newWord = ""
  for (let i = string.length; i >= 0; i--) {
    newWord = newWord.concat("", string.charAt(i))
  }
  return newWord
}