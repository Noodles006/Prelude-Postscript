## 浏览器原理面试题

### Cookie

Cookie是服务器发送到用户浏览器并保存在本地的一小块数据（4KB），它会在浏览器下一次向同一服务器再发起请求时被携带并发送到服务器上。用于解决HTTP协议无状态的问题，如记录用户登录状态、跟踪分析用户行为数据等。由于服务器指定cookie后，浏览器每次请求都会携带cookie数据，会带来额外的性能开销（尤其在移动端环境下），客户端数据存储技术用storage api或indexDB取代cookie。

#### Set-Cookie & Cookie

Set-Cookie响应头部的一个字段，Cookie请求头部的一个字段。

服务器使用Set-Cookie响应头部向用户浏览器发送Cookie信息。下次对同一服务器发起的每一次请求，浏览器都会将之前保存的cookie信息通过Cookie请求头部再次发送给服务器。

#### 属性

- Expires 指定过期时间，设定的日期和时间只与客户端有关，而不是服务器；
- Max-Age 指定有效期，区别于Expires，是指定一段时间；
- Secure 只能通过被HTTPS协议加密过的请求发送给服务端；可以预防man-in-the-middle攻击；
- HttpOnly javascript无法访问，仅服务端可以访问；有助于缓解XSS攻击；
- Domian 指定哪些主机可以接受Cookie，默认是origin，不包含子域名；
- Path 指定主机下的哪些路径可以接受Cookie；
- SameSite 允许服务器要求某个cookie在跨站请求时不会被发送；可以阻止CSRF攻击；
  - None 浏览器在同站、跨站请求下继续发送cookies；
  - Strict 只在相同站点下发送cookie；
  - Lax 与Strict类似；一些情况例外：在跳转新页面且是GET请求时，才会发送跨站cookies；

### 跨域

### Event Loop

JS单线程，通过事件循环机制，保障js非阻塞执行。

- 宏任务：script脚本、定时器、事件回调
- 微任务：Promise、Mutation observer

浏览器与Node的事件循环机制对比：
- 浏览器JS：宏任务 --> 微任务（直到队列为空）--> UI渲染（可选）--> 宏任务
- Node.js：宏任务 (Timers、Pending Callbacks、Idel、Poll、Check、Close callbacks) --> process.nextTick --> 微任务 --> 宏任务

### 浏览器缓存

1. 强缓存
通过Cache-Control: max-age=xxx、Expires (HTTP1.1以下)判断资源缓存时间是否过期，没有过期则从本地缓存空间直接读取。
2. 协商缓存
- Etag、If-None-Match (优先)
- Last-Modified、If-Modified-Since (缺点：1.单位是秒，可能在秒级内修改文件；2.绝对时间，服务端时间不一致，容易判定失效)

命中协商缓存时，服务端返回状态码304，浏览器从本地读取缓存；没有命中，服务端返回状态码200和最新的资源，浏览器重新设置缓存。

浏览器资源缓存位置，按照优先级依次是：

Service Worker --> Memory Cache (关闭tab页失效) --> Disk Cache --> Push Cache（HTTP2.0，Session有效）

Cache-Control字段：
- public 任何对象（如代理服务器CDN等）都可缓存
- private 只能被用户浏览器缓存
- no-cache 需要和服务器确认资源是否发生了变化，如果资源未发生变化，则直接使用缓存好的资源
- no-store 禁止任何缓存
- max-age 设置缓存最大有效期，单位是秒
- max-stale 客户端愿意接收已经过期的资源，但是不能超过给定的时间限制

### 浏览器安全

### 垃圾回收机制
1. V8垃圾回收机制

- 新生代算法

当FROM空间占满时，检查失活对象并销毁，交换FROM、TO空间指向，完成一次新生代GC。TO空间中的对象在下一次检查依然失活的话，会被移动到老生代空间中；TO空间的单个对象占比大小超过25%，也会被移动到老生代空间中。
- 老生代算法
  - 标记清除算法
  当某一空间没有分块的时候、空间中的对象超过一定限制、空间不能保证新生代中的对象移动到老生代中任一条件满足时，启动老生代标记清除算法。遍历堆中的所有对象，标记活的对象，销毁没有被标记的对象。为了优化js执行，GC技术先后发展出了增量标记和并发标记算法，其中并发标记算法，可以让GC扫描和标记对象时，同时允许JS执行。
  - 标记压缩算法
2. 哪些情况会内存泄露
- 全局对象
- setInterval定时器忘记清除，对外部变量有引用
- 闭包
