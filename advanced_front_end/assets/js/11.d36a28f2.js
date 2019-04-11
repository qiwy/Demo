(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{178:function(t,a,e){"use strict";e.r(a);var s=e(0),v=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"输入url至页面渲染"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#输入url至页面渲染","aria-hidden":"true"}},[t._v("#")]),t._v(" 输入URL至页面渲染")]),t._v(" "),e("hr"),t._v(" "),e("h2",{attrs:{id:"dns-解析过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dns-解析过程","aria-hidden":"true"}},[t._v("#")]),t._v(" DNS 解析过程")]),t._v(" "),e("p",[t._v("首先，浏览器向本地 DNS 服务器发起请求，由于本地 DNS 服务器没有缓存不能直接将域名转换为 IP 地址，需要采用递归或者迭代查询的方式（图 3）依次向根域名服务器、顶级域名服务器、权威域名服务器发起查询请求，直至找到一个或一组 IP 地址，返回给浏览器。")]),t._v(" "),e("h2",{attrs:{id:"http-请求过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#http-请求过程","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP 请求过程")]),t._v(" "),e("ol",[e("li",[t._v("建立连接 —— 三次握手")])]),t._v(" "),e("ul",[e("li",[t._v("浏览器向服务器发送想建立连接的请求「你好，可以认识一下吗」；")]),t._v(" "),e("li",[t._v("服务器向浏览器发送同意建立连接的响应「你好，当然可以啊」；")]),t._v(" "),e("li",[t._v("浏览器向服务器发送确认收到响应的请求，客户端和服务器建立连接「非常高兴认识你」。")])]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[t._v("发送 HTTP 请求\n建立起安全的加密信道后，浏览器开始发送 HTTP 请求，一个请求报文由请求行、请求头、空行、实体（Get 请求没有）组成。请求头由通用首部、请求首部、实体首部、扩展首部组成。")])]),t._v(" "),e("li",[e("p",[t._v("返回 HTTP 响应\n服务器接受并处理完请求，返回 HTTP 响应，一个响应报文格式基本等同于请求报文，由响应行、响应头、空行、实体组成。")])]),t._v(" "),e("li",[e("p",[t._v("维持连接")])])]),t._v(" "),e("p",[t._v("完成一次 HTTP 请求后，服务器并不是马上断开与客户端的连接。在 HTTP/1.1 中，Connection: keep-alive 是默认启用的，表示持久连接，以便处理不久后到来的新请求，无需重新建立连接而增加慢启动开销，提高网络的吞吐能力。在反向代理软件 Nginx 中，持久连接超时时间默认值为 75 秒，如果 75 秒内没有新到达的请求，则断开与客户端的连接。同时，浏览器每隔 45 秒会向服务器发送 TCP keep-alive 探测包，来判断 TCP 连接状况，如果没有收到 ACK 应答，则主动断开与服务器的连接。")]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[t._v("断开连接 —— 四次挥手")])]),t._v(" "),e("ul",[e("li",[t._v("浏览器向服务器发送想断开连接的请求「我要走啦」；")]),t._v(" "),e("li",[t._v("服务器向浏览器发送收到请求的响应「我知道啦」；")]),t._v(" "),e("li",[t._v("服务器向浏览器发送断开连接的请求「可以了」；")]),t._v(" "),e("li",[t._v("浏览器断开连接并向服务器发送一个反馈请求，服务器收到后断开连接「好的，拜拜」。")])]),t._v(" "),e("h2",{attrs:{id:"浏览器解析过程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器解析过程","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器解析过程")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("HTML解析出DOM Tree")])]),t._v(" "),e("li",[e("p",[t._v("CSS解析出Style Rules")])]),t._v(" "),e("li",[e("p",[t._v("将二者关联生成Render Tree\nRender Tree的构建其实就是DOM Tree和CSSOM Attach的过程。\n呈现器是和 DOM 元素相对应的，但并非一一对应。Render Tree实际上就是一个计算好样式，与HTML对应的（包括哪些显示，那些不显示）的Tree。")])]),t._v(" "),e("li",[e("p",[t._v("Layout 根据Render Tree计算每个节点的信息")])])]),t._v(" "),e("p",[t._v("通过渲染树中渲染对象的信息，计算出每一个渲染对象的位置和尺寸，将其安置在浏览器窗口的正确位置，而有些时候我们会在文档布局完成后对DOM进行修改，这时候可能需要重新进行布局，也可称其为回流，本质上还是一个布局的过程，每一个渲染对象都有一个布局或者回流方法，实现其布局或回流。")]),t._v(" "),e("ol",{attrs:{start:"5"}},[e("li",[t._v("Painting 根据计算好的信息绘制整个页面\n在绘制阶段，系统会遍历呈现树，并调用呈现器的“paint”方法，将呈现器的内容显示在屏幕上。绘制工作是使用用户界面基础组件完成的。")])]),t._v(" "),e("h4",{attrs:{id:"tips-页面渲染优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#tips-页面渲染优化","aria-hidden":"true"}},[t._v("#")]),t._v(" tips: 页面渲染优化")]),t._v(" "),e("ul",[e("li",[e("p",[t._v("HTML文档结构层次尽量少，最好不深于六层；")])]),t._v(" "),e("li",[e("p",[t._v("脚本尽量后放，放在前即可；")])]),t._v(" "),e("li",[e("p",[t._v("少量首屏样式内联放在标签内；")])]),t._v(" "),e("li",[e("p",[t._v("样式结构层次尽量简单；")])]),t._v(" "),e("li",[e("p",[t._v("在脚本中尽量减少DOM操作，尽量缓存访问DOM的样式信息，避免过度触发回流；")])]),t._v(" "),e("li",[e("p",[t._v("减少通过JavaScript代码修改元素样式，尽量使用修改class名方式操作样式或动画；")])]),t._v(" "),e("li",[e("p",[t._v("动画尽量使用在绝对定位或固定定位的元素上；")])]),t._v(" "),e("li",[e("p",[t._v("隐藏在屏幕外，或在页面滚动时，尽量停止动画；")])]),t._v(" "),e("li",[e("p",[t._v("尽量缓存DOM查找，查找器尽量简洁；")])]),t._v(" "),e("li",[e("p",[t._v("涉及多域名的网站，可以开启域名预解析")])]),t._v(" "),e("li",[e("p",[t._v("少用一些高性能的 css 属性")])])]),t._v(" "),e("div",{staticClass:"language-md line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-md"}},[e("code",[t._v("box-shadows\nborder-radius\ntransparency\ntransforms\nCSS filters（性能杀手）\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])])])}],!1,null,null,null);a.default=v.exports}}]);