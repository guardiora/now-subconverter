(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-87bd93be"],{"04d1":function(e,t,o){var n=o("342f"),i=n.match(/firefox\/(\d+)/i);e.exports=!!i&&+i[1]},"0cb2":function(e,t,o){var n=o("e330"),i=o("7b0b"),r=Math.floor,l=n("".charAt),a=n("".replace),s=n("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,o,n,f,d){var m=o+e.length,p=n.length,b=u;return void 0!==f&&(f=i(f),b=c),a(d,b,(function(i,a){var c;switch(l(a,0)){case"$":return"$";case"&":return e;case"`":return s(t,0,o);case"'":return s(t,m);case"<":c=f[s(a,1,-1)];break;default:var u=+a;if(0===u)return i;if(u>p){var d=r(u/10);return 0===d?i:d<=p?void 0===n[d-1]?l(a,1):n[d-1]+l(a,1):i}c=n[u-1]}return void 0===c?"":c}))}},"14c3":function(e,t,o){var n=o("da84"),i=o("c65b"),r=o("825a"),l=o("1626"),a=o("c6b6"),s=o("9263"),c=n.TypeError;e.exports=function(e,t){var o=e.exec;if(l(o)){var n=i(o,e,t);return null!==n&&r(n),n}if("RegExp"===a(e))return i(s,e,t);throw c("RegExp#exec called on incompatible receiver")}},"25f0":function(e,t,o){"use strict";var n=o("e330"),i=o("5e77").PROPER,r=o("6eeb"),l=o("825a"),a=o("3a9b"),s=o("577e"),c=o("d039"),u=o("ad6d"),f="toString",d=RegExp.prototype,m=d[f],p=n(u),b=c((function(){return"/a/b"!=m.call({source:"a",flags:"b"})})),h=i&&m.name!=f;(b||h)&&r(RegExp.prototype,f,(function(){var e=l(this),t=s(e.source),o=e.flags,n=s(void 0===o&&a(d,e)&&!("flags"in d)?p(e):o);return"/"+t+"/"+n}),{unsafe:!0})},"4de4":function(e,t,o){"use strict";var n=o("23e7"),i=o("b727").filter,r=o("1dde"),l=r("filter");n({target:"Array",proto:!0,forced:!l},{filter:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}})},"4e82":function(e,t,o){"use strict";var n=o("23e7"),i=o("e330"),r=o("59ed"),l=o("7b0b"),a=o("07fa"),s=o("577e"),c=o("d039"),u=o("addb"),f=o("a640"),d=o("04d1"),m=o("d998"),p=o("2d00"),b=o("512c"),h=[],S=i(h.sort),g=i(h.push),v=c((function(){h.sort(void 0)})),C=c((function(){h.sort(null)})),_=f("sort"),x=!c((function(){if(p)return p<70;if(!(d&&d>3)){if(m)return!0;if(b)return b<603;var e,t,o,n,i="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:o=3;break;case 68:case 71:o=4;break;default:o=2}for(n=0;n<47;n++)h.push({k:t+n,v:o})}for(h.sort((function(e,t){return t.v-e.v})),n=0;n<h.length;n++)t=h[n].k.charAt(0),i.charAt(i.length-1)!==t&&(i+=t);return"DGBEFHACIJK"!==i}})),A=v||!C||!_||!x,R=function(e){return function(t,o){return void 0===o?-1:void 0===t?1:void 0!==e?+e(t,o)||0:s(t)>s(o)?1:-1}};n({target:"Array",proto:!0,forced:A},{sort:function(e){void 0!==e&&r(e);var t=l(this);if(x)return void 0===e?S(t):S(t,e);var o,n,i=[],s=a(t);for(n=0;n<s;n++)n in t&&g(i,t[n]);u(i,R(e)),o=i.length,n=0;while(n<o)t[n]=i[n++];while(n<s)delete t[n++];return t}})},"512c":function(e,t,o){var n=o("342f"),i=n.match(/AppleWebKit\/(\d+)\./);e.exports=!!i&&+i[1]},5319:function(e,t,o){"use strict";var n=o("2ba4"),i=o("c65b"),r=o("e330"),l=o("d784"),a=o("d039"),s=o("825a"),c=o("1626"),u=o("5926"),f=o("50c4"),d=o("577e"),m=o("1d80"),p=o("8aa5"),b=o("dc4a"),h=o("0cb2"),S=o("14c3"),g=o("b622"),v=g("replace"),C=Math.max,_=Math.min,x=r([].concat),A=r([].push),R=r("".indexOf),k=r("".slice),y=function(e){return void 0===e?e:String(e)},w=function(){return"$0"==="a".replace(/./,"$0")}(),L=function(){return!!/./[v]&&""===/./[v]("a","$0")}(),U=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));l("replace",(function(e,t,o){var r=L?"$":"$0";return[function(e,o){var n=m(this),r=void 0==e?void 0:b(e,v);return r?i(r,e,n,o):i(t,d(n),e,o)},function(e,i){var l=s(this),a=d(e);if("string"==typeof i&&-1===R(i,r)&&-1===R(i,"$<")){var m=o(t,l,a,i);if(m.done)return m.value}var b=c(i);b||(i=d(i));var g=l.global;if(g){var v=l.unicode;l.lastIndex=0}var w=[];while(1){var L=S(l,a);if(null===L)break;if(A(w,L),!g)break;var U=d(L[0]);""===U&&(l.lastIndex=p(a,f(l.lastIndex),v))}for(var $="",O=0,M=0;M<w.length;M++){L=w[M];for(var N=d(L[0]),F=C(_(u(L.index),a.length),0),T=[],j=1;j<L.length;j++)A(T,y(L[j]));var I=L.groups;if(b){var G=x([N],T,F,a);void 0!==I&&A(G,I);var B=d(n(i,void 0,G))}else B=h(N,a,F,T,I,i);F>=O&&($+=k(a,O,F)+B,O=F+N.length)}return $+k(a,O)}]}),!U||!w||L)},"8aa5":function(e,t,o){"use strict";var n=o("6547").charAt;e.exports=function(e,t,o){return t+(o?n(e,t).length:1)}},a640:function(e,t,o){"use strict";var n=o("d039");e.exports=function(e,t){var o=[][e];return!!o&&n((function(){o.call(null,t||function(){throw 1},1)}))}},a9c7:function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("el-row",{staticStyle:{"margin-top":"10px"}},[o("el-col",[o("el-card",[o("div",{attrs:{slot:"header"},slot:"header"},[e._v(" 订阅转换 "),o("svg-icon",{staticStyle:{"margin-left":"20px"},attrs:{"icon-class":"github"},on:{click:e.goToProject}}),o("svg-icon",{staticStyle:{"margin-left":"20px"},attrs:{"icon-class":"telegram"},on:{click:e.gotoTgChannel}}),o("div",{staticStyle:{display:"inline-block",position:"absolute",right:"20px"}},[e._v(e._s(e.backendVersion))])],1),o("el-container",[o("el-form",{staticStyle:{width:"100%"},attrs:{model:e.form,"label-width":"80px","label-position":"left"}},[o("el-form-item",{attrs:{label:"模式设置:"}},[o("el-radio",{attrs:{label:"1"},model:{value:e.advanced,callback:function(t){e.advanced=t},expression:"advanced"}},[e._v("基础模式")]),o("el-radio",{attrs:{label:"2"},model:{value:e.advanced,callback:function(t){e.advanced=t},expression:"advanced"}},[e._v("进阶模式")])],1),o("el-form-item",{attrs:{label:"订阅链接:"}},[o("el-input",{attrs:{type:"textarea",rows:"3",placeholder:"支持订阅或ss/ssr/vmess链接，多个链接每行一个或用 | 分隔"},on:{blur:e.saveSubUrl},model:{value:e.form.sourceSubUrl,callback:function(t){e.$set(e.form,"sourceSubUrl",t)},expression:"form.sourceSubUrl"}})],1),o("el-form-item",{attrs:{label:"生成类型:"}},[o("el-select",{staticStyle:{width:"100%"},model:{value:e.form.clientType,callback:function(t){e.$set(e.form,"clientType",t)},expression:"form.clientType"}},e._l(e.options.clientTypes,(function(e,t){return o("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),o("el-form-item",{attrs:{label:"远程配置:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:e.form.remoteConfig,callback:function(t){e.$set(e.form,"remoteConfig",t)},expression:"form.remoteConfig"}},e._l(e.options.remoteConfig,(function(t){return o("el-option-group",{key:t.label,attrs:{label:t.label}},e._l(t.options,(function(e){return o("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)})),1)],1),o("el-form-item",{attrs:{label:"后端地址:"}},[o("el-select",{staticStyle:{width:"100%"},attrs:{"allow-create":"",filterable:"",placeholder:"请选择"},model:{value:e.form.customBackend,callback:function(t){e.$set(e.form,"customBackend",t)},expression:"form.customBackend"}},e._l(e.options.customBackend,(function(e,t){return o("el-option",{key:t,attrs:{label:t,value:e}})})),1)],1),"2"===e.advanced?o("div",[o("el-form-item",{attrs:{label:"包含节点:"}},[o("el-input",{attrs:{placeholder:"节点名包含的关键字，支持正则"},model:{value:e.form.includeRemarks,callback:function(t){e.$set(e.form,"includeRemarks",t)},expression:"form.includeRemarks"}})],1),o("el-form-item",{attrs:{label:"排除节点:"}},[o("el-input",{attrs:{placeholder:"节点名不包含的关键字，支持正则"},model:{value:e.form.excludeRemarks,callback:function(t){e.$set(e.form,"excludeRemarks",t)},expression:"form.excludeRemarks"}})],1),o("el-form-item",{attrs:{label:"输出文件名:"}},[o("el-input",{attrs:{placeholder:"返回的订阅文件名"},model:{value:e.form.filename,callback:function(t){e.$set(e.form,"filename",t)},expression:"form.filename"}})],1),o("el-form-item",{attrs:{"label-width":"0px"}},[o("el-row",{attrs:{type:"flex"}},[o("el-col",[o("el-checkbox",{attrs:{label:"输出为 Node List",border:""},model:{value:e.form.nodeList,callback:function(t){e.$set(e.form,"nodeList",t)},expression:"form.nodeList"}})],1),o("el-popover",{attrs:{placement:"bottom"},model:{value:e.form.extraset,callback:function(t){e.$set(e.form,"extraset",t)},expression:"form.extraset"}},[o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"Emoji"},model:{value:e.form.emoji,callback:function(t){e.$set(e.form,"emoji",t)},expression:"form.emoji"}})],1),o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"Clash新字段名"},model:{value:e.form.new_name,callback:function(t){e.$set(e.form,"new_name",t)},expression:"form.new_name"}})],1)],1),o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"启用 UDP"},on:{change:function(t){e.needUdp=!0}},model:{value:e.form.udp,callback:function(t){e.$set(e.form,"udp",t)},expression:"form.udp"}})],1),o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"启用 TFO"},model:{value:e.form.tfo,callback:function(t){e.$set(e.form,"tfo",t)},expression:"form.tfo"}})],1)],1),o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"插入节点类型"},model:{value:e.form.appendType,callback:function(t){e.$set(e.form,"appendType",t)},expression:"form.appendType"}})],1),o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"排序节点"},model:{value:e.form.sort,callback:function(t){e.$set(e.form,"sort",t)},expression:"form.sort"}})],1)],1),o("el-row",{attrs:{gutter:10}},[o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"过滤不支持节点"},model:{value:e.form.fdn,callback:function(t){e.$set(e.form,"fdn",t)},expression:"form.fdn"}})],1),o("el-col",{attrs:{span:12}},[o("el-checkbox",{attrs:{label:"展开规则全文"},model:{value:e.form.expand,callback:function(t){e.$set(e.form,"expand",t)},expression:"form.expand"}})],1)],1),o("el-button",{attrs:{slot:"reference"},slot:"reference"},[e._v("更多选项")])],1)],1)],1)],1):e._e(),o("div",{staticStyle:{"margin-top":"50px"}}),o("el-divider",{attrs:{"content-position":"center"}},[o("i",{staticClass:"el-icon-magic-stick"})]),o("el-form-item",{attrs:{label:"定制订阅:"}},[o("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:e.customSubUrl,callback:function(t){e.customSubUrl=t},expression:"customSubUrl"}},[o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.customSubUrl,expression:"customSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[e._v("复制")])],1)],1),o("el-form-item",{attrs:{label:"订阅短链:"}},[o("el-input",{staticClass:"copy-content",attrs:{disabled:""},model:{value:e.curtomShortSubUrl,callback:function(t){e.curtomShortSubUrl=t},expression:"curtomShortSubUrl"}},[o("el-button",{directives:[{name:"clipboard",rawName:"v-clipboard:copy",value:e.curtomShortSubUrl,expression:"curtomShortSubUrl",arg:"copy"},{name:"clipboard",rawName:"v-clipboard:success",value:e.onCopy,expression:"onCopy",arg:"success"}],ref:"copy-btn",attrs:{slot:"append",icon:"el-icon-document-copy"},slot:"append"},[e._v("复制")])],1)],1),o("el-form-item",{staticStyle:{"margin-top":"40px","text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"danger",disabled:0===e.form.sourceSubUrl.length},on:{click:e.makeUrl}},[e._v("生成订阅链接")]),o("el-button",{staticStyle:{width:"120px"},attrs:{type:"danger",loading:e.loading,disabled:0===e.customSubUrl.length},on:{click:e.makeShortUrl}},[e._v("生成短链接")])],1),o("el-form-item",{staticStyle:{"text-align":"center"},attrs:{"label-width":"0px"}},[o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",icon:"el-icon-upload",loading:e.loading},on:{click:function(t){e.dialogUploadConfigVisible=!0}}},[e._v("上传配置")]),o("el-button",{staticStyle:{width:"120px"},attrs:{type:"primary",icon:"el-icon-connection",disabled:0===e.customSubUrl.length},on:{click:e.clashInstall}},[e._v("一键导入Clash")])],1)],1)],1)],1)],1)],1),o("el-dialog",{attrs:{visible:e.dialogUploadConfigVisible,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1,width:"700px"},on:{"update:visible":function(t){e.dialogUploadConfigVisible=t}}},[o("div",{attrs:{slot:"title"},slot:"title"},[e._v(" Remote config upload "),o("el-popover",{staticStyle:{"margin-left":"10px"},attrs:{trigger:"hover",placement:"right"}},[o("el-link",{attrs:{type:"primary",href:e.sampleConfig,target:"_blank",icon:"el-icon-info"}},[e._v("参考配置")]),o("i",{staticClass:"el-icon-question",attrs:{slot:"reference"},slot:"reference"})],1)],1),o("el-form",{attrs:{"label-position":"left"}},[o("el-form-item",{attrs:{prop:"uploadConfig"}},[o("el-input",{attrs:{type:"textarea",autosize:{minRows:15,maxRows:15},maxlength:"10000","show-word-limit":""},model:{value:e.uploadConfig,callback:function(t){e.uploadConfig=t},expression:"uploadConfig"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(t){e.uploadConfig="",e.dialogUploadConfigVisible=!1}}},[e._v("取 消")]),o("el-button",{attrs:{type:"primary",disabled:0===e.uploadConfig.length},on:{click:e.confirmUploadConfig}},[e._v("确 定")])],1)],1)],1)},i=[],r=(o("ac1f"),o("00b4"),o("5319"),o("b64b"),o("d3b7"),o("25f0"),o("4e82"),o("4de4"),o("e9c4"),"https://github.com/CareyWang/sub-web"),l="https://raw.githubusercontent.com/tindy2013/subconverter/master/base/config/example_external_config.ini",a="https://github.com/tindy2013/subconverter/releases",s="https://sub.chizzle.ml/sub?",c="https://suo.yt/short",u="https://api.wcc.best/config/upload",f="https://t.me/netfixit",d={data:function(){var e={backendVersion:"",advanced:"1",isPC:!0,options:{clientTypes:{Clash:"clash",Surge3:"surge&ver=3",Surge4:"surge&ver=4",Quantumult:"quan","Quantumult X":"quanx",Loon:"loon",Mellow:"mellow",Surfboard:"surfboard","Shadowsocks(SIP002)":"ss","Shadowsocks Android(SIP008)":"sssub",ShadowsocksR:"ssr",ShadowsocksD:"ssd",V2Ray:"v2ray",Trojan:"trojan","混合订阅（mixed）":"mixed","自动判断客户端":"auto"},customBackend:{"localhost:25500 本地版":"http://localhost:25500/sub?","sub.chizzle.ml":"https://sub.chizzle.ml/sub?","subcon.dlj.tf(subconverter作者提供-稳定)":"https://subcon.dlj.tf/sub?","api.dler.io(sub作者&lhie1提供-稳定)":"https://api.dler.io/sub?","api.wcc.best(sub-web作者提供-稳定)":"https://api.wcc.best/sub?","sub.id9.cc(品云转换)":"https://sub.id9.cc/sub?"},backendOptions:[{value:"http://localhost:25500/sub?"},{value:"https://sub.chizzle.ml/sub?"},{value:"https://subcon.dlj.tf/sub?"},{value:"https://api.dler.io/sub?"},{value:"https://api.wcc.best/sub?"},{value:"https://sub.id9.cc/sub?"}],remoteConfig:[{label:"默认",options:[{label:"不选，由接口提供方提供",value:""}]},{label:"ACL4SSR",options:[{label:"ACL4SSR_Online 默认版 分组比较全(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini"},{label:"ACL4SSR_Online_AdblockPlus 更多去广告(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_AdblockPlus.ini"},{label:"ACL4SSR_Online_NoAuto 无自动测速(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoAuto.ini"},{label:"ACL4SSR_Online_NoReject 无广告拦截规则(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_NoReject.ini"},{label:"ACL4SSR_Online_Mini 精简版(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini.ini"},{label:"ACL4SSR_Online_Mini_AdblockPlus.ini 精简版 更多去广告(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_AdblockPlus.ini"},{label:"ACL4SSR_Online_Mini_NoAuto.ini 精简版 不带自动测速(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_NoAuto.ini"},{label:"ACL4SSR_Online_Mini_Fallback.ini 精简版 带故障转移(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_Fallback.ini"},{label:"ACL4SSR_Online_Mini_MultiMode.ini 精简版 自动测速、故障转移、负载均衡(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiMode.ini"},{label:"ACL4SSR_Online_Mini_MultiCountry.ini 精简版 带港美日国家(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Mini_MultiCountry.ini"},{label:"ACL4SSR_Online_Full 全分组 重度用户使用(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full.ini"},{label:"ACL4SSR_Online_Full_MultiMode.ini 全分组 多模式 重度用户使用(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_MultiMode.ini"},{label:"ACL4SSR_Online_Full_NoAuto.ini 全分组 无自动测速 重度用户使用(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_NoAuto.ini"},{label:"ACL4SSR_Online_Full_AdblockPlus 全分组 重度用户使用 更多去广告(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_AdblockPlus.ini"},{label:"ACL4SSR_Online_Full_Netflix 全分组 重度用户使用 奈飞全量(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Netflix.ini"},{label:"ACL4SSR_Online_Full_Google 全分组 重度用户使用 谷歌全量(与Github同步)",value:"https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Google.ini"},{label:"ACL4SSR 本地 默认版 分组比较全",value:"config/ACL4SSR.ini"},{label:"ACL4SSR_Mini 本地 精简版",value:"config/ACL4SSR_Mini.ini"},{label:"ACL4SSR_Mini_NoAuto.ini 本地 精简版+无自动测速",value:"config/ACL4SSR_Mini_NoAuto.ini"},{label:"ACL4SSR_Mini_Fallback.ini 本地 精简版+fallback",value:"config/ACL4SSR_Mini_Fallback.ini"},{label:"ACL4SSR_BackCN 本地 回国",value:"config/ACL4SSR_BackCN.ini"},{label:"ACL4SSR_NoApple 本地 无苹果分流",value:"config/ACL4SSR_NoApple.ini"},{label:"ACL4SSR_NoAuto 本地 无自动测速 ",value:"config/ACL4SSR_NoAuto.ini"},{label:"ACL4SSR_NoAuto_NoApple 本地 无自动测速&无苹果分流",value:"config/ACL4SSR_NoAuto_NoApple.ini"},{label:"ACL4SSR_NoMicrosoft 本地 无微软分流",value:"config/ACL4SSR_NoMicrosoft.ini"},{label:"ACL4SSR_WithGFW 本地 GFW列表",value:"config/ACL4SSR_WithGFW.ini"}]},{label:"universal",options:[{label:"No-Urltest",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/no-urltest.ini"},{label:"Urltest",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/universal/urltest.ini"}]},{label:"customized",options:[{label:"Maying",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/maying.ini"},{label:"Ytoo",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ytoo.ini"},{label:"FlowerCloud",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/flowercloud.ini"},{label:"NyanCAT",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/nyancat.ini"},{label:"Nexitally",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/nexitally.ini"},{label:"SoCloud",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/socloud.ini"},{label:"ARK",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ark.ini"},{label:"ssrCloud",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/customized/ssrcloud.ini"}]},{label:"Special",options:[{label:"NeteaseUnblock(仅规则，No-Urltest)",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/netease.ini"},{label:"Basic(仅GEOIP CN + Final)",value:"https://cdn.jsdelivr.net/gh/SleepyHeeead/subconverter-config@master/remote-config/special/basic.ini"}]}]},form:{sourceSubUrl:"",clientType:"",customBackend:"",remoteConfig:"",excludeRemarks:"",includeRemarks:"",filename:"",emoji:!0,nodeList:!1,extraset:!1,sort:!1,udp:!1,tfo:!1,scv:!1,expand:!0,fdn:!1,appendType:!1,insert:!1,new_name:!0},loading:!1,customSubUrl:"",curtomShortSubUrl:"",dialogUploadConfigVisible:!1,uploadConfig:"",uploadPassword:"",myBot:f,sampleConfig:l,needUdp:!1},t=/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);if(t){for(var o=e.options.remoteConfig[1].options,n=0;n<o.length;n++)o[n].label.length>10&&(o[n].label=o[n].label.replace(/\s.*/,""));for(var i={},r=Object.keys(e.options.customBackend),a=0;a<r.length;a++){var s=r[a].replace(/\(.*/,"");i[s]=e.options.customBackend[r[a]]}e.options.customBackend=i}return e},created:function(){document.title="在线订阅转换",this.isPC=this.$getOS().isPc,this.form.sourceSubUrl=this.getLocalStorageItem("sourceSubUrl")},mounted:function(){this.form.clientType="clash",this.form.customBackend=s,this.form.remoteConfig="https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online.ini",this.getBackendVersion()},methods:{onCopy:function(){this.$message.success("Copied!")},goToProject:function(){window.open(r)},gotoTgChannel:function(){window.open(f)},gotoGayhub:function(){window.open(a)},gotoRemoteConfig:function(){window.open(l)},clashInstall:function(){if(""===this.customSubUrl)return this.$message.error("请先填写必填项，生成订阅链接"),!1;var e="clash://install-config?url=";window.open(e+encodeURIComponent(""!==this.curtomShortSubUrl?this.curtomShortSubUrl:this.customSubUrl))},surgeInstall:function(){if(""===this.customSubUrl)return this.$message.error("请先填写必填项，生成订阅链接"),!1;var e="surge://install-config?url=";window.open(e+this.customSubUrl)},makeUrl:function(){var e=this;if(""===this.form.sourceSubUrl||""===this.form.clientType)return this.$message.error("订阅链接与客户端为必填项"),!1;var t=""===this.form.customBackend?s:this.form.customBackend,o=""===this.form.remoteConfig?"":this.form.remoteConfig,n=this.form.sourceSubUrl;if(n=n.replace(/(\n|\r|\n\r)/g,"|"),-1!==n.indexOf("losadhwse")&&(-1!==t.indexOf("py6.pw")||-1!==t.indexOf("subconverter-web.now.sh")||-1!==t.indexOf("subconverter.herokuapp.com")||-1!==t.indexOf("api.wcc.best")))return this.$alert("此机场订阅已将该后端屏蔽，请自建后端转换。","转换错误提示",{confirmButtonText:"确定",callback:function(t){e.$message({type:"error",message:"action: ".concat(t)})}}),!1;this.customSubUrl=t+"target="+this.form.clientType+"&url="+encodeURIComponent(n)+"&insert="+this.form.insert,""!==o&&(this.customSubUrl+="&config="+encodeURIComponent(o)),"2"===this.advanced&&(""!==this.form.excludeRemarks&&(this.customSubUrl+="&exclude="+encodeURIComponent(this.form.excludeRemarks)),""!==this.form.includeRemarks&&(this.customSubUrl+="&include="+encodeURIComponent(this.form.includeRemarks)),""!==this.form.filename&&(this.customSubUrl+="&filename="+encodeURIComponent(this.form.filename)),this.form.appendType&&(this.customSubUrl+="&append_type="+this.form.appendType.toString()),this.customSubUrl+="&emoji="+this.form.emoji.toString()+"&list="+this.form.nodeList.toString()+"&tfo="+this.form.tfo.toString()+"&scv="+this.form.scv.toString()+"&fdn="+this.form.fdn.toString()+"&sort="+this.form.sort.toString()+"&expand="+this.form.expand.toString(),this.needUdp&&(this.customSubUrl+="&udp="+this.form.udp.toString()),"clash"===this.form.clientType&&(this.customSubUrl+="&new_name="+this.form.new_name.toString())),this.$copyText(this.customSubUrl),this.$message.success("定制订阅已复制到剪贴板")},makeShortUrl:function(){var e=this;if(""===this.customSubUrl)return this.$message.warning("请先生成订阅链接，再获取对应短链接"),!1;this.loading=!0;var t=new FormData;t.append("longUrl",btoa(this.customSubUrl)),this.$axios.post(c,t,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(t){1===t.data.Code&&""!==t.data.ShortUrl?(e.curtomShortSubUrl=t.data.ShortUrl,e.$copyText(t.data.ShortUrl),e.$message.success("短链接已复制到剪贴板")):e.$message.error("短链接获取失败："+t.data.Message)})).catch((function(){e.$message.error("短链接获取失败")})).finally((function(){e.loading=!1}))},confirmUploadConfig:function(){var e=this;if(""===this.uploadConfig)return this.$message.warning("远程配置不能为空"),!1;this.loading=!0;var t=new FormData;t.append("password",this.uploadPassword),t.append("config",this.uploadConfig),this.$axios.post(u,t,{header:{"Content-Type":"application/form-data; charset=utf-8"}}).then((function(t){1===t.data.Code&&""!==t.data.url?(e.$message.success("远程配置上传成功，配置链接已复制到剪贴板，有效期三个月望知悉"),e.form.remoteConfig=t.data.Url,e.$copyText(e.form.remoteConfig),e.dialogUploadConfigVisible=!1):e.$message.error("远程配置上传失败："+t.data.Message)})).catch((function(){e.$message.error("远程配置上传失败")})).finally((function(){e.loading=!1}))},backendSearch:function(e,t){var o=this.options.backendOptions,n=e?o.filter(this.createFilter(e)):o;t(n)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},getBackendVersion:function(){var e=this;this.$axios.get(s.substring(0,s.length-5)+"/version").then((function(t){e.backendVersion=t.data.replace(/backend\n$/gm,""),e.backendVersion=e.backendVersion.replace("subconverter","")}))},saveSubUrl:function(){""!==this.form.sourceSubUrl&&this.setLocalStorageItem("sourceSubUrl",this.form.sourceSubUrl)},getLocalStorageItem:function(e){var t=+new Date,o=localStorage.getItem(e),n="";if(null!==o){var i=JSON.parse(o);i.expire>t?n=i.value:localStorage.removeItem(e)}return n},setLocalStorageItem:function(e,t){var o="86400",n=+new Date,i={setTime:n,ttl:parseInt(o),expire:n+1e3*o,value:t};localStorage.setItem(e,JSON.stringify(i))}}},m=d,p=o("2877"),b=Object(p["a"])(m,n,i,!1,null,null,null);t["default"]=b.exports},addb:function(e,t,o){var n=o("f36a"),i=Math.floor,r=function(e,t){var o=e.length,s=i(o/2);return o<8?l(e,t):a(e,r(n(e,0,s),t),r(n(e,s),t),t)},l=function(e,t){var o,n,i=e.length,r=1;while(r<i){n=r,o=e[r];while(n&&t(e[n-1],o)>0)e[n]=e[--n];n!==r++&&(e[n]=o)}return e},a=function(e,t,o,n){var i=t.length,r=o.length,l=0,a=0;while(l<i||a<r)e[l+a]=l<i&&a<r?n(t[l],o[a])<=0?t[l++]:o[a++]:l<i?t[l++]:o[a++];return e};e.exports=r},b64b:function(e,t,o){var n=o("23e7"),i=o("7b0b"),r=o("df75"),l=o("d039"),a=l((function(){r(1)}));n({target:"Object",stat:!0,forced:a},{keys:function(e){return r(i(e))}})},d784:function(e,t,o){"use strict";o("ac1f");var n=o("e330"),i=o("6eeb"),r=o("9263"),l=o("d039"),a=o("b622"),s=o("9112"),c=a("species"),u=RegExp.prototype;e.exports=function(e,t,o,f){var d=a(e),m=!l((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),p=m&&!l((function(){var t=!1,o=/a/;return"split"===e&&(o={},o.constructor={},o.constructor[c]=function(){return o},o.flags="",o[d]=/./[d]),o.exec=function(){return t=!0,null},o[d](""),!t}));if(!m||!p||o){var b=n(/./[d]),h=t(d,""[e],(function(e,t,o,i,l){var a=n(e),s=t.exec;return s===r||s===u.exec?m&&!l?{done:!0,value:b(t,o,i)}:{done:!0,value:a(o,t,i)}:{done:!1}}));i(String.prototype,e,h[0]),i(u,d,h[1])}f&&s(u[d],"sham",!0)}},d998:function(e,t,o){var n=o("342f");e.exports=/MSIE|Trident/.test(n)},e9c4:function(e,t,o){var n=o("23e7"),i=o("da84"),r=o("d066"),l=o("2ba4"),a=o("e330"),s=o("d039"),c=i.Array,u=r("JSON","stringify"),f=a(/./.exec),d=a("".charAt),m=a("".charCodeAt),p=a("".replace),b=a(1..toString),h=/[\uD800-\uDFFF]/g,S=/^[\uD800-\uDBFF]$/,g=/^[\uDC00-\uDFFF]$/,v=function(e,t,o){var n=d(o,t-1),i=d(o,t+1);return f(S,e)&&!f(g,i)||f(g,e)&&!f(S,n)?"\\u"+b(m(e,0),16):e},C=s((function(){return'"\\udf06\\ud834"'!==u("\udf06\ud834")||'"\\udead"'!==u("\udead")}));u&&n({target:"JSON",stat:!0,forced:C},{stringify:function(e,t,o){for(var n=0,i=arguments.length,r=c(i);n<i;n++)r[n]=arguments[n];var a=l(u,null,r);return"string"==typeof a?p(a,h,v):a}})}}]);
//# sourceMappingURL=chunk-87bd93be.39ab7c77.js.map