// 整数转千分位
function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}

str.replace(/\d{1,3}(?=(\d{3})+$)/g,function(s){
    console.log(s)
    return s+','
  }) 
// 整数转换前面加0
function addZero(num) {
    return num < 10 ? '0' + num : num
}

function sendRequest(requestList,limits,callback){
    const promises = requestList.slice() // 取得请求list（浅拷贝一份）
    // 得到开始时，能执行的并发数
    const concurrentNum = Math.min(limits,requestList.length)
    let concurrentCount = 0 // 当前并发数
    // 第一次先跑起可以并发的任务
    const runTaskNeeded = ()=>{
       let i = 0
        // 启动当前能执行的任务
        while(i<concurrentNum){
            i++
            runTask()
        }
    }

    // 取出任务并且执行任务
    const runTask = ()=>{
        const task = promises.shift()
        task && runner(task)
    }

    // 执行器
    // 执行任务，同时更新当前并发数
    const runner = async (task)=>{
        try {
            concurrentCount++
            await task()
        } catch (error) {
        }finally{
            // 并发数--
            concurrentCount--         
            // 捞起下一个任务
            picker()
        }
    }

// 捞起下一个任务
    const picker = ()=>{ 
        // 任务队列里还有任务并且此时还有剩余并发数的时候 执行
        if(concurrentCount < limits && promises.length > 0 ){
            // 继续执行任务
            runTask()
        // 队列为空的时候，并且请求池清空了，就可以执行最后的回调函数了
        }else if(promises.length ==0 && concurrentCount ==0 ){
            // 执行结束
            callback && callback()
        }
    }

    // 入口执行
    runTaskNeeded()
}

async function sendRequest(requestList,limits,callback){
    // 维护一个promise队列
    const promises = []
    // 前的并发池,用Set结构方便删除
    const pool = new Set() // set也是Iterable<any>[]类型，因此可以放入到race里
    // 开始并发执行所有的任务
    for(let request of requestList){
        // 开始执行前，先await 判断 当前的并发任务是否超过限制
        if(pool.size >= limits){
            // 这因为没有try catch ，所以要捕获一下错误，不然影响下面微任务的执行
            await Promise.race(pool).catch(err=>err)
        }
        const promise = request()// 拿到promise
        // 删除请求结束后，从pool里面移除
        const cb = ()=>{
            pool.delete(promise)
        }
        // 注册下then的任务
        promise.then(cb,cb)
        pool.add(promise)
        promises.push(promise)
    }
    // 等最后一个for await 结束，这里是属于最后一个 await 后面的 微任务
    // 注意这里其实是在微任务当中了，当前的promises里面是能确保所有的promise都在其中(前提是await那里命中了if)
    Promise.allSettled(promises).then(callback,callback)
}
