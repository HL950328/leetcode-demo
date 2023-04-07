function myCurried(fn) {
  return function curry(...args1) {
    if (args1.length >= fn.length) {
      return fn.call(null, ...args1)
    } else {
      return function (...args2) {
        return curry.apply(null, [...args1, ...args2])
      }
    }
  }
}

function sum(a, b, c, d, e) {
  return a + b + c + d + e
}
let resFunc = myCurried(sum)
console.log(resFunc(1,3,4)(1)(23))