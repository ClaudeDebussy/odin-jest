import { analyzeArray } from "./analyzeArray"

describe('Analyzing arrays', () => {

  const object = analyzeArray([1,8,3,4,2,6])

  it("should calculate average of all values in array", () => {
    expect(object.average).toBeCloseTo(4)
  })

  it("should calculate min value in array", () => {
    expect(object.min).toEqual(1)
  })

  it('should calculate max value in array', () => {
    expect(object.max).toEqual(8)
  })

  it('should calculate the length of the array', () => {
    expect(object.length).toEqual(6)
  })

})