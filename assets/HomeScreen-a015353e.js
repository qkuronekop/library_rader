var p=Object.defineProperty;var m=(a,r,e)=>r in a?p(a,r,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[r]=e;var d=(a,r,e)=>(m(a,typeof r!="symbol"?r+"":r,e),e);import{a as h,c as f}from"./Library-3fb43614.js";import{d as _,r as n,_ as b,c as y,a as o,t as s,o as u}from"./index-bbcc5f0a.js";let i=["北海道","青森県","岩手県","宮城県","秋田県","山形県","福島県","茨城県","栃木県","群馬県","埼玉県","千葉県","東京都","神奈川県","新潟県","富山県","石川県","福井県","山梨県","長野県","岐阜県","静岡県","愛知県","三重県","滋賀県","京都府","大阪府","兵庫県","奈良県","和歌山県","鳥取県","島根県","岡山県","広島県","山口県","徳島県","香川県","愛媛県","高知県","福岡県","佐賀県","長崎県","熊本県","大分県","宮崎県","鹿児島県","沖縄県"];const L={}.APP_KEY;class g{constructor(){d(this,"URL","https://api.calil.jp/library?appkey={appKey}&pref={pref}&format=json&callback=")}async getRandomLibrary(){const r=Math.floor(Math.random()*47),e=await h.get(this.URL.replace("{pref}",i[r]).replace("{appKey}",L)),t=Math.floor(Math.random()*e.data.length+1);return e.data[t]}}const k=new g,w=_({name:"HomeScreen",async setup(a){const r=await k.getRandomLibrary();let e=n("");console.log(r),console.log(i);const t=n(i),l=n("東京都"),c=n();return{randomLibrary:r,input:e,prefs:t,pref:l,searchedLiblaries:c,calilUrl:f}}}),R="/library_rader/assets/webpage-4a30920a.png",S={class:"mt-8"},v=o("h2",{class:"text-xl font-bold text-h2"},"一期一会",-1),E={class:"m-4 p-4 bg-slate-100 rounded-md drop-shadow-md"},K={class:"float-right"},M=["href"],U=o("img",{class:"w-6 h-6",src:R},null,-1),$=[U],B={class:"text-left font-bold"},P=["href"],j={class:"text-left"},x={class:"text-left"},A={class:"text-right"};function F(a,r,e,t,l,c){return u(),y("div",S,[v,o("div",E,[o("p",K,[o("a",{href:a.randomLibrary.url_pc,target:"_blank"},$,8,M)]),o("p",null,s(a.randomLibrary.pref)+"("+s(a.randomLibrary.city)+")",1),o("p",B,[o("a",{href:a.calilUrl(a.randomLibrary.libid,a.randomLibrary.formal),target:"_blnk"},s(a.randomLibrary.short),9,P)]),o("p",j,"〒"+s(a.randomLibrary.post),1),o("p",x,s(a.randomLibrary.address),1),o("p",A,"Tel: "+s(a.randomLibrary.tel),1)])])}const I=b(w,[["render",F]]);export{I as default};
