import{_ as n,g as s}from"./app.a39ec552.js";const a={},p=s(`<h1 id="store" tabindex="-1"><a class="header-anchor" href="#store" aria-hidden="true">#</a> Store</h1><h2 id="removed-require-id-value-in-constructor" tabindex="-1"><a class="header-anchor" href="#removed-require-id-value-in-constructor" aria-hidden="true">#</a> Removed require id value in constructor.</h2><p>Before</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Store <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@omnia/fx/stores&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> InstanceLifetimes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@omnia/fx-models&#39;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Injectable</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token function-variable function">onStartup</span><span class="token operator">:</span> <span class="token punctuation">(</span>storeType<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> 
    Store<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>storeType<span class="token punctuation">,</span> InstanceLifetimes<span class="token punctuation">.</span>Singelton<span class="token punctuation">)</span> 
<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">YourStore</span> <span class="token keyword">extends</span> <span class="token class-name">Store</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">(</span><span class="token punctuation">{</span> id<span class="token operator">:</span> <span class="token string">&quot;7521b4f2-7620-4bc7-8fc5-9438ace3e5bc&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// removed id value here.</span>
    <span class="token punctuation">}</span>  
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>After changed</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> Store <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@omnia/fx/stores&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> InstanceLifetimes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@omnia/fx-models&#39;</span><span class="token punctuation">;</span>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Injectable</span></span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token function-variable function">onStartup</span><span class="token operator">:</span> <span class="token punctuation">(</span>storeType<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> 
    Store<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span>storeType<span class="token punctuation">,</span> InstanceLifetimes<span class="token punctuation">.</span>Singelton<span class="token punctuation">)</span> 
<span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">YourStore</span> <span class="token keyword">extends</span> <span class="token class-name">Store</span> <span class="token punctuation">{</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,6);function t(e,o){return p}var r=n(a,[["render",t],["__file","store.html.vue"]]);export{r as default};