Function.prototype.bind2 = function (context) {
  //获取到call函数
  var self = this;
  //获取调用bind2时传入的除了context的所有参数
  var bindArg = Array.prototype.slice.call(arguments, 1);
  
  //需要返回的函数
  var fBound = function() {
    //将fBound函数的arguments转为数组
    var arg = Array.prototype.slice.call(arguments);
    
    return self.apply(this instanceof fBound ? this : context, bindArg.concat(arg));
  }

  fBound.prototype = Object.create(self.prototype);
  
  return fBound;
}

var value = 'globalValue';
var obj = {
    value: 'objValue'
}

function print(name, age) {
    console.log('print:', this.value, name, age);
}

print.prototype.grade = 6;

var printBind = print.bind2(obj, '李四');
var instan = new printBind(8);

//直接修改bind2返回函数的原型对象属性
printBind.prototype.grade = 12;

console.log(instan.grade); // 12

console.log(print.prototype.grade); // 6