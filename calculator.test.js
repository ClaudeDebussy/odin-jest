import { calculator } from "./calculator"

describe('calculating results', () => {

  it('should calculate sum of two numbers', () => {
    expect(calculator.add(1,1)).toBeCloseTo(2)
    expect(calculator.add(1000,1)).toBeCloseTo(1001)
    expect(calculator.add(1,-1)).toBeCloseTo(0)
  })

  it('should calculate the difference of two numbers', () => {
    expect(calculator.subtract(2,1)).toBeCloseTo(1)
    expect(calculator.subtract(-1,-1)).toBeCloseTo(0)
    expect(calculator.subtract(-1,1)).toBeCloseTo(-2)
    expect(calculator.subtract(2,1.99)).toBeCloseTo(0.01)
  })

  it('should calculate quotient to two decimal places', () => {
    expect(calculator.divide(2,3)).toBeCloseTo(.666)
    expect(calculator.divide(4,1)).toBeCloseTo(4)
    expect(calculator.divide(10,.01)).toBeCloseTo(1000)
    expect(calculator.divide(0.1,100)).toBeCloseTo(0.001)
  })

  it('should throw an error when trying to divide by zero', () => {
    expect(() => calculator.divide(1,0)).toThrow(Error) // Testing throwing errors requires 
    expect(() => calculator.divide(10000,0)).toThrow() // they be in wrapping function
  })

  it('should multiply two numbers', () => {
    expect(calculator.multiply(1,10)).toBeCloseTo(10)
    expect(calculator.multiply(.1,10)).toBeCloseTo(1)
    expect(calculator.multiply(.01,10)).toBeCloseTo(.1)
    expect(calculator.multiply(-1,10)).toBeCloseTo(-10)
  })
})