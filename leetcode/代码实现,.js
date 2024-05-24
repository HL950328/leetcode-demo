function _new(fn, ...args) {
	const obj = {};
	Object.setPrototypeOf(obj, fn.prototype); // obj = Object.create(fn.prototype)
	const result = fn.apply(obj, args);
	// 根据规范，返回 null 和 undefined 不处理，依然返回obj
	return result instanceof Object ? result : obj;
}

function _new(){
  const obj = {}
  const Constructor = Array.prototype.shift.call(arguments)

  obj.__proto__ = Constructor.prototype
  const result = Constructor.apply(obj, arguments)

  return typeof result === 'object' ? result : obj
}

// 发布订阅模式
class EventEmitter {
  constructor() {
    this.list = {}
  }
  on(name, cb) {
      if (this.list[name]) {
        this.list[name].push(cb) // 追加方法
      } else {
        this.list[name] = [cb]; // 创建一个name事件
      }
  }
  emit(name, ...args) {
      let _this = this;
      // 如果事件不存在返回 false
      if (!this.list[name]) return false;

      // 遍历 this.list[name] 中的每一个函数并执行
      this.list[name].forEach(fn => {
          fn.apply(_this, args);
      })
      return true;
  }
  off(name, fn) {
      // 如果事件不存在返回 false
      if (!this.list[name]) return false;

      // 循环数组找到该函数并移除
      for (let i = 0; i < this.list[name].length; i++) {
            if (this.list[name][i] == fn) {
              this.list[name].splice(i, 1);
            }
      }
      return true
  }
}
// 观察者模式
class subject  {
	constructor() {
    this.observers = []
  }
	notify() {
		this.observers.forEach(observer =>{
			observer.update()
		})
	}
	attach (observer) {
		this.observers.push(observer)
	}
}
var observer = {
	update(){
		alert('updated')
	}
}

var subject = new subject()
subject.attach(observer)
subject.notify()

function promiseAll(promises) {
    if (!Array.isArray(promises)) {
        throw new Error('promises must be an array')
    }
    return new Promise((resolve, reject) => {
        let promiseNum = promises.length
        let resolveCount = 0
        let resolveValue = new Array(promiseNum)
        for (i=0; i<promiseNum; i++) {
            Promise.resolve(promises[i]).then((value) => {
                resolveValue[i] = value
                resolveCount++
                if (resolveCount === promiseNum) {
                    resolve(resolveValue)
                }
            }, (err) => {
                reject(err)
            })
        }
    })
}

// 实现promise.race

function promiseRace(promises) {
    if(!Array.isArray(promises)) {
        throw new Error('promises must be an array')
    }
    return new Promise((resolve, reject) => {
        promises.forEach((p) => {
            Promise.resolve(p).then((value) => {
                resolve(value)
            }, (err) => {
                reject(err)
            })
        })
    })
}
const PromiseRace = (iterable)=>{
    return new Promise((resolve, reject) => {
      for (const p of iterable) {
        Promise.resolve(p).then(resolve).catch(reject)
      }
    })
  }

Function.prototype.myCall = function(context, ...args) {
    if (!context) {
        context = window
    }
    let fnSymbol = Symbol()
    context[fnSymbol] = this
    let result = context[fnSymbol](...args)
    delete context[fnSymbol]
    return result
}

// 实现一个apply方法
Function.prototype.myApply = function(context, args) {
    if (!context) {
        context = window
    }
    let fnSymbol = Symbol()

    context[fnSymbol] = this
    let result
    if (args) {
        result = context[fnSymbol](...args)
    } else {
        result = context[fnSymbol]()
    }
    delete context[fnSymbol]
    return result
}

Function.prototype.myBind1 = function(oThis) {
    if (typeof this !== 'function') {
        throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable')
    }
    let argumentsList = Array.prototype.slice.call(arguments, 1)
    let funtionToBind = this
    let fNop = function() {}
    let fBound = function() {
        return funtionToBind.apply(this instanceof fNop ? this : oThis, argumentsList.concat(Array.prototype.slice.call(arguments)))
    }
    if (this.prototype) {
        fNop.prototype = this.prototype
    }
    // 下行代码使得fBound的prototype属性指向fNop的prototype属性
    fBound.prototype = new fNop()
    return fBound
}
