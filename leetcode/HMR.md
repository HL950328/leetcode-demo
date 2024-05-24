1.当修改了一个或多个文件；
2.文件系统接收更改并通知webpack；
3.webpack重新编译构建一个或多个模块，并通知HMR服务器进行更新；
4.HMR Server 使用webSocket通知HMR runtime 需要更新，HMR运行时通过HTTP请求更新jsonp；
5.HMR运行时替换更新中的模块，如果确定这些模块无法更新，则触发整个页面刷新。

为什么HMR用webSocket通知需要更新时不直接把更新后的模块信息发过去呢？还要多一步HMR runtime主动去请求

还记得 HMR 的工作原理图解 中的问题 3 吗？为什么更新模块的代码不直接在第三步通过 websocket 发送到浏览器端，而是通过 jsonp 来获取呢？
我的理解是，功能块的解耦，各个模块各司其职，dev-server/client 只负责消息的传递而不负责新模块的获取，而这些工作应该有 HMR runtime 来完成，HMR runtime 
才应该是获取新代码的地方。再就是因为不使用 webpack-dev-server 的前提，使用 webpack-hot-middleware 和 webpack 配合也可以完成模块热更新流程，
在使用 webpack-hot-middleware 中有件有意思的事，它没有使用 websocket，而是使用的 EventSource。综上所述，HMR 的工作流中，不应该把新模块代码放在 websocket 消息中。