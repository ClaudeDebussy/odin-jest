export const calculator = {

  add(a,b) {return a + b},
  subtract(a,b) {return a - b},
  divide(a,b) {
    if (b === 0) {throw new Error("Cannot divide by zero");}
    return Number((a / b).toFixed(2))
  },
  multiply(a,b) {return a * b}

}