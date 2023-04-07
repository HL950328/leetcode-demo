var reverse = function(x) {
  if (x <= Math.pow(-2, 31) || x >=  Math.pow(2, 31) - 1) return 0
  if (x === 0) return 0
  if (x > 0) return Number(Math.abs(x).toString().split('').reverse().join(''))
  if (x < 0) return -Number(Math.abs(x).toString().split('').reverse().join(''))
};

var reverse = function(x) {
  let res = 0;
  while(x){
      res = res * 10 + x % 10;
      if(res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) return 0;
      x = ~~(x / 10);
  }
  return res;
};