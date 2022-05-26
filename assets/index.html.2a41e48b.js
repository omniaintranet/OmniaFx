import{_ as n,g as e}from"./app.a39ec552.js";const s={},a=e(`<h1 id="create-a-new-action" tabindex="-1"><a class="header-anchor" href="#create-a-new-action" aria-hidden="true">#</a> Create a new Action</h1><p>Action can be added in Action Container (e.g. Workspace Action Menu or Action Button block).</p><p>Create a new folder called <code>testaction</code> under <code>..\\client\\</code></p><p>Inside the newly created folder, run the following cmd:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>omnia dev new action --name TestAction --tokens element=test-action
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Then you can follow some instruction with in the created files.</p><h1 id="advance-action-with-custom-renderer" tabindex="-1"><a class="header-anchor" href="#advance-action-with-custom-renderer" aria-hidden="true">#</a> Advance Action with custom renderer</h1><blockquote><p>In normal scenarios, we would just let the Action Container take care of rendering our action. E.g. Action Button block will render buttons. So that we are done.</p></blockquote><p>If we need to take over the redering for some special logic. For example,</p><ul><li><p>Handle icon badge</p><p><img src="https://user-images.githubusercontent.com/17378364/141458711-11e897fc-7671-45b2-8c71-d34ee6355052.png" alt="image"></p><p><img src="https://user-images.githubusercontent.com/17378364/141459479-6297b036-c1ba-4783-873b-8604f23917bf.png" alt="image"></p></li><li><p>Display a menu instead of a normal button</p><p><img src="https://user-images.githubusercontent.com/17378364/141464265-f54b05d1-0cb7-424f-869a-183f9d165540.png" alt="image"></p></li><li><p>Or any needs that Omnia Action has not supported yet</p></li></ul><p>Then we can enable custom renderer for our Action</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>
<span class="token comment">//In the action handler .ts file</span>

 <span class="token function">onActivated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>    
    <span class="token comment">//So that the Action Container will render this web element instead.</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>customRendererElementName <span class="token operator">=</span> <span class="token string">&quot;put-any-web-component-element-here&quot;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>The custom renderer web component must implements interface <code>IActionHandlerCustomRendererComponent</code>, For example</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>

<span class="token decorator"><span class="token at operator">@</span><span class="token function">Component</span></span>
<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">MyActionCustomRendererComponent</span> <span class="token keyword">extends</span> <span class="token class-name">VueComponentBase</span> <span class="token keyword">implements</span> <span class="token class-name">IActionHandlerCustomRendererComponent</span><span class="token punctuation">,</span> IWebComponentInstance <span class="token punctuation">{</span>
    <span class="token comment">//So that the interface ensure to have these 2 Props</span>

    <span class="token comment">//With this prop, can get action settings</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Prop</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> actionHandler<span class="token operator">:</span> ActionHandlerInstance<span class="token punctuation">;</span>

    <span class="token comment">//With this prop, the component know how to render. </span>
    <span class="token comment">//It needs to render differently based on its Action Container (e.g. Action Menu or Action Button). You can see the example of &#39;Handle icon badge&#39; above.</span>
    <span class="token comment">//BUT, it&#39;s not necessary to handle render for all modes. i.e. we might assume/accept this action should only be used with in Action Button then just go head to render as a button style and ignore the rest.</span>
    <span class="token decorator"><span class="token at operator">@</span><span class="token function">Prop</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> renderingMode<span class="token operator">:</span> ActionHandlerRenderingModes<span class="token punctuation">;</span> 

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,14);function t(o,p){return a}var r=n(s,[["render",t],["__file","index.html.vue"]]);export{r as default};