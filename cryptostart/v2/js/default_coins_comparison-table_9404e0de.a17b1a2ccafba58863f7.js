(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{162:function(t,s,e){var a=e(343);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e(127).default;t.exports.__inject__=function(t){r("0a0a1f68",a,t)}},186:function(t,s,e){var a=e(383);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e(127).default;t.exports.__inject__=function(t){r("2fb51816",a,t)}},230:function(t,s,e){"use strict";e(151),e(80);var a=e(297),r=e(293),i=e(226),o=e(146),n=e(147),l=e(172),c=e(174),d=e(141),p=e(138),u=e(148),m=e(143),_=e(377),g=e(296),h={components:{AssetsList:r.a,CommaSeparated:i.a,Disclaimer:o.a,FeaturesList:n.a,Flag:l.a,MonetaryValue:c.a,Name:d.a,PartnerCta:p.a,PartnerImage:u.a,RatingStars:m.a,ReadReview:_.a,ToggleLink:g.a},directives:{showSlide:a.a},props:{partners:{type:Array,default:function(){return[]}},reviews:{type:Array,default:function(){return[]}}},inject:["channel","countryData","currencyData","coinData","overrides"],data:function(){return{showKeyFeatures:[]}},created:function(){this.showKeyFeatures=this.partners.map(function(t){return!1})},methods:{getReviewPath:function(t){var s=this.reviews.find(function(s){return s.key===t.slug});return"".concat(s.value)},toggleKeyFeatures:function(t){this.$set(this.showKeyFeatures,t,!this.showKeyFeatures[t])}}};s.a=h},244:function(t,s,e){"use strict";e(145),e(139),e(80),e(299),e(386),e(132);var a,r,i,o,n,l,c=e(310),d=e(134),p=e.n(d),u=(e(133),e(135)),m=e(494),_=e(495),g=e(293),h=e(226),f=e(147),v=e(172),b=e(131),y=e(174),x=e(141),w=e(138),k=e(148),C=e(387),F=e(143),A=e(300),S=e(296),j=e(152),z={components:{CheckOrCross:_.a,AssetsList:g.a,CommaSeparated:h.a,FeaturesList:f.a,Flag:v.a,Icon:b.a,MonetaryValue:y.a,Name:x.a,PartnerCta:w.a,PartnerImage:k.a,ProsConsList:C.a,RatingStars:F.a,Regulations:A.a,ToggleLink:S.a,Tooltip:j.a},props:{partners:{type:Array,default:function(){return[]}},fields:{type:Array,default:function(){return[]}}},inject:["countryData","channel","overrides"],data:function(){return{showKeyFeatures:!1,showAllFeatures:!1,labels:[{grid:"header",key:"",fixed:!0,style:{display:null,height:null}},{grid:"country",key:"country",style:{display:null,height:null}},{grid:"min-deposit",key:"minDeposit",style:{display:null,height:null}},{grid:"regulations",key:"regulations",style:{display:null,height:null}},{grid:"show-more",key:"",style:{display:null,height:null}},{grid:"key-features",key:"keyFeatures",style:{display:null,height:null}},{grid:"key-stocks",key:"keyStocks",style:{display:null,height:null}},{grid:"top-coins",key:"topCoins",style:{display:null,height:null}},{grid:"payments",key:"paymentMethods",style:{display:null,height:null}},{grid:"show-all",key:"",style:{display:null,height:null}},{grid:"pros",key:"pros",style:{display:null,height:null}},{grid:"cons",key:"cons",style:{display:null,height:null}},{grid:"asset-types",key:"typesOfAssets",style:{display:null,height:null}},{grid:"number-of-assets",key:"numberOfAssets",style:{display:null,height:null}},{grid:"demo",key:"demoAccount",style:{display:null,height:null}},{grid:"platforms",key:"tradingPlatforms",style:{display:null,height:null}},{grid:"min-trade-amount",key:"minTradeAmount",style:{display:null,height:null}},{grid:"email-support",key:"emailSupport",style:{display:null,height:null}},{grid:"phone-support",key:"phoneSupport",style:{display:null,height:null}},{grid:"live-chat-support",key:"liveChatSupport",style:{display:null,height:null}},{grid:"trade-cta",key:"",noBorder:!0,style:{display:null,height:null}},{grid:"disclaimer",key:"",fixed:!0,noBorder:!0,style:{display:null,height:null}}],displayLabels:[]}},computed:{parsedReviews:function(){return this.parseString(this.reviews)}},watch:{fields:{handler:(l=Object(u.a)(p.a.mark(function t(){return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$nextTick();case 2:return t.next=4,this.getRowHeights();case 4:case"end":return t.stop()}},t,this)})),function(){return l.apply(this,arguments)})}},mounted:(n=Object(u.a)(p.a.mark(function t(){return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.fields.length&&(this.showKeyFeatures=!0,this.showAllFeatures=!0),window.addEventListener("resize",Object(m.a)(this.onResize.bind(this),400)),t.next=4,this.$nextTick();case 4:return t.next=6,this.getRowHeights();case 6:case"end":return t.stop()}},t,this)})),function(){return n.apply(this,arguments)}),methods:{onResize:(o=Object(u.a)(p.a.mark(function t(){return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getRowHeights();case 2:case"end":return t.stop()}},t,this)})),function(){return o.apply(this,arguments)}),getRowHeights:(i=Object(u.a)(p.a.mark(function t(){var s,e=this;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$nextTick();case 2:s=JSON.parse(JSON.stringify(this.labels)),this.fields.length&&(s=s.filter(function(t){return t.fixed||e.fields.includes(t.key)})),this.displayLabels=s.map(function(t,a){var r=e.$el.querySelector(".comparison__".concat(t.grid));if(e.fields.length){var i=Object(c.a)(e.$el.getElementsByClassName("comparison__".concat(t.grid))),o=Object(c.a)(e.$el.getElementsByClassName("comparison__section--last"));r=i[0],a===s.length-2&&(o.forEach(function(t){return t.classList.remove("comparison__section--last")}),i.forEach(function(t){return t.classList.add("comparison__section--last")}))}if(!r)return t.style.display="none",t;var n=getComputedStyle(r),l=r.getBoundingClientRect().height+parseInt(n.marginTop,10)+parseInt(n.marginBottom,10);return t.style.display=null,t.style.height="".concat(l,"px"),t});case 5:case"end":return t.stop()}},t,this)})),function(){return i.apply(this,arguments)}),toggleKeyFeatures:(r=Object(u.a)(p.a.mark(function t(){var s,e=arguments;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.length>0&&void 0!==e[0]?e[0]:!this.showKeyFeatures,this.showKeyFeatures=s,this.showKeyFeatures||this.toggleAllFeatures(!1),t.next=5,this.$nextTick();case 5:return t.next=7,this.getRowHeights();case 7:case"end":return t.stop()}},t,this)})),function(){return r.apply(this,arguments)}),toggleAllFeatures:(a=Object(u.a)(p.a.mark(function t(){var s,e=arguments;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return s=e.length>0&&void 0!==e[0]?e[0]:!this.showAllFeatures,this.showAllFeatures=s,t.next=4,this.$nextTick();case 4:return t.next=6,this.getRowHeights();case 6:case"end":return t.stop()}},t,this)})),function(){return a.apply(this,arguments)})}};s.a=z},292:function(t,s,e){"use strict";(function(t){var a=e(519),r=e(230),i=e(125),o=!1;t.hot;var n=Object(i.a)(r.a,a.a,a.b,!1,function(t){if(!o){var s=e(342);s.__inject__&&s.__inject__(t)}},"2663b952",null,!0);n.options.__file="src/tools/comparison-table/layouts/horizontal.vue",s.a=n.exports}).call(this,e(79)(t))},298:function(t,s,e){"use strict";(function(t){var a=e(520),r=e(244),i=e(125),o=!1;t.hot;var n=Object(i.a)(r.a,a.a,a.b,!1,function(t){if(!o){var s=e(382);s.__inject__&&s.__inject__(t)}},null,null,!0);n.options.__file="src/tools/comparison-table/layouts/vertical.vue",s.a=n.exports}).call(this,e(79)(t))},342:function(t,s,e){"use strict";e.r(s);var a=e(162),r=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(s,t,function(){return a[t]})}(i);s.default=r.a},343:function(t,s,e){(t.exports=e(126)(!1)).push([t.i,'.grid-name[data-v-2663b952]{-ms-grid-row:1;-ms-grid-column:1;grid-area:name}.grid-slot-1[data-v-2663b952]{-ms-grid-row:1;-ms-grid-column:2;grid-area:slot1}.grid-slot-2[data-v-2663b952]{-ms-grid-row:1;-ms-grid-column:3;grid-area:slot2}.grid-slot-3[data-v-2663b952]{grid-area:slot3}.grid-slot-4[data-v-2663b952]{-ms-grid-row:1;-ms-grid-column:4;grid-area:slot4}.grid-cta[data-v-2663b952]{-ms-grid-row:1;-ms-grid-column:5;grid-area:cta}.table[data-v-2663b952]{display:flex;flex-direction:column;width:100%;margin-top:15px}.card[data-v-2663b952]{margin-bottom:10px;transition:.3s cubic-bezier(.25,.8,.5,1);font-size:13px;background:var(--c-component-background);border:1px solid var(--c-borders);border-bottom:none;border-radius:4px;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.card__top[data-v-2663b952]{display:-ms-grid;display:grid;align-items:center;justify-content:space-between;-ms-grid-columns:100%;grid-template-columns:100%;-ms-grid-rows:auto 15px auto 15px auto 15px auto;grid-template-rows:repeat(4,auto);grid-template-areas:"name" "slot2" "slot1" "cta";grid-gap:15px 10px;padding:15px}.card--tablet .card__top[data-v-2663b952]{-ms-grid-columns:300px (1fr)[2];grid-template-columns:300px repeat(2,1fr);-ms-grid-rows:1fr;grid-template-rows:1fr;grid-template-areas:"name slot2 slot4 cta"}.card--desktop .card__top[data-v-2663b952]{-ms-grid-columns:370px 250px (1fr)[3];grid-template-columns:370px 250px repeat(3,1fr);-ms-grid-rows:1fr;grid-template-rows:1fr;grid-template-areas:"name slot1 slot2 slot4 cta"}.card__column[data-v-2663b952]{display:flex;flex-direction:column;justify-content:space-around}.card__cell[data-v-2663b952]{display:flex;flex-direction:row;justify-content:flex-start}.card--desktop .card__cell[data-v-2663b952],.card--tablet .card__cell[data-v-2663b952]{display:flex;flex-direction:column-reverse;justify-content:space-around}.card__label[data-v-2663b952]{font-weight:600;margin-right:10px}.card__label[data-v-2663b952]:after{content:":"}.card__column .card__label[data-v-2663b952]{margin-right:0;margin-bottom:10px}.card--desktop .card__label[data-v-2663b952],.card--tablet .card__label[data-v-2663b952]{margin-right:0;font-weight:400;text-align:center}.card--desktop .card__label[data-v-2663b952]:after,.card--tablet .card__label[data-v-2663b952]:after,.card__column .card__label[data-v-2663b952]:after{content:""}.card__partner[data-v-2663b952]{display:flex}.card__partner .card__column[data-v-2663b952]{margin-left:10px}.card__partner .card__logo[data-v-2663b952]{width:100px;height:50px;overflow:hidden;border-radius:3px}.card--tablet .card__logo[data-v-2663b952]{width:130px;height:65px}.card--desktop .card__logo[data-v-2663b952]{width:180px;height:90px}.grid[data-v-2663b952]{display:flex;flex-direction:column-reverse;flex-wrap:wrap;background:var(--c-light);border-top:1px solid var(--c-borders);box-shadow:inset 0 6px 5px -6px rgba(0,0,0,.2),inset 0 -6px 5px -6px rgba(0,0,0,.2)}.card--no-disclaimer .grid[data-v-2663b952]{box-shadow:inset 0 6px 5px -6px rgba(0,0,0,.2)}.card--tablet .grid[data-v-2663b952]{flex-direction:row}.card--desktop .grid[data-v-2663b952]{flex-direction:row-reverse}.grid__cell[data-v-2663b952]{display:flex;flex-direction:column;justify-content:flex-start;width:100%;padding:15px;border-bottom:1px solid var(--c-borders);box-sizing:border-box;line-height:20px}.card--tablet .grid__cell[data-v-2663b952]{border-right:1px solid var(--c-borders);width:40%}.card--tablet .grid__cell--wide[data-v-2663b952]{width:60%}.card--desktop .grid__cell[data-v-2663b952]{border-right:1px solid var(--c-borders);width:33.33333%}.card--desktop .grid__cell[data-v-2663b952]:first-child,.card--tablet .grid__cell[data-v-2663b952]:nth-child(2n){border-right:0}.card--no-disclaimer.card--desktop .grid__cell[data-v-2663b952]{border-bottom:none}.grid__title[data-v-2663b952]{margin-bottom:10px;font-weight:600}',""])},382:function(t,s,e){"use strict";e.r(s);var a=e(186),r=e.n(a);for(var i in a)"default"!==i&&function(t){e.d(s,t,function(){return a[t]})}(i);s.default=r.a},383:function(t,s,e){(t.exports=e(126)(!1)).push([t.i,".comparison{position:relative;font-size:13px;box-sizing:border-box;margin:15px 0;width:100%;border:1px solid var(--c-borders);border-radius:4px;background:var(--c-light);overflow:hidden;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.comparison__partners{--gutter:15px;padding:15px 0 35px 15px;margin-right:15px;grid-column:1/-1;display:-ms-grid;display:grid;grid-gap:0 calc(var(--gutter)/2);-ms-grid-columns:(calc(280px - var(--gutter)*2))[var(--rows)];grid-template-columns:repeat(var(--rows),calc(280px - var(--gutter)*2));-ms-grid-rows:[header] auto [country] auto [min-deposit] auto [regulations] auto [show-more] auto [key-features] auto [top-coins] auto [payments] auto [show-all] auto [pros] auto [cons] auto [asset-types] auto [number-of-assets] auto [demo] auto [platforms] auto [min-trade-amount] auto [email-support] auto [phone-support] auto [live-chat-support] auto [trade-cta] auto [disclaimer] auto;grid-template-rows:[header] auto [country] auto [min-deposit] auto [regulations] auto [show-more] auto [key-features] auto [top-coins] auto [payments] auto [show-all] auto [pros] auto [cons] auto [asset-types] auto [number-of-assets] auto [demo] auto [platforms] auto [min-trade-amount] auto [email-support] auto [phone-support] auto [live-chat-support] auto [trade-cta] auto [disclaimer] auto;overflow-x:scroll;-ms-scroll-snap-type:x proximity;scroll-snap-type:x proximity}.comparison--desktop .comparison__partners,.comparison--tablet .comparison__partners{--gutter:30px;padding-left:135px;font-size:inherit;-ms-grid-columns:(calc(320px - var(--gutter)*2))[var(--rows)];grid-template-columns:repeat(var(--rows),calc(320px - var(--gutter)*2))}.comparison__scroll-container{position:absolute;bottom:12px;right:0;left:0;color:var(--c-borders);font-size:10px}.comparison__scroll-indicator{display:flex;align-items:center;justify-content:center}.comparison__tooltip{visibility:hidden;position:absolute;top:-15px;padding:3px 5px;margin-left:5px;-webkit-transform:translateX(-50%);transform:translateX(-50%);transition:-webkit-transform .3s cubic-bezier(.25,.8,.5,1);transition:transform .3s cubic-bezier(.25,.8,.5,1);transition:transform .3s cubic-bezier(.25,.8,.5,1),-webkit-transform .3s cubic-bezier(.25,.8,.5,1);border-radius:3px;background:#212121;color:#fff;font-size:11px;text-align:center;white-space:nowrap}.comparison__touch{display:none}@media (hover:none) and (pointer:coarse){.comparison__touch{display:block}}.comparison__mouse:hover .comparison__tooltip{visibility:visible;-webkit-transform:translateX(-50%) translateY(-10px);transform:translateX(-50%) translateY(-10px)}@media (hover:none) and (pointer:coarse){.comparison__mouse{display:none}}.comparison--desktop .comparison__scroll-container,.comparison--tablet .comparison__scroll-container{left:120px}.comparison__labels{display:none}.comparison--desktop .comparison__labels,.comparison--tablet .comparison__labels{display:block;position:absolute;top:0;left:0;box-sizing:border-box;height:100%;width:120px;padding:15px 10px;background:var(--c-component-background);border-right:1px solid var(--c-borders);box-shadow:6px 0 5px -6px rgba(0,0,0,.2);overflow:hidden;font-size:inherit}.comparison__loading{color:var(--c-primary);font-size:48px;text-align:center}.comparison__label{display:flex;align-items:center;font-size:12px;font-weight:600;border-top:1px solid var(--c-borders)}.comparison__label:not(.comparison__label--fixed):last-child{border-bottom:1px solid var(--c-borders)}.comparison__label--fixed{border:none}.comparison__section{padding:15px;background-color:var(--c-component-background);border:1px solid var(--c-borders);border-bottom:none;text-align:center}.comparison--curated .comparison__section--first,.comparison:not(.comparison--curated) .comparison__section--start{border-top-right-radius:3px;border-top-left-radius:3px}.comparison--curated .comparison__section--last,.comparison:not(.comparison--curated) .comparison__section--end{border-bottom-right-radius:3px;border-bottom-left-radius:3px;border-bottom:1px solid var(--c-borders)}.comparison__header{-ms-grid-row:header;grid-row-start:header}.comparison__disclaimer{-ms-grid-row:disclaimer;grid-row-start:disclaimer;margin-top:5px;text-align:center;font-size:12px}.comparison__country{-ms-grid-row:country;grid-row-start:country}.comparison__min-deposit{-ms-grid-row:min-deposit;grid-row-start:min-deposit}.comparison__regulations{-ms-grid-row:regulations;grid-row-start:regulations}.comparison__show-more{margin-bottom:8px;-ms-grid-row:show-more;grid-row-start:show-more}.comparison__key-features{-ms-grid-row:key-features;grid-row-start:key-features}.comparison__top-coins{-ms-grid-row:top-coins;grid-row-start:top-coins}.comparison__payments{-ms-grid-row:payments;grid-row-start:payments}.comparison__show-all{-ms-grid-row:show-all;grid-row-start:show-all;margin-bottom:8px}.comparison__pros{-ms-grid-row:pros;grid-row-start:pros}.comparison__cons{-ms-grid-row:cons;grid-row-start:cons}.comparison__asset-types{-ms-grid-row:asset-types;grid-row-start:asset-types}.comparison__number-of-assets{-ms-grid-row:number-of-assets;grid-row-start:number-of-assets}.comparison__demo{-ms-grid-row:demo;grid-row-start:demo}.comparison__platforms{-ms-grid-row:platforms;grid-row-start:platforms}.comparison__min-trade-amount{-ms-grid-row:min-trade-amount;grid-row-start:min-trade-amount}.comparison__email-support{-ms-grid-row:email-support;grid-row-start:email-support}.comparison__phone-support{-ms-grid-row:phone-support;grid-row-start:phone-support}.comparison__live-chat-support{-ms-grid-row:live-chat-support;grid-row-start:live-chat-support}.comparison__trade-cta{margin-top:8px;margin-bottom:4px;-ms-grid-row:trade-cta;grid-row-start:trade-cta}.comparison__top{display:flex;flex-direction:column;align-items:center}.comparison--desktop .comparison__top,.comparison--tablet .comparison__top{align-items:flex-start;flex-direction:row;height:60px}.comparison__title{margin-top:10px;flex-grow:1;min-height:50px;display:flex;flex-direction:column;justify-content:space-around}.comparison--desktop .comparison__title,.comparison--tablet .comparison__title{margin-top:0;text-align:left;align-items:left}.comparison__logo{width:100%;height:90px;border-radius:3px;overflow:hidden}.comparison--desktop .comparison__logo,.comparison--tablet .comparison__logo{width:120px;min-width:120px;height:60px;margin-right:15px}.comparison__subtitle{text-align:center;color:var(--c-dark);font-size:12px;margin-bottom:15px}.comparison--desktop .comparison__subtitle,.comparison--tablet .comparison__subtitle{display:none}",""])},519:function(t,s,e){"use strict";e.d(s,"a",function(){return a}),e.d(s,"b",function(){return r});var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"table"},[t._l(t.partners,function(s,a){return[e("div",{key:s.slug,staticClass:"card",class:{"card--tablet":"tablet"===t.device,"card--desktop":"desktop"===t.device,"card--no-disclaimer":!(s.disclaimerUS||s.disclaimer)}},[e("div",{staticClass:"card__top"},[e("div",{staticClass:"card__partner grid-name"},[e("partner-image",{staticClass:"card__logo",attrs:{partner:s}}),e("div",{staticClass:"card__column"},[e("name",{attrs:{name:s.name}}),e("rating-stars",{attrs:{partner:s,position:a+1}})],1)],1),"tablet"!==t.device?e("div",{staticClass:"card__column grid-slot-1"},["mobile"===t.device?e("span",{staticClass:"card__label"},[t._v(t._s(t.i18n.keyFeatures))]):t._e(),e("features-list",{attrs:{features:s.keyFeatures,i18n:t.i18n}})],1):t._e(),e("div",{staticClass:"card__cell grid-slot-2"},[e("span",{staticClass:"card__label"},[t._v(t._s(t.i18n.minDeposit))]),e("monetary-value",{attrs:{value:s.minDeposit,large:"mobile"!==t.device}})],1),"mobile"!==t.device?e("flag",{staticClass:"grid-slot-4"}):t._e(),e("div",{staticClass:"card__column grid-cta"},[e("partner-cta",{attrs:{partner:s,position:"comparison-table-horizontal"}}),e("toggle-link",{attrs:{label:t.i18n.viewKeyFeatures},on:{change:function(s){return t.toggleKeyFeatures(a)}}})],1)],1),e("div",{directives:[{name:"show-slide",rawName:"v-show-slide:300:ease-in-out",value:t.showKeyFeatures[a],expression:"showKeyFeatures[index]",arg:"300:ease-in-out"}],staticClass:"grid"},["tablet"===t.device?e("div",{staticClass:"grid__cell grid__cell--wide"},[e("div",{staticClass:"grid__title"},[t._v(t._s(t.i18n.keyFeatures))]),e("features-list",{attrs:{partner:s,features:s.keyFeatures}})],1):t._e(),e("div",{staticClass:"grid__cell"},[t.channel().includes("crypto")?[e("div",{staticClass:"grid__title"},[t._v(t._s(t.i18n.topCoins))]),e("assets-list",{attrs:{partner:s,assets:s.coins||[],type:"coin"}})]:"stocks"===t.channel()||"cannabis"===t.channel()?[e("div",{staticClass:"grid__title"},[t._v(t._s(t.i18n.keyStocks))]),e("assets-list",{attrs:{partner:s,assets:s.entities||[],type:"stock"}})]:[e("div",{staticClass:"grid__title"},[t._v(t._s(t.i18n.tradingPlatforms))]),e("comma-separated",{attrs:{items:s.tradingPlatforms}})]],2),e("div",{staticClass:"grid__cell"},[e("div",{staticClass:"grid__title"},[t._v(t._s(t.i18n.paymentMethods))]),e("comma-separated",{attrs:{items:s.paymentMethods}})],1),e("div",{staticClass:"grid__cell grid__cell--wide"},[t._v("\n          "+t._s(s.description||t.i18n.na)+"\n        ")])]),t.reviews.length>0&&t.reviews.filter(function(t){return t.key===s.slug}).length>0?e("read-review",{attrs:{description:t.i18n.moreInfo,"link-text":t.i18n.readReview,"link-url":t.getReviewPath(s),bordered:!!s.disclaimer}}):t._e(),s.disclaimerUS||s.disclaimer?e("disclaimer",{attrs:{text:t.countryData.value&&"us"===t.countryData.value.toLowerCase()&&s.disclaimerUS||s.disclaimer,affix:""}}):t._e()],1)]})],2)},r=[];a._withStripped=!0},520:function(t,s,e){"use strict";e.d(s,"a",function(){return a}),e.d(s,"b",function(){return r});var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"comparison",class:{"comparison--tablet":"tablet"===t.device,"comparison--desktop":"desktop"===t.device,"comparison--curated":t.fields.length}},[e("div",{staticClass:"comparison__partners",style:{"--rows":t.partners.length}},[t._l(t.partners,function(s){return[e("div",{key:s.slug+"-header",staticClass:"comparison__section comparison__section--start comparison__section--first comparison__header"},[e("div",{staticClass:"comparison__top"},[e("partner-image",{staticClass:"comparison__logo",attrs:{partner:s}}),e("div",{staticClass:"comparison__title"},[e("name",{attrs:{name:s.name}}),e("rating-stars",{attrs:{partner:s}})],1)],1)]),!t.fields.length||t.fields.includes("country")?e("div",{key:s.slug+"-country",staticClass:"comparison__section comparison__country"},[e("div",{staticClass:"comparison__subtitle"},[t._v(t._s(t.i18n.country))]),e("flag",{attrs:{"country-data":t.countryData}})],1):t._e(),!t.fields.length||t.fields.includes("minDeposit")?e("div",{key:s.slug+"-minDeposit",staticClass:"comparison__section comparison__min-deposit"},[e("div",{staticClass:"comparison__subtitle"},[t._v(t._s(t.i18n.minDeposit))]),e("monetary-value",{attrs:{value:s.minDeposit,large:!0}})],1):t._e(),!t.fields.length||t.fields.includes("regulations")?e("div",{key:s.slug+"-regulations",staticClass:"comparison__section comparison__section--end comparison__regulations text-xs-center"},[e("div",{staticClass:"comparison__subtitle"},[t._v(t._s(t.i18n.regulations))]),e("regulations",{attrs:{value:s.regulations}})],1):t._e(),t.fields.length?t._e():e("toggle-link",{key:s.slug+"-show-more",staticClass:"comparison__show-more",attrs:{label:t.i18n.viewKeyFeatures},on:{change:t.toggleKeyFeatures}}),t.fields.length&&!t.fields.includes("keyFeatures")||!t.showKeyFeatures?t._e():e("div",{key:s.slug+"-key-features",staticClass:"comparison__section comparison__section--start comparison__key-features"},[e("div",{staticClass:"comparison__subtitle"},[t._v(t._s(t.i18n.keyFeatures))]),e("features-list",{attrs:{features:s.keyFeatures}})],1),(!t.fields.length||t.fields.includes("topCoins"))&&t.channel().includes("crypto")&&t.showKeyFeatures?e("div",{key:s.slug+"-top-coins",staticClass:"comparison__section comparison__top-coins"},[e("div",{staticClass:"comparison__subtitle"},[t._v(t._s(t.i18n.topCoins))]),e("assets-list",{attrs:{partner:s,assets:s.coins||[],type:"coin"}})],1):t._e(),t.fields.length&&!t.fields.includes("keyStocks")||"stocks"!==t.channel()&&"cannabis"!==t.channel()||!t.showKeyFeatures?t._e():e("div",{key:s.slug+"-key-stocks",staticClass:"comparison__section comparison__key-stocks"},[e("div",{staticClass:"comparison__subtitle"},[t._v(t._s(t.i18n.keyStocks))]),e("assets-list",{attrs:{partner:s,assets:s.entities||[],type:"stock"}})],1),t.fields.length&&!t.fields.includes("paymentMethods")||!t.showKeyFeatures?t._e():e("div",{key:s.slug+"-payments",staticClass:"comparison__section comparison__section--end comparison__payments"},[e("div",{staticClass:"comparison__subtitle"},[t._v(t._s(t.i18n.paymentMethods))]),e("comma-separated",{attrs:{items:s.paymentMethods}})],1),t.showKeyFeatures&&!t.fields.length?e("toggle-link",{key:s.slug+"-show-all",staticClass:"comparison__show-all",attrs:{label:t.i18n.showAllFeatures},on:{change:t.toggleAllFeatures}}):t._e(),t.fields.length&&!t.fields.includes("pros")||!t.showAllFeatures?t._e():e("div",{key:s.slug+"-pros",staticClass:"comparison__section comparison__section--start comparison__pros"},[e("div",{staticClass:"comparison__subtitle"},[t._v(t._s(t.i18n.pros))]),e("pros-cons-list",{attrs:{partner:s}})],1),t.fields.length&&!t.fields.includes("cons")||!t.showAllFeatures?t._e():e("div",{key:s.slug+"-cons",staticClass:"comparison__section comparison__cons"},[e("div",{staticClass:"comparison__subtitle"},[t._v(t._s(t.i18n.cons))]),e("pros-cons-list",{attrs:{type:"cons",partner:s}})],1),t.fields.length&&!t.fields.includes("typesOfAssets")||!t.showAllFeatures?t._e():e("div",{key:s.slug+"-asset-types",staticClass:"comparison__section comparison__asset-types"},[e("div",{staticClass:"comparison__subtitle"},[t._v(t._s(t.i18n.typesOfAssets))]),e("comma-separated",{attrs:{items:s.typesOfAssets}})],1),t.fields.length&&!t.fields.includes("numberOfAssets")||!t.showAllFeatures?t._e():e("div",{key:s.slug+"-num-assets",staticClass:"comparison__section comparison__number-of-assets"},[e("div",{staticClass:"comparison__subtitle"},[t._v(t._s(t.i18n.numberOfAssets))]),t._v("\n        "+t._s(s.numberOfAssets||t.i18n.na)+"\n      ")]),t.fields.length&&!t.fields.includes("demoAccount")||!t.showAllFeatures?t._e():e("div",{key:s.slug+"-demo",staticClass:"comparison__section comparison__demo"},[e("div",{staticClass:"comparison__subtitle"},[t._v(t._s(t.i18n.demoAccount))]),e("check-or-cross",{attrs:{positive:s.freeDemoAvailable}})],1),t.fields.length&&!t.fields.includes("tradingPlatforms")||!t.showAllFeatures?t._e():e("div",{key:s.slug+"-platforms",staticClass:"comparison__section comparison__platforms"},[e("div",{staticClass:"comparison__subtitle"},[t._v(t._s(t.i18n.tradingPlatforms))]),e("comma-separated",{attrs:{items:s.tradingPlatforms}})],1),t.fields.length&&!t.fields.includes("minTradeAmount")||!t.showAllFeatures?t._e():e("div",{key:s.slug+"-min-trade-amount",staticClass:"comparison__section comparison__min-trade-amount"},[e("div",{staticClass:"comparison__subtitle"},[t._v(t._s(t.i18n.minTradeAmount))]),e("monetary-value",{attrs:{value:s.minTradeAmount}})],1),t.fields.length&&!t.fields.includes("emailSupport")||!t.showAllFeatures?t._e():e("div",{key:s.slug+"-email-support",staticClass:"comparison__section comparison__email-support"},[e("div",{staticClass:"comparison__subtitle"},[t._v(t._s(t.i18n.emailSupport))]),e("check-or-cross",{attrs:{positive:s.emailSupport}})],1),t.fields.length&&!t.fields.includes("phoneSupport")||!t.showAllFeatures?t._e():e("div",{key:s.slug+"-phone-support",staticClass:"comparison__section comparison__phone-support"},[e("div",{staticClass:"comparison__subtitle"},[t._v(t._s(t.i18n.phoneSupport))]),e("check-or-cross",{attrs:{positive:s.phoneSupport}})],1),t.fields.length&&!t.fields.includes("liveChatSupport")||!t.showAllFeatures?t._e():e("div",{key:s.slug+"-live-chat-support",staticClass:"comparison__section comparison__section--end comparison__live-chat-support"},[e("div",{staticClass:"comparison__subtitle"},[t._v(t._s(t.i18n.liveChatSupport))]),e("check-or-cross",{attrs:{positive:s.liveChatSupport}})],1),e("partner-cta",{key:s.slug+"-cta-2",staticClass:"comparison__cta comparison__trade-cta",attrs:{partner:s,channel:t.channel,position:"comparison-table-vertical"}}),e("div",{key:s.slug+"-disclaimer",staticClass:"comparison__disclaimer"},[t._v("\n        "+t._s(s.disclaimer)+"\n      ")])]})],2),e("div",{staticClass:"comparison__labels"},t._l(t.displayLabels,function(s){return e("div",{key:s.grid,staticClass:"comparison__label",class:{"comparison__label--fixed":s.fixed||s.noBorder},style:s.style},[t._v("\n      "+t._s(t.i18n[s.key])+"\n    ")])}),0),e("div",{staticClass:"comparison__scroll-container"},[e("tooltip",{staticClass:"comparison__scroll-indicator",attrs:{content:"Scroll to see more",position:"above"}},[e("icon",{attrs:{size:14,value:"chevron_left"}}),e("icon",{staticClass:"comparison__touch",attrs:{value:"touch_app"}}),e("div",{staticClass:"comparison__mouse"},[e("icon",{attrs:{size:14,value:"mouse"}})],1),e("icon",{attrs:{size:14,value:"chevron_right"}})],1)],1)])},r=[];a._withStripped=!0}}]);