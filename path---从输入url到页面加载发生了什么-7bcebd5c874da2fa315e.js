webpackJsonp([0x657acff6a738],{"./node_modules/json-loader/index.js!./.cache/json/从输入url到页面加载发生了什么.json":function(a,n){a.exports={data:{site:{meta:{title:"四条眉毛的博客",description:"I'm Lin Jin , a web developer and a travel enthusiasts. My target is to write clean and efficient code, to solve poblems on the web and to learn something more. ",url:"",author:"Lin Jin",twitter:"四条眉毛"}},post:{id:"/Users/fourfish/Desktop/gatsby-starter-bootstrap/src/pages/articles/从输入URL到页面加载发生了什么?/index.md absPath of file >>> MarkdownRemark",html:'<h1>序</h1>\n<p>首先你在浏览器里输入网址，然后按下 Enter 键，之后浏览器就会开始查找 IP。它会先从浏览器的缓存里寻找相应的 IP。如果找不到，它会依次从系统缓存，路由器缓存，ISP DNS 缓存中寻找 IP。如果还是找不到的话，那只能从根域名开始，递归的往下搜索，比如从.com 到 Facebook.com。找到 IP 后，就会向服务器发起 HTTP 请求，然后服务器处理请求，可能返回一个 HTML 响应。一直到这一步，只能算是问题的一部分。为什么这么说呢？ 你完全可以把上面的文字添加到“输入 url 到加载完页面发生了什么”后面，组成一个简单很多的问题。文章接下来的部分，就是在回答这个更简单的问题。现在的我还不能面面俱到，只能选熟悉的地方回答。</p>\n<h1>关键渲染路径</h1>\n<p>浏览器接收到服务器返回的 HTML、CSS 和 JavaScript 字节数据并对其进行解析和转变成像素的渲染过程被称为关键渲染路径。通过优化关键渲染路径即可以缩短浏览器渲染页面的时间。优化关键渲染路径是指优先显示与当前用户操作有关的内容。</p>\n<p>浏览器在渲染页面时，需要知道页面结构和样式。所以，浏览器会先构建 DOM 树和 CSSOM 树，像是画蓝图一样。</p>\n<p>DOM 树全称为 Document Object Model 文档对象模型，它是 HTML 和 XML 文档的编程接口，提供了对文档的结构化表示，并定义了一种可以使程序对该结构进行访问的方式（比如 JavaScript 就是通过 DOM 来操作结构、样式和内容）。DOM 将文档解析为一个由节点和对象组成的集合，可以说一个 Web 页面其实就是一个 DOM。</p>\n<p>CSSOM 树全称为 Cascading Style Sheets Object Model 层叠样式表对象模型，它与 DOM 树的含义相差不大，只不过它是 CSS 的对象集合。</p>\n<h2>构建DOM</h2>\n<p>浏览器获得 HTML 文件后会经过一个流程将数据解析为 DOM 树：</p>\n<html><head></head><body><figcaption>&#x5B57;&#x8282; &#x2192; &#x5B57;&#x7B26; &#x2192; &#x4EE4;&#x724C; &#x2192; &#x8282;&#x70B9; &#x2192; &#x5BF9;&#x8C61;&#x6A21;&#x578B;</figcaption>\n\n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; margin-bottom: 1.0725rem;; max-width: 750px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 55.38735529830811%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAACZUlEQVQoz2MQXZQ4TWBB3B6BWdF7BJcm7pHIdNFjYGCQAWJpIFaE0nxAzA/EvFCaB4nNC8WcDCCw4NDhsPmHj+TO3be/dOHRY7mzNm0R3bFjB+eyZcu4YBjGB9HobGR84sQJNobDVx6nbz9+tXHZlgMdJ269auybvkDB3NxczsjISNHe3l7K1NRU3tjYWAHEB7FBtIGBgRKIBqkDYZiBN27cYGU4dPnR2gMXH97aefL67WM3nt9avvdGwcLtlycuP/SkdtHOqxOX7b0xcd+FN/XLDzyoXbzr6sRVR1+0zN18fuLKA3cmLt77oAmkZsOZD00rjzxrOnPzXSzDuzNp6a9OJDXe3hPf+fVSWuPFfdXatw7m1z8402J/72SD540DhWXrtm4XuHmotPDmkeqwWye79G4cKCi/emKq4uPT1ZlAnH73dJfZjf25bQ9ONzoyPDycFvb4cGrulR1Jpc+OpeWe3FEvcetkh/3xA3Olzx+ZqnLndKf9/sOnOG+c6La6eGSC9jGg+O3jjV5HDq0SvnR0gj4Q650+PFvm6rFuy30H1goxfDqfNvPTueSDz4/GH/xxJe3gvYMZCgxYQPCK/ywXj3Rk3DhcsXLRrtOsDKSCq0cas28dLlkUPPm/sEvXf073/v8sV4Bit4+ULoqY9InXb95/JqINu3OsvPHaoaquB6frfe8dK16zautakXsnaybeONHW7DXtPwdIjdfU/+xXD9cufni6Opckl165/ynu5KWHay5f3JF87WDp9otXzhYePHVr46kbHxyAFs++d6Iql4EccOry4w3Hzt3ZdOziow586gDRzlUjJVK7HAAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="&#x5B57;&#x8282; &#x2192; &#x5B57;&#x7B26; &#x2192; &#x4EE4;&#x724C; &#x2192; &#x8282;&#x70B9; &#x2192; &#x5BF9;&#x8C61;&#x6A21;&#x578B;" title="" src="/static/cc3a2a29937364a40360717171744b03-245fd.png" srcset="/static/cc3a2a29937364a40360717171744b03-7aee9.png 188w,\n/static/cc3a2a29937364a40360717171744b03-2014b.png 375w,\n/static/cc3a2a29937364a40360717171744b03-245fd.png 750w,\n/static/cc3a2a29937364a40360717171744b03-f5424.png 1123w" sizes="(max-width: 750px) 100vw, 750px">\n    </span>\n  </span>\n  </body></html>\n<ol>\n<li>\n<p>转换： 浏览器从磁盘或网络读取 HTML 的原始字节，并根据文件的指定编码（例如 UTF-8）将它们转换成各个字符。</p>\n</li>\n<li>\n<p>令牌化： 浏览器将字符串转换成 W3C HTML5 标准规定的各种令牌，例如，“<html>”、“<body>”，以及其他尖括号内的字符串。每个令牌都具有特殊含义和一组规则。</p>\n</li>\n<li>\n<p>词法分析： 发出的令牌转换成定义其属性和规则的“对象”。</p>\n</li>\n<li>\n<p>DOM 构建： 最后，由于 HTML 标记定义不同标记之间的关系（一些标记包含在其他标记内），创建的对象链接在一个树数据结构内，此结构也会捕获原始标记中定义的父项-子项关系：HTML 对象是 body 对象的父项，body 是 paragraph 对象的父项，依此类推。</p>\n</li>\n</ol>\n<p>整个流程的最终输出是我们这个简单页面的文档对象模型 (DOM)，浏览器对页面进行的所有进一步处理都会用到它。</p>\n<h2>构建CSSOM</h2>\n<p>在浏览器构建 DOM 时，在文档的 head 部分遇到了一个 link 标记，该标记引用一个外部 CSS 样式表：style.css。由于预见到需要利用该资源来渲染页面，它会立即发出对该资源的请求，并得到以下内容：</p>\n<div class="gatsby-highlight">\n      <pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span> <span class="token property">font-size</span><span class="token punctuation">:</span> 16px <span class="token punctuation">}</span>\n<span class="token selector">p</span> <span class="token punctuation">{</span> <span class="token property">font-weight</span><span class="token punctuation">:</span> bold <span class="token punctuation">}</span>\n<span class="token selector">span</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> red <span class="token punctuation">}</span>\n<span class="token selector">p span</span> <span class="token punctuation">{</span> <span class="token property">display</span><span class="token punctuation">:</span> none <span class="token punctuation">}</span>\n<span class="token selector">img</span> <span class="token punctuation">{</span> <span class="token property">float</span><span class="token punctuation">:</span> right <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>与构建 DOM 时候一样，会依次产生字节，字符，令牌，节点，css 对象模型：\n<html><head></head><body></body></html></p>\n<p>将 cssom 和 dom 比较，你会发现 cssom 是基于 dom 构建的。实际情况下，浏览器将不会渲染任何已处理的内容，直至 CSSOM 构建完毕,所以说 css 被视为阻塞渲染的资源。</p>\n<blockquote>\n<p><a href="https://segmentfault.com/q/1010000000713509">浏览器为什么要从右向左匹配 CSS 选择器</a></p>\n</blockquote>\n<h2>构建渲染树</h2>\n<p>在构建了 DOM 树和 CSSOM 树之后，浏览器只是拥有了两个互相独立的对象集合，DOM 树描述了文档的结构与内容，CSSOM 树则描述了对文档应用的样式规则，想要渲染出页面，就需要将 DOM 树与 CSSOM 树结合在一起，这就是渲染树。</p>\n<html><head></head><body>\n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; margin-bottom: 1.0725rem;; max-width: 750px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 46.69565217391305%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAAB60lEQVQoz2NgQABRIGYBMW6c7LS+ebhk0eFDC3gZUIEIEAsxEAJXD1XWnjvQUOTW+5/TueM/57EDk92uHChdPGHNKbjmo9e/qp6/+mD/qYv3Vu679NX58uGG/MsHqzud2/9yes/4zwo37PaxiuLLh2oarx2u7r5zoib1xsn2iOvHmuaADPad859p++7FhnePly2/fLxHDqTec8p/1tvHa9uvn2jL3bV7vtaNQ8Wrjx6YanzpYM2qu6ca7eAGb7/0X+j05Udrzl1/nHH5QMXyK5d25B48fXvV2QtHk+4eLV5y5vwx18tXb706df7mq4sXD1RdOVC+8uqteyvOXrr94NS1lyuvXL/77OzluxcwvH/swqOC4+fvrDh05l4PsviB1/+ZD1//JTf16H/W89ce3zt14eaD01efTw2e/p8ZJO/f95cdrLCkpIS5sLCQgxDOzc3lhrEzc4o5cajhRI9BMSAG23Tp9qvZV++82HL6+uuaqw8+2929/2jLrcefDRlIBZsuP5Pef+HQlT1n91/Zcu5i1oMzDaUPTlVuXr33MNj22yfqJgH5i4g2cNvD/6wHb98xXXv+ufTFO++mnr32dP25W+9bj5y9s+P8nU92j05V9Nw9Xr5o97Wb6QcuHr575NqJu5svP1WA6QcAkmsdvh0WJ48AAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="&#x6E32;&#x67D3;&#x6811;" title="" src="/static/b0bc0b83c73cf0de7cc86ae8c05027d9-245fd.png" srcset="/static/b0bc0b83c73cf0de7cc86ae8c05027d9-7aee9.png 188w,\n/static/b0bc0b83c73cf0de7cc86ae8c05027d9-2014b.png 375w,\n/static/b0bc0b83c73cf0de7cc86ae8c05027d9-245fd.png 750w,\n/static/b0bc0b83c73cf0de7cc86ae8c05027d9-a0f71.png 1125w,\n/static/b0bc0b83c73cf0de7cc86ae8c05027d9-44b35.png 1150w" sizes="(max-width: 750px) 100vw, 750px">\n    </span>\n  </span>\n  </body></html>\n<p>为构建渲染树，浏览器大体上完成了下列工作：</p>\n<ol>\n<li>\n<p>从 DOM 树的根节点开始遍历每个可见节点。</p>\n<ul>\n<li>某些节点不可见（例如脚本标记、元标记等），因为它们不会体现在渲染输出中，所以会被忽略。</li>\n<li>某些节点通过 CSS 隐藏，因此在渲染树中也会被忽略，例如，上例中的 span 节点不会出现在渲染树中，因为有一个显式规则在该节点上设置了“display: none”属性。</li>\n</ul>\n</li>\n<li>\n<p>对于每个可见节点，为其找到适配的 CSSOM 规则并应用它们。</p>\n</li>\n<li>\n<p>发射可见节点，连同其内容和计算的样式。</p>\n</li>\n</ol>\n<p>渲染树构建完毕后，浏览器得到了每个可见节点的内容与其样式，下一步工作则需要计算每个节点在窗口内的确切位置与大小，也就是布局阶段。</p>\n<h2>布局</h2>\n<p>布局阶段会从渲染树的根节点开始遍历，然后确定每个节点对象在页面上的确切大小与位置。布局阶段的输出是一个盒子模型，它会精确地捕获每个元素在屏幕内的确切位置与大小，所有相对的测量值也都会被转换为屏幕内的绝对像素值。</p>\n<p>最后，既然我们知道了哪些节点可见、它们的计算样式以及几何信息，我们终于可以将这些信息传递给最后一个阶段：将渲染树中的每个节点转换成屏幕上的实际像素。这一步通常称为“绘制”或“栅格化”。</p>\n<h2>总结</h2>\n<p>下面简要概述了浏览器完成的步骤：</p>\n<ol>\n<li>处理 HTML 标记并构建 DOM 树。</li>\n<li>处理 CSS 标记并构建 CSSOM 树。</li>\n<li>将 DOM 与 CSSOM 合并成一个渲染树。</li>\n<li>根据渲染树来布局，以计算每个节点的几何信息。</li>\n<li>将各个节点绘制到屏幕上。</li>\n</ol>\n<p>优化关键渲染路径_就是指最大限度缩短执行上述第 1 步至第 5 步耗费的总时间。具体怎么优化，请看下一节。</p>\n<p>以上就是浏览器从获得文件，到初次加载页面的全部信息。</p>\n<h1>优化</h1>\n<p>通过一张图来说优化方法。</p>\n<html><head></head><body>\n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; margin-bottom: 1.0725rem;; max-width: 750px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 49.61325966850828%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABt0lEQVQoz42SaVPCMBCG/f+/yA8eWGRAwVJnQAcCvUS5WuiV9CD0dZMqI/rFndnpJtk82X23F1JK/MdzUWG74li9cwiKeVZC8ApJXCKOCkS7QuddgIxNp2BsiiAI4HkefN/DdrvFcrmEbds6scgl4n1FYIl9WCIiV7Ha//CFPqvrugEuHAevbQNr38ek08F0OIRjPsEeDGCPRjgejxrishTsJaVKCyRRhXCT490TVF1FDIHVIm+Aiqz8SJWoryxL1ASRQui1smBdYuFy7QoYE+TNUbASDssIzHWeBrapuk7nHm3DoHZ9ONTmiCprtW4xoCq73S4M4x6maZE0DK7rwp/NkLAZUpJIP9q82wBTfcjACRYTKJlMkFFiQTpWcQxBWpa7nV5nBFN54s1HOrf12XcXJ6C6dMgyFHRJFgUOSfKVVJ/k+HkJjU6Qea7zT+V9A1uXl2jf3uDu6grufI45Tb3X6+Gh18WQBvRAcev6GhbFM+rGoSGqPyDfbJCvN2fvaGDw2EdKuu2fLcQvY0TjMcJ+H6FpYm9ZCAdP2JGWav834LedTVnZgfNm/dVGEzem2jtrvf4L/AQHYfRKPro1oQAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="&#x4F18;&#x5316;" title="" src="/static/654bc53d055ea9fd0a726f480f4e72e9-245fd.png" srcset="/static/654bc53d055ea9fd0a726f480f4e72e9-7aee9.png 188w,\n/static/654bc53d055ea9fd0a726f480f4e72e9-2014b.png 375w,\n/static/654bc53d055ea9fd0a726f480f4e72e9-245fd.png 750w,\n/static/654bc53d055ea9fd0a726f480f4e72e9-728b7.png 905w" sizes="(max-width: 750px) 100vw, 750px">\n    </span>\n  </span>\n  </body></html>\n<h3>Minify,Compress, Cache</h3>\n<p><strong>Minify</strong>指的是资源最小化，具体包含预处理和环境特定优化两部分。</p>\n<p>在计算机科学中，预处理器是程序中处理输入数据，产生能用来输入到其他程序的数据的程序。 输出被称为输入数据预处理过的形式，常用在之后的程序比如编译器中。在网站中的表现形式要差不多。网页中的 html，css 和 JavaScript 等根据不同的规则构成有效的内容元素。例如：</p>\n<ul>\n<li>\n<p>代码注释是开发者最好的朋友，但浏览器不需要看到它们！ 直接删除 CSS (/* … */)、HTML (<!-- … -->) 和 JavaScript (// …) 注释可显著减小网页的总大小。</p>\n</li>\n<li>\n<p>“智能”CSS 压缩程序会注意到采用低效率的方式为“.awesome-container”定义规则，它会将两个声明折叠为一个而不影响任何其他样式，从而节省更多字节。</p>\n</li>\n<li>\n<p>空白（空格和制表符）能够在 HTML、CSS 和 JavaScript 中给开发者提供方便。可以增加一个压缩程序来去掉所有制表符和空格。</p>\n</li>\n</ul>\n<p>另外还会根据特定的场合进行优化。简单的说就是只给用户需要的。</p>\n<p><strong>Compress</strong>是指压缩文本，如通过 gzip。GZIP 是一种可以作用于任何字节流的通用压缩程序。它会在后台记忆一些之前看到的内容，并尝试以高效方式查找并替换重复的数据片段</p>\n<p><strong>Cache</strong>指的是 Http 缓存。</p>\n<h3>Minimize use of render blocking resource</h3>\n<p>意思应该很明确。通过 media query 来按需加载和內联 css 来减少资源。</p>\n<h3>Minimize use of parser blocking resource</h3>\n<p>有关 script,script defer 和 script async 的不同，可以看下图：</p>\n<html><head></head><body>\n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; margin-bottom: 1.0725rem;; max-width: 496px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 16.25544267053701%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAADABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAEF/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAdwRRH//xAAUEAEAAAAAAAAAAAAAAAAAAAAQ/9oACAEBAAEFAn//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAUEAEAAAAAAAAAAAAAAAAAAAAQ/9oACAEBAAY/An//xAAXEAEAAwAAAAAAAAAAAAAAAAABABAx/9oACAEBAAE/ITY1/9oADAMBAAIAAwAAABCIL//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8QP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8QP//EABkQAQACAwAAAAAAAAAAAAAAAAEAEBEhcf/aAAgBAQABPxBadY3JX//Z&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="js&#x5F02;&#x6B65;" title="" src="/static/244a0c3246f534e96ce88124e3978261-ff284.jpg" srcset="/static/244a0c3246f534e96ce88124e3978261-02be4.jpg 188w,\n/static/244a0c3246f534e96ce88124e3978261-4f2c6.jpg 375w,\n/static/244a0c3246f534e96ce88124e3978261-ff284.jpg 689w" sizes="(max-width: 496px) 100vw, 496px">\n    </span>\n  </span>\n  </body></html>',frontmatter:{layout:"post",title:"输入url到加载完页面发生了什么?",path:"/从输入URL到页面加载发生了什么/",categories:["前端"],date:"2017/10/15"}}},pathContext:{path:"/从输入URL到页面加载发生了什么/"}}}});
//# sourceMappingURL=path---从输入url到页面加载发生了什么-7bcebd5c874da2fa315e.js.map