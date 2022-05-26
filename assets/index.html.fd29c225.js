import{_ as e,r as t,o,e as l,f as n,c as i,F as p,a,g as c}from"./app.a39ec552.js";const r={},u=n("h1",{id:"apply-localization",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#apply-localization","aria-hidden":"true"},"#"),a(" Apply localization")],-1),d=a("In this last part of "),m={href:"https://github.com/preciofishbone/OmniaFx/tree/main/docs/tutorials/first-extension#build-your-first-extension-like-a-boss",target:"_blank",rel:"noopener noreferrer"},b=a("Build your first extension"),k=a(" tutorial, you will learn how to apply localization into the extension."),h=c(`<h2 id="create-localization-files" tabindex="-1"><a class="header-anchor" href="#create-localization-files" aria-hidden="true">#</a> Create localization files</h2><p>Create a new folder called <code>loc</code> under <code>..\\client\\</code>.</p><p>Inside the newly created folder, run the following cmd:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>omnia dev new localization --name HelloOmniaFxLocalization
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><code>localize.ts</code> - Define the localization namespace and structure (interface).</li><li><code>localize.manifest.ts</code> - Define the default value in English.</li><li><code>localize.sv-se.manifest.ts</code> - Define the translation value in Swedish.</li></ul><blockquote><p>Tip: You can notice that the generated <code>localize.sv-se.manifest.ts</code> does not constraint on interface so when any Swedish label is missing it will just fallback to English without causing build error.</p></blockquote><blockquote><p>Tip: It is possible to export a whole localization as .json file in Omnia Admin for doing translation work, then manually add all the translated json back into the correct manifest files.</p></blockquote><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><ul><li><p>E.g. in Component:</p><div class="language-tsx ext-tsx line-numbers-mode"><pre class="language-tsx"><code>
<span class="token comment">//Retrieve your localization instance</span>
@<span class="token function">Localize</span><span class="token punctuation">(</span>HelloOmniaFxLocalization<span class="token punctuation">.</span>namespace<span class="token punctuation">)</span> <span class="token keyword">private</span> loc<span class="token operator">:</span> HelloOmniaFxLocalization<span class="token punctuation">.</span>locInterface<span class="token punctuation">;</span>

<span class="token comment">//Omnia has provided common localization so try to reuse it as much as possible.</span>
@<span class="token function">Localize</span><span class="token punctuation">(</span>OmniaUxLocalizationNamespace<span class="token punctuation">)</span> <span class="token keyword">private</span> omniaLoc<span class="token operator">:</span> OmniaUxLocalization<span class="token punctuation">;</span>

<span class="token comment">//Inject this localization service if you want to transform localization key</span>
@<span class="token function">Inject</span><span class="token punctuation">(</span>LocalizationService<span class="token punctuation">)</span> <span class="token keyword">private</span> localizationService<span class="token operator">:</span> LocalizationService<span class="token punctuation">;</span>


<span class="token function">render</span><span class="token punctuation">(</span>h<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//two way to get the value:</span>

    <span class="token comment">//1. get from localization instance</span>
    <span class="token keyword">let</span> label1 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>loc<span class="token punctuation">.</span>Labels<span class="token punctuation">.</span>Label1<span class="token punctuation">;</span>
    <span class="token comment">//2. get from localization service</span>
    <span class="token keyword">let</span> label2 <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>localizationService<span class="token punctuation">.</span><span class="token function">transform</span><span class="token punctuation">(</span><span class="token string">&quot;$Localize:HelloOmniaFxLocalization.Labels.Label2;&quot;</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span><span class="token punctuation">(</span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">{</span>label1<span class="token punctuation">}</span><span class="token plain-text"> - </span><span class="token punctuation">{</span>label2<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div></li><li><p>E.g. in Feature definition:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token punctuation">.</span><span class="token function">registerFeature</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token operator">...</span>

    title<span class="token operator">:</span> <span class="token string">&quot;$Localize:HelloOmniaFxLocalization.Features.Feature1;&quot;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>E.g. in Admin Journey left nav:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token punctuation">.</span><span class="token function">registerNavigationNode</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
        <span class="token operator">...</span>
        title<span class="token operator">:</span> <span class="token string">&#39;$Localize:HelloOmniaFxLocalization.Features.Feature1;&#39;</span> 
    
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>E.g. in Server-side code:</p><div class="language-csharp ext-cs line-numbers-mode"><pre class="language-csharp"><code>    <span class="token comment">//Inject the service</span>
    <span class="token class-name">Omnia<span class="token punctuation">.</span>Fx<span class="token punctuation">.</span>Localization<span class="token punctuation">.</span>ILocalizationProvider</span> localizationProvider<span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> localizedValue <span class="token operator">=</span> <span class="token keyword">await</span> localizationProvider<span class="token punctuation">.</span><span class="token function">GetLocalizedValueAsync</span><span class="token punctuation">(</span><span class="token string">&quot;&#39;$Localize:HelloOmniaFxLocalization.Features.Feature1;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h2 id="issue" tabindex="-1"><a class="header-anchor" href="#issue" aria-hidden="true">#</a> Issue</h2><ul><li><p>When you see strange issues with localization, you should first check whether your localization value is correct or not in the global variable <code>omnia.localization</code> by browser console.</p></li><li><p>When your localization seems only work with local serve and does not work after deploying. It could be some caching issues so you could try to <strong>empty browser cache</strong>, or even try to <strong>re-deploy</strong> the extension.</p></li><li><p>Be careful that you might be using a duplicate namespace of other existing localization. The namespace should be unique.</p></li><li><p>Also, be careful with the translated localization files that don&#39;t constraint on interface so they could have conflict json structure that unexpectedly overrides the final localization.</p></li></ul>`,11);function g(f,v){const s=t("ExternalLinkIcon");return o(),l(p,null,[u,n("p",null,[d,n("a",m,[b,i(s)]),k]),h],64)}var y=e(r,[["render",g],["__file","index.html.vue"]]);export{y as default};