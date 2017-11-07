webpackJsonp([8674273781411],{"./node_modules/json-loader/index.js!./.cache/json/前端校招会考察什么（三）.json":function(n,a){n.exports={data:{site:{meta:{title:"四条眉毛的博客",description:"I'm Lin Jin , a web developer and a travel enthusiasts. My target is to write clean and efficient code, to solve poblems on the web and to learn something more. ",author:"Lin Jin"}},post:{id:"/Users/fourfish/Desktop/gatsby-starter-bootstrap/src/pages/articles/前端校招会考察什么（三）/前端校招会考察什么.md absPath of file >>> MarkdownRemark",html:'<h1>目录</h1>\n<ul>JavaScript\n  <ul>\n    <li>DOM结构和操作:</li>\n    <li>JSON:</li>\n    <li>语言特性:\n      <ul>\n        <li>Function composition</li>\n        <li>原型继承</li>\n        <li>闭包</li>\n        <li>事件委托</li>\n        <li>作用域</li>\n        <li>高阶函数</li>\n      </ul>\n    </li>\n    <li>异步:\n      <ul>\n        <li>异步控制流</li>\n        <li>Promise</li>\n        <li>Callbacks</li>\n      </ul>\n    </li>\n    <li>流行框架:\n      <ul>\n        <li>React</li>\n      </ul>\n    </li>\n    <li>了解jQuery:</li>\n    <li>ES6新特性:</li>\n  </ul>\n</ul>\n<p>正在完成中。。。</p>\n<h1>DOM结构和操作</h1>\n<p>DOM 的全称是文档对象模型。对于 DOM，你可能知道它是 web 页面和脚本或程序语言的桥梁。通过它，你能改变 HTML 文档的结构、样式和内容。但你是否知道，DOM 是 web 页面的完全的面向对象表述。所有操作和创建 web 页面的属性，方法和事件都会被组织成对象的形式（例如， document 对象表示文档本身， table 对象实现了特定的 HTMLTableElement DOM 接口来访问 HTML 表格等）。</p>\n<p>另外，DOM 结构中的每个节点都是对象。这些节点以树的形式组织起来：</p>\n<img src="/907fb6c36155137731f0f394ead0b0c7.svg" alt="树型结构">\n<p>DOM 节点又都包含了许多指向相邻节点的链接：</p>\n<img src="/f5fb2ba0261b99ccd5f2a59174dc011b.svg" alt="节点间的链接">\n<p>在这种树型结构中，节点们彼此嵌套，非常适合用递归函数来遍历 DOM。</p>\n<p>比如，你想通过标签名获取元素：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> find_the_DOM <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">find</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> func<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token function">func</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  node <span class="token operator">=</span> node<span class="token punctuation">.</span>firstChild<span class="token punctuation">;</span>\n  <span class="token keyword">while</span><span class="token punctuation">(</span>node<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">find</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> func<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    node <span class="token operator">=</span> node<span class="token punctuation">.</span>nextSibling<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">var</span> byTagName <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>node<span class="token punctuation">,</span> tagName<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">var</span> arry <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n\ttagName <span class="token operator">=</span> tagName<span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token function">find_the_DOM</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>nodeType <span class="token operator">==</span> document<span class="token punctuation">.</span>ELEMENT_NODE<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">if</span> <span class="token punctuation">(</span>child<span class="token punctuation">.</span>nodeName <span class="token operator">==</span> tagName<span class="token punctuation">)</span>\n        arry<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>child<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\t<span class="token keyword">return</span> arry<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>大部分情况下，遍历节点是为了修改或添加节点。自然，DOM 结合 JS 给开发者提供了非常方便的 API 来修改文档、创建节点，获得属性值等。</p>\n<p>下面是在 web 和 XML 页面脚本中使用 DOM 时，一些常用的 API 简要列表:</p>\n<ul>\n<li>document.getElementById(id)</li>\n<li>element.getElementsByTagName(name):返回的对象是动态变更的。</li>\n<li>document.createElement(name)</li>\n<li>document.createTextNode(string)</li>\n<li>parentNode.appendChild(node)</li>\n<li>parentNode.removeChild(node)</li>\n<li>parentNode.replaceChild(new<em>node,old</em>node)</li>\n<li>element.innerHTML</li>\n<li>element.style.left</li>\n<li>element.setAttribute</li>\n<li>element.getAttribute</li>\n<li>element.addEventListener</li>\n<li>window.onload</li>\n</ul>\n<p>看一个简单的例子，编写一个“语法高亮器”，搜索带有 data-language 属性的 pre 标签，并尝试加亮语言中的关键字：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">highlightCode</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> keywords<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">var</span> text <span class="token operator">=</span> node<span class="token punctuation">.</span>textContent<span class="token punctuation">;</span>\n  node<span class="token punctuation">.</span>textContent <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// 清空节点</span>\n\n  <span class="token keyword">var</span> match<span class="token punctuation">,</span> pos <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>\n  <span class="token comment" spellcheck="true">//不断循环找出文本中的关键字，并为关键字前的文本创建单独的节点，而将匹配的关键字包裹在&lt;strong>元素中。最后为尾部的文本创建单独的节点。</span>\n  <span class="token keyword">while</span> <span class="token punctuation">(</span>match <span class="token operator">=</span> keywords<span class="token punctuation">.</span><span class="token function">exec</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">var</span> before <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>pos<span class="token punctuation">,</span> match<span class="token punctuation">.</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    node<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>before<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">var</span> strong <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"strong"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    strong<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>match<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    node<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>strong<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    pos <span class="token operator">=</span> keywords<span class="token punctuation">.</span>lastIndex<span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token keyword">var</span> after <span class="token operator">=</span> text<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>pos<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  node<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">createTextNode</span><span class="token punctuation">(</span>after<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>具体例子可以去<a href="http://eloquentjavascript.net/13_dom.html">这里</a>看。</p>\n<p>参考链接：</p>\n<ul>\n<li>《JavaScript 编程精解》（英文名：eloquentjavascript）</li>\n</ul>\n<hr>\n<h1>JSON</h1>\n<p>JSON 是一种保存数据的格式。它的编写方式与编写 Js 数组和对象的方式十分相似，不过有些限制。比如属性都必须用双引号扩起来，而且只能使用简单的数据表达式，不能填写函数调用、变量以及任何含有实际运算的代码。Json 中也不可以包含注释。所以你看，Json 只是一个保存数据的格式。</p>\n<h3>方法</h3>\n<p>JSON.parse()\n解析一个 JSON 字符串，可选地转换生成的值及其属性，并返回值。</p>\n<p>JSON.stringify()\n返回与指定值相对应的一个 JSON 字符串，可选地仅包含某些属性或以用户定义的方式替换属性值。</p>\n<hr>\n<h1>语言特性</h1>\n<h2>Function composition</h2>\n<p><span><a href="/掌握JavaScript面试：什么是功能组合？/" >掌握 JavaScript 面试：什么是函数组合？</a></span></p>\n<hr>\n<h2>原型继承</h2>\n<p><span><a href="/Javascript中的多态和继承/" >JavaScript 中的多态和继承</a></span></p>\n<hr>\n<h2>闭包</h2>\n<h3>作用域</h3>\n<p>了解闭包前，你要先知道什么是作用域。因为，闭包是基于词法作用域书写代码时所产生的自然结果，你甚至不需要为了利用它们而有意识地创建闭包。</p>\n<p>作用域包括词法作用域和执行环境。</p>\n<p>词法描述了源代码中的范围。在 JavaScript 中，变量的作用域是由它在源代码中所处位置决定的（显然如此），并且嵌套的函数可以访问到其外层作用域中声明的变量。这种内部函数能访问外部函数的数据结构其实是”差异化继承(differential inherutance)“的体现。有兴趣的话可以去看《Javascript 编程精粹》中的第 50 页(继承-原型)。</p>\n<blockquote>\n<p>if语句或while语句以及其他类似循环结构的语句块不能创建新的作用域。只用function语句块能创建新的作用域。</p>\n</blockquote>\n<p>当程序运行的时候，会创建一个存储变量和变量值的存储系统。这些内存中的作用域结构被称为执行环境。</p>\n<p>执行环境实在程序运行时才被创建的，不是在代码输入时被创建的。执行环境能控制在程序执行过程中不同点能访问哪些变量。</p>\n<h3>什么是闭包？</h3>\n<p>简言之，闭包是由函数引用其周边状态（词法环境）绑在一起形成的（封装）组合结构。换句话说，闭包给你从内部函数访问外部函数的作用域的途径。在 JavaScript 中，闭包在每个函数被创建时形成。</p>\n<p>要使用闭包，只需要简单地将一个函数定义在另一个函数内部，并将它暴露出来。要暴露一个函数，可以将它返回或者传给其他函数。</p>\n<p>内部函数将能够访问到外部函数作用域中的变量，即使外部函数已经执行完毕。</p>\n<h3>闭包的使用例子</h3>\n<p>一样东西很重要，肯定是因为他有非凡的作用。闭包在 JavaScript 中常用来实现对象数据的私有，在事件处理和回调函数中也常常会用到它，此外还有偏函数应用（partial applications）和柯里化（currying），以及其他函数式编程模式。</p>\n<h4>实现对象的私有数据</h4>\n<p>闭包的用途之一是实现对象的私有数据。数据私有是让我们能够面向接口编程而不是面向实现编程的基础。而面向接口编程是一个重要的概念，有助于我们创建更加健壮的软件，因为实现细节比接口约定相对来说更加容易被改变。</p>\n<p>在 JavaScript 中，闭包是用来实现数据私有的原生机制。当你使用闭包进行数据私有画时，被封装的变量只能声明在外部函数中。你只能通过返回的内部函数的特权方法来获取数据。具体的例子如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> getSecret <span class="token operator">=</span> <span class="token punctuation">(</span>secret<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">{</span>\n    <span class="token keyword">get</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> secret\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>在这个例子中，get()方法就是特权方法，你只能通过它访问 secret 变量。</p>\n<p>对象不是唯一的产生私有数据的方式。闭包还可以被用来创建有状态的函数，这些函数的执行过程可能由它们自身的内部状态所决定。例如：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> secret <span class="token operator">=</span> <span class="token punctuation">(</span>msg<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> msg<span class="token punctuation">;</span>\n\n<span class="token function">secret</span><span class="token punctuation">(</span><span class="token string">\'haha\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// output: () => msg</span>\n<span class="token function">secret</span><span class="token punctuation">(</span><span class="token string">\'haha\'</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token comment" spellcheck="true">// output: \'haha\'</span>\n</code></pre>\n      </div>\n<p>在函数式编程中，闭包经常用于偏函数应用和柯里化。</p>\n<p>在 Js 中，函数也是值，从而我们可以用更有趣的方式去操控它们。柯里化允许我们把函数与传递给它的参数相结合，产生出一个新的函数。</p>\n<p>curry 的具体实现如下：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>Function<span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span><span class="token string">\'curry\'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n  <span class="token keyword">var</span> slice <span class="token operator">=</span> Array<span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>slice<span class="token punctuation">,</span>\n      args <span class="token operator">=</span> slice<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">,</span>\n      that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> that<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> args<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>slice<span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>有没有觉得和第一个例子很像。柯里化通过闭包作用域来准备参数。我们实际使用中就可以这样：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> add1 <span class="token operator">=</span> add<span class="token punctuation">.</span><span class="token function">curry</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">add1</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// output: 7</span>\n</code></pre>\n      </div>\n<hr>\n<h2>事件委托</h2>\n<p><span><a href="https://www.cnblogs.com/owenChen/archive/2013/02/18/2915521.html" >JavaScript 事件代理和委托（Delegation）</a></span></p>\n<p>看完这篇文章，突然想到博客中有不少列表。而我只是简单的给每个 li 添加点击的响应函数，没有使用事件委托，琢磨着应该完善一下。谁知道，react 的 onClick 本身就是事件委托，你完全可以直接在 li 上绑定。通过 JSX 这种方式绑定的事件是合成事件，和原生事件是不同的。</p>\n<h2>高阶函数</h2>\n<p>如果一个函数操作其他函数，即将其他函数作为参数或将函数作为返回值，那么我们可以将其称为高阶函数。</p>\n<h1>Promise</h1>\n<p><span><a href="/上手Promise/" >上手 Promise</a></span></p>\n<h1>流行框架</h1>\n<h2>React</h2>\n<h1>了解JQuery</h1>\n<h1>ES6新特性</h1>',frontmatter:{layout:"post",title:"前端校招会考察什么——JavaScript篇",path:"/前端校招会考察什么（三）/",categories:["JavaScript"],date:"2017/10/03"}}},pathContext:{path:"/前端校招会考察什么（三）/"}}}});
//# sourceMappingURL=path---前端校招会考察什么（三）-5c2e874d3b8ef2ec4bb7.js.map