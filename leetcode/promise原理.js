class Promise {
  constructor(executor) {
    this.value = undefined
    this.state = 'pending'
    this.reason = undefined
    this.onResolvedCallback = []
    this.onRejectedCallback = []
    try {
      executor(this.resolve, this.reject)
    } catch(err) {
      this.reject(err)
    }
  }
  resolve = (value) => {
    if (this.state === 'pending') {
      this.state = 'fulfilled'
      this.value = value
      this.onResolvedCallback.forEach(fn => fn())
    }
  }

  reject = (reason) => {
    if (this.state === 'pending') {
      this.reason = reason
      this.state = 'rejected'
      this.onRejectedCallback.forEach(fn => fn())
    }
  }

  then(onFulfilled, onRejected) {
    let promise2 = new Promise((resolve, reject) => {
      if (this.state === 'fulfilled') {
        let x = onFulfilled(this.value)
        resolvePromise(x, resolve, reject)
      }
      if (this.state === 'rejected') {
        let x = onRejected(this.reason)
        resolvePromise(x, resolve, reject)
      }
      if (this.state === 'pending') {
        this.onResolvedCallback.push(() => {
          onFulfilled(this.value)
        })
  
        this.onRejectedCallback.push(() => {
          onRejected(this.reason)
        })
      }
    })
    return promise2
  }
}

function resolvePromise(x, resolve, reject) {
  if (x instanceof Promise) {
    x.then((value) => {
      resolve(value)
    }, (err) => {
      reject(err)
    })
  } else {
    resolve(x)
  }
}
