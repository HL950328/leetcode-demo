function myCurried(fn) {
  return function curry(...arg1) {
    if (arg1.length >= fn.length) {
      return fn.call(null, ...arg1)
    } else {
      return function(...arg2) {
        return curry.apply(null, [...arg1, ...arg2])
      }
    }
  }
}

function sum(a, b, c, d, e) {
  a + b + c + d + e
}

let resFunc = myCurried(sum)

resFunc()