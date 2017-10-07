webpackJsonp([28424695956452],{"./node_modules/json-loader/index.js!./.cache/json/初识动态规划.json":function(n,a){n.exports={data:{site:{meta:{title:"四条眉毛的博客",description:"I'm Lin Jin , a web developer and a travel enthusiasts. My target is to write clean and efficient code, to solve poblems on the web and to learn something more. ",url:"",author:"Lin Jin",twitter:"四条眉毛"}},post:{id:"/Users/fourfish/Desktop/gatsby-starter-bootstrap/src/pages/articles/初识动态规划/初识动态规划.md absPath of file >>> MarkdownRemark",html:'<h1>动态规划的基本思想</h1>\n<p>动态规划背后的基本思想非常简单。大致上，若要解一个给定问题，我们需要解其不同部分（即子问题），再合并子问题的解以得出原问题的解（这部分与分治法相似）。与分治法不同的是，适合于用动态规划求解的问题，经分解得到的子问题往往不是互相独立的。若用分治法来解这类问题，则分解得到的子问题数目太多，有些子问题被重复计算了很多次。</p>\n<p>通常许多子问题非常相似，为此动态规划法试图仅仅解决每个子问题一次，从而减少计算量：一旦某个给定子问题的解已经算出，则将其记忆化存储，以便下次需要同一个子问题解之时直接查表。这种做法在重复子问题的数目关于输入的规模呈指数增长时特别有用。在实际情况中，可以用一个表记录所有已解的子问题的答案。</p>\n<!-- more -->\n<h1>动态规划的适用情况</h1>\n<ol>\n<li>\n<p>最优子结构性质。如果问题的最优解所包含的子问题的解也是最优的，我们就称该问题具有最优子结构性质（即满足最优化原理）。最优子结构性质为动态规划算法解决问题提供了重要线索。</p>\n</li>\n<li>\n<p>无后效性。即子问题的解一旦确定，就不再改变，不受在这之后、包含它的更大的问题的求解决策影响。</p>\n</li>\n<li>\n<p>子问题重叠性质。子问题重叠性质是指在用递归算法自顶向下对问题进行求解时，每次产生的子问题并不总是新问题，有些子问题会被重复计算多次。动态规划算法正是利用了这种子问题的重叠性质，对每一个子问题只计算一次，然后将其计算结果保存在一个表格中，当再次需要计算已经计算过的子问题时，只是在表格中简单地查看一下结果，从而获得较高的效率。</p>\n</li>\n</ol>\n<p>问题具有最优子结构性质，我们才能写出最优解的递归方程；具有重叠子问题特性，我们才能通过避免重复计算来减少运行时间。</p>\n<p>综上所述，动态规划的关键是 —— <strong>记忆</strong>，空间换时间，不重复求解，从较小问题解逐步决策，构造较大问题的解。</p>\n<h1>实例</h1>\n<h2>斐波那契数列</h2>\n<p>只用递归来实现：</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> fibonacci <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">return</span> n <span class="token operator">&lt;</span> <span class="token number">2</span> <span class="token operator">?</span> n <span class="token punctuation">:</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fibonacci</span><span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>这种实现不会记录先前操作的结果，每次求值都会进行无谓的重复运算。通过给它添加记忆，来优化它的时间复杂度:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> fibonacci <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token keyword">var</span> memo <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\t<span class="token keyword">var</span> fib <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t<span class="token keyword">var</span> res <span class="token operator">=</span> memor<span class="token punctuation">[</span>n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\t\t<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> res <span class="token operator">!==</span> <span class="token string">\'number\'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t\t\tres <span class="token operator">=</span> <span class="token function">fib</span><span class="token punctuation">(</span>n<span class="token number">-1</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token function">fib</span><span class="token punctuation">(</span>n<span class="token number">-2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\t\t\tmemo<span class="token punctuation">[</span>n<span class="token punctuation">]</span> <span class="token operator">=</span> res<span class="token punctuation">;</span>\n\t\t<span class="token punctuation">}</span>\n\t\t<span class="token keyword">return</span> res<span class="token punctuation">;</span>\n\t<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\t<span class="token keyword">return</span> fib<span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>通过创建一个名为 memo 的数组，来保存子问题的结果。memo 保存在闭包中。当函数调用时，就会首先检查 memo 数组，如果已经存在，就直接返回结果。</p>\n<p>总之，这个例子很好的说明了动态规划的关键，即用空间换时间。</p>\n<h2>01背包</h2>\n<p>01 背包是动态规划中比较简单的一个问题。理解它，能清楚动态规划两个重要概念：状态和状态转移方程。</p>\n<p>假设编号分别为 a,b,c,d,e 的五件物品，重量分别是 2,2,6,5,4，价值分别是 6,3,5,4,6，现在有一个承重为 10 的背包，如何装入物品具有最大价值？</p>\n<h3>思路分析</h3>\n<p>首先我们来找状态。动态规划的一个重要思路就是把大问题分解成小问题。小问题除了规模更小，本质上还是相同的问题。我们可以从承重为 0 的背包开始，再逐渐增加到承重为 10 的背包。具体情况，结合下图讲解：</p>\n<html><head></head><body>\n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; margin-bottom: 1.0725rem;; max-width: 750px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 16.625%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAAAsSAAALEgHS3X78AAAAoklEQVQI14WMOwrCQBRF30ZmY6JV2lhauQctLQwoWvsr1CgksbSIlR9EQZdghnmDoMlc4xRT2FgcOFwuh4bNHTr+ClEk0E8ExECgsmlgemLMzk+Ed2PdcWQsbwXGB4VJ6aO9tMyvL6wvDOr6Kdq1EFFMCBIC9Qje1oPW2mKMcc6KLd9NKeXIHhlMUdgPBfUUreoC8b8gaxfAT1BKiTx/g8vPB5qZyW3oY1k+AAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="01&#x80CC;&#x5305;" title="" src="/static/531ac3d0c97e51a6ccee33bf7261b91d-df60d.jpg" srcset="/static/531ac3d0c97e51a6ccee33bf7261b91d-45144.jpg 188w,\n/static/531ac3d0c97e51a6ccee33bf7261b91d-2f941.jpg 375w,\n/static/531ac3d0c97e51a6ccee33bf7261b91d-df60d.jpg 750w,\n/static/531ac3d0c97e51a6ccee33bf7261b91d-182df.jpg 800w" sizes="(max-width: 750px) 100vw, 750px">\n    </span>\n  </span>\n  \n<figcaption>01&#x80CC;&#x5305;</figcaption></body></html>\n<p>当背包的承重为 2，行数为 2 时（从下到上递增），求的是前两个物品 d,e 装入背包里能达到的最大值。当背包的体积为 8，行数为 5 时，求的是前 5 个物品装入背包能达到的最大值。有没有发现，以上句子都是一个句式。形式化的表示它们，定义 d(i,j)为前 i 个物品装到剩余体积为 j 的背包里能达到的最大值。那么上面两句即为：d(2,2)和 d(5,8)。这样看是不是简洁多了。这两个符号就是我们要找的状态，即<strong>状态 d(i,j)为前 i 个物品装到剩余体积为 j 的背包里能达到的最大值。</strong></p>\n<p>上面那么多的文字，用一句话概括就是：根据子问题定义状态！　你找到子问题， 状态也就浮出水面了。而我们最终要求解的最大价值即为 d(n, C)：前 n 个物品（0,1,2…,n-1）装入剩余容量为 C 的背包中的最大价值。状态好不容易找到了， 状态转移方程呢？　顾名思义，状态转移方程就是描述状态是怎么转移的方程（好废话！）。</p>\n<p>要明白状态转移方程，你要明白上面的表格是这么填的。随便挑一个表格(a，9)，此时背包容量为 9，可以选 abcde 五种物品，我们要找出容量的最大值，对待每个物品的具体策略是放入物品 a 和不放入物品 a 这两种情况：</p>\n<ul>\n<li>情况 a: 假如放入物品 a, 则背包容量变为 9-2=7，还剩 b,c,d,e 四种物品。所以该情况下的最大值 = (b,7) + 物品 a 的价值 6，即 9+6。</li>\n<li>情况 b: 假如不放入物品 a, 背包容量不变为 9，还剩 b,c,d,e 四种物品。所以该情况下的最大值 = (b, 9)，即 10。</li>\n</ul>\n<p>所以现在(a, 9) = max( (b,7)+6, b(9) ) = max(9+6，10) = 15。max( (b,7)+6, b(9) )就是状态转移方程的具体体现。</p>\n<h4>代码实现</h4>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">packageMaxValue</span><span class="token punctuation">(</span>weight<span class="token punctuation">,</span> value<span class="token punctuation">,</span> size<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n\t<span class="token comment" spellcheck="true">// 省略参数合法性校验</span>\n    <span class="token keyword">let</span> bagMatrix <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n    <span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> w <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> w <span class="token operator">&lt;=</span> size<span class="token punctuation">;</span> w<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token comment" spellcheck="true">//size是背包的大小</span>\n        <span class="token comment" spellcheck="true">// js不能直接创建二维数组，所以在此初始化数组</span>\n        bagMatrix<span class="token punctuation">[</span>w<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>\n        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n            <span class="token comment" spellcheck="true">// 背包的容量为0，那么一个东西也装不下，此时的值肯定也是为0</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>w <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                bagMatrix<span class="token punctuation">[</span>w<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">0</span>\n                <span class="token keyword">continue</span>\n            <span class="token punctuation">}</span>\n            <span class="token comment" spellcheck="true">// 背包的容量小于物品j的重量，那么就没有上述情况a了</span>\n            <span class="token keyword">if</span><span class="token punctuation">(</span>w <span class="token operator">&lt;</span> weight<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>\n                bagMatrix<span class="token punctuation">[</span>w<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> bagMatrix<span class="token punctuation">[</span>w<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token number">-1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span>\n                <span class="token keyword">continue</span>\n            <span class="token punctuation">}</span>\n            bagMatrix<span class="token punctuation">[</span>w<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">(</span>bagMatrix<span class="token punctuation">[</span>w<span class="token operator">-</span>weight<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token number">-1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">+</span> value<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span> bagMatrix<span class="token punctuation">[</span>w<span class="token punctuation">]</span><span class="token punctuation">[</span>j<span class="token number">-1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token number">0</span><span class="token punctuation">)</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n    <span class="token keyword">return</span> bagMatrix\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>参考链接：</p>\n<ul>\n<li><a href="http://www.hawstein.com/posts/dp-knapsack.html">动态规划之背包问题（一）\n</a></li>\n<li><a href="https://segmentfault.com/a/1190000006082676">js实现01背包问题</a></li>\n</ul>',frontmatter:{layout:"post",title:"初识动态规划",path:"/初识动态规划/",categories:["算法与数据结构"],date:"2017/09/16"}}},pathContext:{path:"/初识动态规划/"}}}});
//# sourceMappingURL=path---初识动态规划-292aca57b36b2f4d6e8b.js.map