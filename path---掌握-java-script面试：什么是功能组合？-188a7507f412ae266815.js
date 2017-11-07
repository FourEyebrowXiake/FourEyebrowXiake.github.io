webpackJsonp([0x93a646928a31],{"./node_modules/json-loader/index.js!./.cache/json/掌握-java-script面试：什么是功能组合？.json":function(n,s){n.exports={data:{site:{meta:{title:"四条眉毛的博客",description:"I'm Lin Jin , a web developer and a travel enthusiasts. My target is to write clean and efficient code, to solve poblems on the web and to learn something more. ",author:"Lin Jin"}},post:{id:"/Users/fourfish/Desktop/gatsby-starter-bootstrap/src/pages/articles/掌握JavaScript面试：什么是功能组合？/index.md absPath of file >>> MarkdownRemark",html:'<blockquote>\n<p>原文链接: <a href="https://medium.com/javascript-scene/master-the-javascript-interview-what-is-function-composition-20dfb109a1a0">Master the JavaScript Interview: What is Function Composition?\n</a></p>\n</blockquote>\n<p>Function composition 是组合两个或多个函数以产生新功能的过程。</p>\n<p>组合在一起的函数就像一系列结合起来的管道。我们的数据在这些管道中流通。</p>\n<p>换种说法，Function composition 就是数学中的复合函数。函数’f(x)‘和函数’g(x)‘的组合可以被定义成’f(g(x))‘.它的调用顺序由内而外，依次是 x, g, f。</p>\n<p>换到编程的场景下，你可以把每个函数都当作一个动作。比如你要将用户的全名转换为 URL 段，为每个用户提供个人资料页面。为了做到这一点，你要经历一系列的步骤：</p>\n<ol>\n<li>根据空格，把名字字符串转换成数组</li>\n<li>遍历数组，将名称都转换成小写，并返回新数组。</li>\n<li>加入破折号</li>\n<li>对 URI 组件进行编码</li>\n</ol>\n<p>这是一个简单的实现：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascrpit"><code>const toSlug = input => encodeURIComponent(\n  input.split(\' \')\n    .map(str => str.toLowerCase())\n    .join(\'-\')\n);</code></pre>\n      </div>\n<p>不错，但是如果我告诉你，它可以更加可读呢？</p>\n<p>想象一下，每个操作都有一个对应的可组合的函数，就可以这样写：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascrpit"><code>const toSlug = input => encodeURIComponent(\n  join(\'-\')(\n    map(toLowerCase)(\n      split(\' \')(\n        input\n      )\n    )\n  )\n);\n\nconsole.log(toSlug(\'JS Cheerleader\')); // \'js-cheerleader\'</code></pre>\n      </div>\n<p>这看上去是不是很像‘f(g(x))’。不过，这种写法比上一种更加难读。</p>\n<p>为了实现函数间的组合，我们需要使用可复用的公共程序，如’split()’, ‘join()‘和 ‘map()‘。这是它们的实现：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> curry <span class="token operator">=</span> fn <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token operator">=></span> fn<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> join <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> arr<span class="token punctuation">)</span> <span class="token operator">=></span> arr<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> toLowerCase <span class="token operator">=</span> str <span class="token operator">=></span> str<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> split <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token punctuation">(</span>splitOn<span class="token punctuation">,</span> str<span class="token punctuation">)</span> <span class="token operator">=></span> str<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span>splitOn<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>除了’toLowerCase’之外，其他函数都可以从 Lodash/fb 中获得：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> curry<span class="token punctuation">,</span> map<span class="token punctuation">,</span> join<span class="token punctuation">,</span> split <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'lodash/fp\'</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>也可以像这样导入：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> curry <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'lodash/fp/curry\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> map <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">\'lodash/fp/map\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>这里我偷了点懒。注意这个 curry 从技术上来说，并不是一个真正的柯里化函数。真正的柯里化函数总会生成一个一元函数。这里的 curry 只是一个偏函数应用。请参考<a href="https://medium.com/javascript-scene/curry-or-partial-application-8150044c78b8#.13tj19278">“柯里化和偏函数应用之间的区别是什么？”</a>这篇文章。不过，这里只是为了演示用途，我们就把它当作一个真正的柯里化函数好了。</p>\n<p>回过头看‘toSlug’的实现，这中写法很不优雅：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> toSlug <span class="token operator">=</span> input <span class="token operator">=></span> <span class="token function">encodeURIComponent</span><span class="token punctuation">(</span>\n  <span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'-\'</span><span class="token punctuation">)</span><span class="token punctuation">(</span>\n    <span class="token function">map</span><span class="token punctuation">(</span>toLowerCase<span class="token punctuation">)</span><span class="token punctuation">(</span>\n      <span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\' \'</span><span class="token punctuation">)</span><span class="token punctuation">(</span>\n        input\n      <span class="token punctuation">)</span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">)</span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">toSlug</span><span class="token punctuation">(</span><span class="token string">\'JS Cheerleader\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \'js-cheerleader</span>\n</code></pre>\n      </div>\n<p>对我来说，这里的嵌套太多了，读起来有点让人摸不着头脑。我们可以用一个会自动组合这些函数的函数来扁平化嵌套，就是说，这个函数会从一个函数得到输出，并自动将它传递给下一个函数作为输入，直到得到最终值为止。</p>\n<p>细想一下，好像数组中有一个函数可以做差不多的事情。这个函数就是 reduce()，它用一系列值为参数，对每个值应用一个函数，最后累加成一个结果。值本身也可以函数。但是 reduce() 是从左到右递减，为了匹配上面的组合行为，我们需要它从右到左缩减。</p>\n<p>好事情是刚好数组也有一个 reduceRight() 方法可以干这事:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> compose <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">...</span>fns<span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">=></span> fns<span class="token punctuation">.</span><span class="token function">reduceRight</span><span class="token punctuation">(</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> f<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">f</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>‘reduce’和’reduceRight’唯一的不同只有遍历的方向。我们可以用它从右到左迭代数组，将函数依次应用到每个数组元素上，最后得到累加值（v）。</p>\n<p>用 compose，我们就可以不需要嵌套来重写上面的组合：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> toSlug <span class="token operator">=</span> <span class="token function">compose</span><span class="token punctuation">(</span>\n\n  encodeURIComponent<span class="token punctuation">,</span>\n\n  <span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'-\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\n  <span class="token function">map</span><span class="token punctuation">(</span>toLowerCase<span class="token punctuation">)</span><span class="token punctuation">,</span>\n\n  <span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\' \'</span><span class="token punctuation">)</span>\n\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">toSlug</span><span class="token punctuation">(</span><span class="token string">\'JS Cheerleader\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \'js-cheerleader\'</span>\n</code></pre>\n      </div>\n<p>当然，lodash/fp 也提供了 compose()。使用方法和上面一样。</p>\n<p>当以数学形式的组合从内到外的角度来思考时，compose 是不错的。它和符合 f(g(x))的形式。不过，如果想以从左到右的顺序的角度来思考，又该怎么办呢？</p>\n<p>还有另外一种形式，通常称为 pipe()。Lodash 称之为 flow():</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> pipe <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token operator">...</span>fns<span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">=></span> fns<span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span>v<span class="token punctuation">,</span> f<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">f</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> fn1 <span class="token operator">=</span> s <span class="token operator">=></span> s<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> fn2 <span class="token operator">=</span> s <span class="token operator">=></span> s<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reverse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> fn3 <span class="token operator">=</span> s <span class="token operator">=></span> s <span class="token operator">+</span> <span class="token string">\'!\'</span>\n\n<span class="token keyword">const</span> newFunc <span class="token operator">=</span> <span class="token function">pipe</span><span class="token punctuation">(</span>fn1<span class="token punctuation">,</span> fn2<span class="token punctuation">,</span> fn3<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">newFunc</span><span class="token punctuation">(</span><span class="token string">\'Time\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// emit!</span>\n</code></pre>\n      </div>\n<p>可以看到，这个实现与 compose() 几乎完全一样。唯一的不同之处是，这里是用 .reduce()，而不是 .reduceRight()，即是从左到右缩减，而不是从右到左。</p>\n<p>下面我们来看看用 pipe() 实现的 toSlug() 函数:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> toSlug <span class="token operator">=</span> <span class="token function">pipe</span><span class="token punctuation">(</span>\n\n  <span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\' \'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\n  <span class="token function">map</span><span class="token punctuation">(</span>toLowerCase<span class="token punctuation">)</span><span class="token punctuation">,</span>\n\n  <span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'-\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\n  encodeURIComponent\n\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">toSlug</span><span class="token punctuation">(</span><span class="token string">\'JS Cheerleader\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// \'js-cheerleader\'</span>\n</code></pre>\n      </div>\n<p>对我来说，对于我来说，这要更容易读懂一些。</p>\n<p>骨灰级的函数式程序员用函数组合定义他们的整个应用程序。而我经常用它来消除临时变量。仔细看看 pipe() 版本的 toSlug()，你会发现一些特殊之处。</p>\n<p>在命令式编程中，在一些变量上执行转换时，在转换的每个步骤中都会找到对变量的引用。而上面的 pipe() 实现是用不定参数（原文说是 points-free style）写的，就是说完全找不到它要操作的参数。</p>\n<p>我经常将管道（pipe）用在像单元测试和 Redux 状态 reducer 这类事情上，用来消除中间变量。中间变量的存在只用来保存一个操作到下一个操作之间的临时值。</p>\n<p>这玩意开始听起来会比较古怪，不过随着你用它练习，会发现在函数式编程中，你是在和相当抽象、广义的函数打交道，而在这样的函数中，事物的名称没那么重要。名称只会碍事。你会开始把变量当作是多余的样板。</p>\n<p>就是说，我认为 points-free style 可能会被用过头。它可能会变得太密集，较难理解。但是如果你搞糊涂了，这里有一个小窍门…你可以利用 flow 来跟踪是怎么回事：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> trace <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token punctuation">(</span>label<span class="token punctuation">,</span> x<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`== </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> label <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> x <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> x<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>下面是具体的使用方法：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> toSlug <span class="token operator">=</span> <span class="token function">pipe</span><span class="token punctuation">(</span>\n  <span class="token function">trace</span><span class="token punctuation">(</span><span class="token string">\'input\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token function">split</span><span class="token punctuation">(</span><span class="token string">\' \'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token function">map</span><span class="token punctuation">(</span>toLowerCase<span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token function">trace</span><span class="token punctuation">(</span><span class="token string">\'after map\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  <span class="token function">join</span><span class="token punctuation">(</span><span class="token string">\'-\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n  encodeURIComponent\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token function">toSlug</span><span class="token punctuation">(</span><span class="token string">\'JS Cheerleader\'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// \'== input:  JS Cheerleader\'</span>\n<span class="token comment" spellcheck="true">// \'== after map:  js,cheerleader\'</span>\n<span class="token comment" spellcheck="true">// \'js-cheerleader\'</span>\n</code></pre>\n      </div>\n<p>其实，trace()是 tap()的特殊形式。它可以让你对流过管道的每个值执行一些行为。明白了么？　管道（Pipe）？　水龙头(Tap)？　可以像下面这样编写 tap()：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> tap <span class="token operator">=</span> <span class="token function">curry</span><span class="token punctuation">(</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> x<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n\n  <span class="token function">fn</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> x<span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>现在你可以看到为嘛 trace() 只是一个特殊情况下的 tap() 了：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> trace <span class="token operator">=</span> label <span class="token operator">=></span> <span class="token punctuation">{</span>\n\n  <span class="token keyword">return</span> <span class="token function">tap</span><span class="token punctuation">(</span>x <span class="token operator">=></span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token string">`== </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> label <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span> x <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>你应该开始对函数式编程是什么样子，以及偏函数应用和柯里化如何与函数组合协作，来帮助你编写可读性更强的程序有点感觉了。</p>\n<p>参考链接:</p>\n<ul>\n<li><a href="http://www.10tiao.com/html/59/201702/2651551705/2.html">征服 JavaScript 面试：什么是函数组合</a></li>\n</ul>',frontmatter:{layout:"post",title:"掌握JavaScript面试：什么是函数组合？",path:"/掌握JavaScript面试：什么是功能组合？/",categories:["JavaScript"],date:"2017/10/05"}}},pathContext:{path:"/掌握JavaScript面试：什么是功能组合？/"}}}});
//# sourceMappingURL=path---掌握-java-script面试：什么是功能组合？-188a7507f412ae266815.js.map