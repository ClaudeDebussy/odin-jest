export function analyzeArray(array) {
  
  const obj = {}
  
  function findAverage(array) {
    let sum = 0
    for (let i = 0; i < array.length; i++) {
      sum += array[i] 
    }
    const average = sum / array.length
    return average
  }

  function findMin(array) {
    return Math.min(...array)
  }

  function findMax(array) {
    return Math.max(...array)
  }

  function findLength(array) {
    return array.length
  }

  obj.average = findAverage(array)
  obj.min = findMin(array)
  obj.max = findMax(array)
  obj.length = (findLength(array))

  return obj

}