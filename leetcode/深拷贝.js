
function deepCopyBFS(origin){
  let queue = [];
	let map = new Map(); // 记录出现过的对象，用于处理环
  
	let target = getEmpty(origin);
	if(target !== origin){
    queue.push([origin, target]);
		map.set(origin, target);
	}
  
	while(queue.length){
    let [ori, tar] = queue.shift();
		for(let key in ori){
      // 处理环状
			if(map.get(ori[key])){
        tar[key] = map.get(ori[key]);
				continue;
			}
      
			tar[key] = getEmpty(ori[key]);
			if(tar[key] !== ori[key]){
        queue.push([ori[key], tar[key]]);
				map.set(ori[key], tar[key]);
			}
		}
	}
  
	return target;
}

function getEmpty(o){
  if(Object.prototype.toString.call(o) === '[object Object]'){
    return {};
  }
  if(Object.prototype.toString.call(o) === '[object Array]'){
    return [];
  }
  return o;
}

function deepCopyDFS(origin){
	let stack = [];
	let map = new Map(); // 记录出现过的对象，用于处理环

	let target = getEmpty(origin);
	if(target !== origin){
		stack.push([origin, target]);
		map.set(origin, target);
	}

	while(stack.length){
		let [ori, tar] = stack.pop();
		for(let key in ori){
			// 处理环状
			if(map.get(ori[key])){
				tar[key] = map.get(ori[key]);
				continue;
			}

			tar[key] = getEmpty(ori[key]);
			if(tar[key] !== ori[key]){
				stack.push([ori[key], tar[key]]);
				map.set(ori[key], tar[key]);
			}
		}
	}

	return target;
}

function helper(originObj, appearSet) {
  // 深度优先
  if (typeof originObj !== 'object') {
    // 传入非对象，直接复制返回（基本类型复制值，引用类型复制引用）
    return originObj
  }

  if (appearSet.has(originObj)) {
    // 检测到循环引用，终止
    return null
  }

   // 添加
  appearSet.add(originObj)

  let obj

  if (Array.isArray(originObj)) {
    // 数组
    obj = []

    for (let i = 0; i < originObj.length; i++) {
      obj[i] = helper(originObj[i], appearSet)
    }
  } else {
    // 对象
    obj = {}

    // 考虑上symbol
    const keyList = [...Object.getOwnPropertySymbols(originObj), ...Object.keys(originObj)]
    for (let key of keyList) {
      // 深度优先
      obj[key] = helper(originObj[key], appearSet)
    }
  }
  // 删除
  appearSet.delete(originObj)
  // 返回
  return obj
}