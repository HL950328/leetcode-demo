function createStore(createState) {
    let state;
    let listeners = [];
    function getState() {
      return state;
    }
    function subscribe(listener) {
      listeners.push(listener);
      return function unsubscribe() {
        const index = listeners.indexOf(listener);
        listeners.splice(index, 1);
      };
    }
    function setState(fnOrObj, replace) {
      const nextState = typeof fnOrObj === "function" ? fnOrObj(state) : fnOrObj;
      const previousState = state;
      state = replace ? nextState : Object.assign(state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  
    function destory(params) {
      listeners = [];
    }
    const api = { getState, setState, subscribe, destory };
    state = createState(setState, getState, api);
    return api;
}

export function create(createState) {
    const api = createStore(createState);
    function useStore(selector = api.getState, equalityFn = Object.is) {
      const hookSpaceRef = useRef(selector.toString());
      const [, forceUpdate] = useReducer((c) => c + 1, 0);
      const state = api.getState();
      // 每一个useStore第一次调用的时候，初始化三个ref ---- hook空间的初始化第一部分
      // 三个ref 把本hook空间 state、selector、selectedState 存下来
      // 方便store中state变化、业务层render的时候取值
      const stateRef = useRef(state);
      const selectorRef = useRef(selector);
      let stateSliceRef = useRef(selector(state));
  
      //TODO
      //源码中还有一段uselayoutEffect(()=>{})的逻辑，
      //去掉也不影响呀，不懂这段逻辑干嘛的
  
      useLayoutEffect(() => {
        // 每一个useStore第一次调用的时候，订阅状态变化 ------ hook空间的初始化第二部分
        const listener = () => {
          // 业务层每次setState
          //取出当前的状态（一个store中的全量状态）
          const nextState = api.getState();
          //通过对应的selector计算出当前的状态切片
          //因为每个useStore的时候都初始化了一个selectorRef，所以通过selectorRef.current就能找到对应的selector
          //为什么不直接用useStore传入的selector计算呢？因为listener的执行和useStore的调用是割裂的，用useStore传入的selector并不是对应的selector
          const nextStateSlice = selectorRef.current(nextState);
          //比较状态切片是否变化了，变化了才更新
          if (!equalityFn(nextStateSlice, stateSliceRef.current)) {
            // 更新状态
            stateRef.current = nextState;
            // 更新状态切片，用于下一次进入listener时的比较
            stateSliceRef.current = nextStateSlice;
            // 触发业务层的render
            forceUpdate();
          } else {
            // 无需更新
          }
        };
        const unSubscribe = api.subscribe(listener);
        // 当组件销毁，我们需要取消订阅
        return unSubscribe;
      }, []);
  
      return stateSliceRef.current;
    }
  
    return useStore;
}