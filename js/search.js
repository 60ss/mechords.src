function BalanceMainList(){var e;emptyItem=$("#empty").self,640<=$(win).width?emptyItem||(e=$("article",mainList).all).length&&e.length%2==1&&((emptyItem=doc.createElement("li")).setAttribute("id","empty"),emptyItem.innerHTML="<aside></aside>",mainList.appendChild(emptyItem)):emptyItem&&mainList.removeChild(emptyItem)}function CreateList(e,t,s,o,r,l){var d=$("#item").self?"h4":"h3",h="คอร์ดเพลง "+t,i=(s=s.replace(/http(s)*\:\/\/www\.mechords\.com/,""),"");if("object"==typeof r){var a=[t];/\s*[\(|\?]/.test(t)&&(a.push(t.split(/\s*[\(|\?]/)[0]),/\s*\(/.test(t)&&a.push(t.match(/\((.*)\)/)[1]));for(var n=0;n<r.length;n++){var c=r[n];-1===ignoreLabels.indexOf(c)&&-1===a.indexOf(c)&&(i+='<a href="/search/label/'+encodeURIComponent(c)+'">'+c+"</a>")}}else i+='<a href="'+s+'">'+r+"</a>";var l=l?'<span class="time">'+l+"</span>":"",f=CanUseStorage()&&0!=e?'<button class="btn-like"></button>':"",m="";return'<article class="post-'+e+'"><a class="thumbnail" href="'+s+'"><img width="120" height="68" '+(m=o.match(/vi(\_webp)*\/(.*)\/(0|default|maxresdefault)/)?'class="-ytimg"':m)+' src="'+(o=o.replace("/s72-c/","/s120/"))+'" alt="'+h+'" /></a><div class="details"><a class="title" href="'+s+'"><'+d+">"+t+"</"+d+'></a><div class="lbls">'+i+"</div></div>"+l+f+"</article>"}function BrowserIs(e){var t=navigator.userAgent,t=-1!=(t.indexOf("Opera")||t.indexOf("OPR"))?"opera":-1!=t.indexOf("Chrome")?"chrome":-1!=t.indexOf("Safari")?"safari":-1!=t.indexOf("Firefox")?"firefox":-1!=t.indexOf("MSIE")||1==!!doc.documentMode?"ie":void 0;return t===e}function CanUseWebP(){var e=doc.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))&&0==e.toDataURL("image/webp").indexOf("data:image/webp")}function CanUseSpeech(){return"SpeechRecognition"in window||"webkitSpeechRecognition"in window}function CanUseStorage(){var e="test";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}function AreYouReady(){return!!("querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach)}function Stope(e){(e=e||window.event).cancelBubble=!0,e.stopPropagation&&e.stopPropagation()}function Shuffler(e){if(e&&1<e.length){for(var t=e.length-1;0<t;t--){var s=Math.floor(Math.random()*(t+1)),o=e[t];e[t]=e[s],e[s]=o}return e}}function WriteScript(e){var t;scriptBox&&((t=document.createElement("script")).src=mechords+e,(BrowserIs("ie")?document.body:scriptBox).appendChild(t))}function ScrollbarWidth(){var e=doc.createElement("div"),t=(e.style.visibility="hidden",e.style.overflow="scroll",e.style.msOverflowStyle="scrollbar",body.appendChild(e),doc.createElement("div")),t=(e.appendChild(t),e.offsetWidth-t.offsetWidth);return e.parentNode.removeChild(e),t}function CopyToClipboard(e){var t;e&&extens&&((t=doc.createElement("textarea")).value=e,extens.appendChild(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),extens.removeChild(t))}function M01(){var e=win.location.search;return/[\?\&]m=1/.test(e)}function LoadTime(){var e=window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;e&&console.log("ระยะเวลาในการโหลดหน้าเว็บ "+e/1e3+" วินาที")}function ResetQ(){topScroll=$(win).scrollTop,win.scrollTo(0,0),qNotFound=!1,iQ=0,qIDs=[],qListA=[],qListB=[],qListC=[],lightBox||(lightBox=doc.createElement("div"),extens.appendChild(lightBox)),lightBox.scrollTo(0,0);var e=$("#mechords").top+$("#header").height+16;lightBox.style.marginTop=e+"px",lightBox.innerHTML='<div class="wrapper"><ul class="post-list -wide -placeholder" onclick="Stope(event)">'+ListHolder(18)+"</ul><div>",lightBox.classList.remove("_none")}function ListHolder(e){var t="";for(i=0;i<e;i++)t+=liHolder;return t}function insertAfter(e,t){t.parentNode.insertBefore(e,t.nextSibling)}function Wasteful(){var e=$(".wasteful").all;if(e.length)for(var t=0;t<e.length;t++)e[t].parentNode.removeChild(e[t])}function ShortenLinkIn(){var e=$("a").all;if(e.length)for(var t=0;t<e.length;t++){var s=e[t].getAttribute("href");s&&e[t].setAttribute("href",s.replace(/http(s)*\:\/\/www\.mechords\.com/,""))}}function Reverse(e){for(var t=new Array,s=e.length-1;0<=s;s--)t.push(e[s]);return t}var win=window,doc=document,html=doc.documentElement,body=doc.body||doc.querySelector("body");function $(e,t){var s,o=void 0!==win.pageYOffset,r="CSS1Compat"===(doc.compatMode||""),l={all:0,self:0,width:0,height:0,top:0,left:0,topScroll:0,bottomScroll:0,leftScroll:0,rightScroll:0};return e.self==window?{width:win.innerWidth||body.clientWidth,height:win.innerHeight||body.clientHeight,scrollTop:o?win.pageYOffset:r?body.scrollTop:0,scrollLeft:o?win.pageXOffset:r?body.scrollLeft:0}:e==document?{width:window.innerWidth||body.clientWidth||html.clientWidth,height:window.innerHeight||body.clientHeight||html.clientHeight}:"string"!=typeof e?e?(s=e.getBoundingClientRect(),{all:0,self:e,width:e.innerWidth||e.clientWidth,height:e.innerHeight||e.clientHeight,top:e.offsetTop,left:e.offsetLeft,topScroll:s.top,bottomScroll:s.bottom,leftScroll:s.left,rightScroll:s.right}):l:(e=(t||document).querySelectorAll(e)).length?(s=e[0].getBoundingClientRect(),{all:e,self:e[0],width:e[0].innerWidth||e[0].clientWidth,height:e[0].innerHeight||e[0].clientHeight,top:e[0].offsetTop,left:e[0].offsetLeft,topScroll:s.top,bottomScroll:s.bottom,leftScroll:s.left,rightScroll:s.right}):l}function ResetThePage(){var e=0!==topScroll?topScroll:topStart;topScroll=0,win.scrollTo(0,e),header&&(header.classList.remove("_search-extended"),header.classList.remove("_none"),header.removeAttribute("style")),lightBox&&(lightBox.classList.add("_none"),lightBox.innerHTML="",lightBox.removeAttribute("style")),search_txt&&(search_txt.value=""),search_cls&&search_cls.classList.add("_none"),shareBox&&shareBox.classList.add("_none"),body&&0==$("#chord-scroll").self&&body.classList.remove("_disable-scroll")}var mechords="https://www.mechords.com",pageURL=win.location.href,searchLabel=(searchLabel=pageURL.match(/search\/label\/(.*)/))?"-/"+searchLabel[1].split("?")[0]:"",searchQuery=pageURL.match(/[\?\&]q=(.*)/),ignoreLabels=(searchQuery=!!(searchQuery=!!searchQuery&&searchQuery[1].split("&")[0])&&decodeURI(searchQuery),["คอร์ดเพลง","recently","app-trending","app-recently","trending","สตริง","เพื่อชีวิต","ลูกกรุง","ลูกทุ่ง","ลูกทุ่งเพื่อชีวิต","หมอลำ","อีสาน","ใต้","คำเมือง","ลาว","สากล","เพลงคู่","Cover","คนโสด","เพลงจีบ","ชิลๆ","อินเลิฟ","อกหัก","เหงา","เศร้า","คิดถึง","ฤดูร้อน","ฤดูฝน","ฤดูหนาว","ปีใหม่","วันพ่อ","วันแม่","new","shorten-data","visiting-data","0.0","โควิด-19","เร็กเก้/สกา","อินดี้โฟล์ก","แร็พ","ปลดแอก"]),XL=1035.98<$(doc).width,fullScreen=1279.98<$(doc).width&&719.98<$(doc).height,scriptBox=$(".script-box").self,header=$("#header").self,footer=$("#footer").self,theTitle=$("#header h1").self,brand=$("#header .brand").self,searchBox=$("#header .search-box").self,search_txt=$(".search-box>.-txt").self,search_cls=$(".search-box>.-clear").self,search_btn=$(".search-box>.-submit").self,search_mic=$(".search-box>.-speech").self,lightBox=$("#extensions .light-box").self,alertBox=$("#extensions .alert-box").self,extens=$("#extensions").self,mainList=$("#main-list").self,mostList=$("#most-list").self,mostList1=$("#most-list-1").self,mostList2=$("#most-list-2").self,similarList=$("#similar .post-list").self,emptyItem=$("#empty").self,postItem=$("#post-item").self,itemTitle=$("#post-item header h2").self,navigation=$("#navigation").self,bottomSpace=200,chordTb=(chordTb=$(".chord-tb").self)||$(".chords-tb").self,btnFav=$("#category .btn-fav").self,favRes=$("#extensions .favorite-res").self;function ChordTb(){chordTb=(chordTb=$(".chord-tb").self)||$(".chords-tb").self}var fixAutoHeightInterval,shareBox=$(".share-box").self,keySelector=$(".select.-key>select").self,defaultSelectIndex=0,btn_share=$(".btn.-share").self,btn_switch=$(".btn.-switch").self,btn_lightbox=$(".btn.-lightbox").self,btn_like=$(".btn.-like").self,chk_gc=$(".chk.-gc > input").self,chk_uc=$(".chk.-uc > input").self,chk_simplify=$(".chk.-simplify > input").self,chk_cr=$(".chk.-cr > input").self,frm_l=$(".chk.-l > input").self,frm_m=$(".chk.-m > input").self,frm_e=$(".chk.-e > input").self,accordion=$(".accordion").self,a_pr=$(".accordion>.-pr").self,a_ps=$(".accordion>.-ps").self,a_gc=$(".accordion>.-gc").self,a_uc=$(".accordion>.-uc").self,a_cr=$(".accordion>.-cr").self,fixAutoHeightTime=0,liHolder="<li class='-holdlist'><div><div></div><div><div></div><div></div></div></div></li>",iQ=0,qByTitle=!1,qNotFound=!1,qListA=[],qListB=[],qListC=[],qIDs=[],iO="IntersectionObserver"in window,topStart=$(win).scrollTop,topScroll=0,submitStarted=!1,submitSeconded=!1,mcse=(!function(e){var t,s,o;e&&(!BrowserIs("ie")||(t=e.childNodes[0])&&((s=doc.createElement("div")).innerHTML='<div class="wrapper alert">คุณกำลังใช้เว็บบราวเซอร์ที่ล้าสมัย เพื่อการใช้งานเว็บไซต์อย่างเต็มประสิทธิภาพ ขอแนะนำให้ใช้หนึ่งในเบราว์เซอร์ฟรีที่ทันสมัยเหล่านี้แทนเถิด<br/><ul><li><a href="https://www.google.com/chrome/browser/desktop/" rel="nofollow" target="_blank"><img src="'+(o="https://src.mechords.com/img/")+'chrome.png"/></a></li><li><a href="https://opera.com/" rel="nofollow" target="_blank"><img src="'+o+'opera.png"/></a></li><li><a href="https://www.microsoftedgeinsider.com/" rel="nofollow" target="_blank"><img src="'+o+'edge.png"/></a></li><li><a href="https://www.mozilla.com/firefox/" rel="nofollow" target="_blank"><img src="'+o+'firefox.png"/></a></li></ul></div><br/>',e.insertBefore(s,t)))}($("#billboard").self),function(r){var l,i,a,e;r&&((l=r.getAttribute("data-dropdown"))&&(i=doc.createElement("li"),(a=$(".btn-down",r).self)&&(a.classList.remove("_none"),a.addEventListener("click",function(e){e.preventDefault();var t=$(".-dropdown",r).self;if(!t){(t=doc.createElement("ul")).setAttribute("class"," -dropdown"),l=l.split("|");for(var s=0;s<l.length;s++){var o=l[s];t.innerHTML+='<li><a href="/search/label/'+encodeURIComponent(o)+'">'+o.replace(/อารมณ์|เพลง|เทศกาล/g,"")+"</a></li>"}i.innerHTML='<a class="_i" href="#" ><svg style="margin:4px auto;"><path d="M18 15l-6-6-6 6h12z"/></svg></a>',i.setAttribute("class","btn-up"),t.appendChild(i),r.appendChild(t)}this.classList.add("_none"),t.classList.remove("_none"),i&&i.addEventListener("click",function(e){e.preventDefault(),a.classList.remove("_none"),t.classList.add("_none")})}))),(e=$(".btn-fav a",r).self)&&e.addEventListener("click",function(e){e.preventDefault()}))}($("#category").self),function(){function t(){""!==search_txt.value?"คอร์ดเพลงที่ถูกใจ"==search_txt.value?FavoriteRes():"สุ่มคอร์ดเพลง"==search_txt.value?(ResetQ(),RandomReq()):searchQuery?gcseReq():(ResetQ(),SearchReq(search_txt.value),header.classList.add("_search-extended")):(header.classList.add("_search-extended"),search_txt.focus())}var s,e;AreYouReady()&&searchBox&&header&&search_txt&&search_cls&&search_btn&&search_mic&&extens&&(search_txt.addEventListener("focus",function(){header.classList.add("_search-extended")}),search_txt.addEventListener("keyup",function(e){27==(e.which||e.keycode)&&ResetThePage(),""!==this.value?search_cls.classList.remove("_none"):ResetThePage()}),search_cls.addEventListener("click",function(){ResetThePage(),search_txt.focus()}),searchBox.addEventListener("click",function(e){Stope(e)}),searchBox.addEventListener("submit",function(e){e.preventDefault(),submitSeconded=submitStarted=!1,t()}),CanUseSpeech()&&(search_mic.classList.remove("_none"),(s=new webkitSpeechRecognition).continuous=!1,s.interimResults=!1,s.lang="th-TH",search_mic.addEventListener("click",function(){search_txt.value="",search_mic.classList.add("-active"),s.start(),s.onresult=function(e){e=e.results[0][0].transcript;search_txt.value=e,s.stop(),t()},s.onspeechend=function(){s.stop(),search_mic.classList.remove("-active")},s.onerror=function(){s.stop(),search_mic.classList.remove("-active")}})),(e=$("#header .rnd.-q").self)&&e.addEventListener("click",function(e){Stope(e),ResetQ(),header.classList.add("_search-extended"),RandomReq()}))}(),!1);function gcseRen(){google.search.cse.element.render({div:"mcse-results",tag:"searchresults-only",gname:"mcse"}),mcse=google.search.cse.element.getElement("mcse"),gcseReq()}function gcseReq(){var e;(searchQuery=search_txt.value||searchQuery)&&mcse&&(search_txt.value=searchQuery,(e=$("#header h1").self)&&(e.innerHTML="ค้นหาคอร์ดเพลง "+searchQuery),(e=$("#breadcrumbs strong").self)&&(e.innerHTML=searchQuery),e={url:"/search?q="+searchQuery,title:"ค้นหาคอร์ดเพลง "+searchQuery+" # mechords"},doc.title=e.title,win.history.pushState(null,e.title,e.url),mcse.execute(searchQuery),search_cls.classList.remove("_none"),search_txt.focus())}window.__gcse={parsetags:"explicit",callback:function(){"complete"==doc.readyState?gcseRen():google.setOnLoadCallback(function(){gcseRen()},!0)}},function(){var e=doc.createElement("script"),t=(e.type="text/javascript",e.async=!0,e.src="https://cse.google.com/cse.js?cx=011758994913547751990:dzxc-nd0qoe",$("script").self);t&&t.parentNode&&t.parentNode.insertBefore(e,t)}();var favStorage,oldFav=localStorage.getItem("favorites");if(oldFav&&(oldFav=JSON.parse(oldFav),Object.keys(oldFav).length)){var items=Object.keys(oldFav);if(items.length){for(var li="",i=0;i<items.length;i++){var id=items[i],data=oldFav[id],title=data[1],link=mechords+"/"+data[0]+".html",img=(link=(link=data[0].match(/(\d{4}\/\d{2}\/[^.]*)/))?mechords+"/"+link[1]+".html":"","https://i.ytimg.com/vi/"+data[3]+"/default.jpg"),lbls=data[2];"object"==typeof lbls&&(lbls=lbls.join("|")),FavFind(id=id.substr(1))||FavSet("add",id,link,title,lbls,img)}localStorage.removeItem("favorites"),BtnFav(),Favorite()}}function BtnFav(){var e;CanUseStorage()&&btnFav&&(favStorage=localStorage.getItem("mechords_favorite"),(e=$("a",btnFav).self)&&(favStorage&&Object.keys(JSON.parse(favStorage)).length?e.classList.add("-active"):e.classList.remove("-active"),e.removeEventListener("click",FavoriteRes),e.addEventListener("click",FavoriteRes)))}function FavFind(e){return!!(favStorage=localStorage.getItem("mechords_favorite"))&&!!(favStorage=JSON.parse(favStorage))[e]}function FavListener(e){Stope(e=e||window.event);var e=e.target.parentNode,t=e.className.match(/post\-(\d+)/);if(t=!!t&&t[1]){if(FavFind(t))FavSet("del",t);else{var s=$(".thumbnail",e).self,o=$(".title",e).self,r=o.getAttribute("href"),o=o.innerText,s=(s=$("img",s).self).getAttribute("src"),l=$(".lbls a",e).all;if(l.length){for(var i=[],a=0;a<l.length;a++)i.push(l[a].innerHTML);i=i.join("|")}r&&o&&i&&s&&FavSet("add",t,r,o,i,s)}BtnFav()}}function Favorite(){if(CanUseStorage()){favStorage=localStorage.getItem("mechords_favorite");var e=$(".post-list .btn-like").all;if(e.length)for(var t=startFav=0;t<e.length;t++){var s=e[t];s.classList.remove("_none");var o=s.parentNode.className.match(/post\-(\d+)/);(o=o?o[1]:0)&&FavFind(o)&&s.classList.add("-active"),s.removeEventListener("click",FavListener),s.addEventListener("click",FavListener)}}}function FavSet(e,t,s,o,r,d){var l,i=$(".post-"+t).all;if(i.length)for(var a=0;a<i.length;a++){var n=$(".btn-like,.btn.-like",i[a]).all;if(n.length)for(var c=0;c<n.length;c++)"add"==e?n[c].classList.add("-active"):"del"==e&&n[c].classList.remove("-active")}favStorage=localStorage.getItem("mechords_favorite"),t&&(l=(l=JSON.parse(favStorage))||{},"add"==e?s&&o&&r&&d&&(l[t]=[s,o,r,d]):"del"==e&&delete l[t],localStorage.setItem("mechords_favorite",JSON.stringify(l)))}function FavoriteRes(e){(e=e||window.event).preventDefault(),Stope(e),t=localStorage.getItem("mechords_favorite"),win.scrollTo(0,0);e=$("#mechords").top+$("#header").height+16;if(lightBox.style.marginTop=e+"px",t&&Object.keys(JSON.parse(t)).length){var t=JSON.parse(t),s=Object.keys(t);if(s.length){for(var o="",r=s.length-1;-1<r;r--){var l=s[r],i=t[l];o+="<li>"+CreateList(l,i[1],i[0],i[3],i[2].split("|"))+"</li>"}body.classList.add("_disable-scroll"),header.style.cssText="position: relative; z-index: 100; margin-right:"+ScrollbarWidth()+"px;",search_txt.value="คอร์ดเพลงที่ถูกใจ",search_cls.classList.remove("_none"),lightBox.classList.remove("_none"),lightBox.innerHTML='<div class="wrapper"><ul class="post-list -wide">'+o+"</ul></div>";e=$(".post-list",lightBox).self;e&&(e.removeEventListener("click",Stope),e.addEventListener("click",Stope)),Favorite(),search_txt.focus()}}}function FavItem(e,t){if(e&&t){if(FavFind(e))FavSet("del",e),t.classList.remove("-active");else{var s=pageURL.split(/[\#\?\&]/)[0],o=$("h2",postItem).self.innerHTML,r=$(".item-tags a",postItem).all,l="";if(r.length)for(var i=0;i<r.length;i++)l+=(0!=i?"|":"")+r[i].innerText;var a=$("img",postItem).self,n=$(".vdo",postItem).self,n=$("iframe",n).self;FavSet("add",e,s,o,l,a=a?a.getAttribute("src"):n&&(a=!!(a=n.src.match(/embed\/(.*)/))&&a[1].split(/\?/)[0])?"https://i.ytimg.com/vi/"+a+"/default.jpg":""),t.classList.add("-active")}BtnFav()}}function ScrollPos(){me_scroll=$(".me-scroll");var e,t,s,o,r=$("._disable-scroll").self;me_scroll.self&&(e=$("#body").left,t=$("#body").width+2*me_scroll.width,s=$("#body").width,o=$(win).height/2-me_scroll.height/2,me_scroll.self.style.top=o+"px",$(win).width>t+36?(me_scroll.self.style.right="",me_scroll.self.style.left=e+s+18+"px"):(me_scroll.self.style.left="",me_scroll.self.style.right=r?ScrollbarWidth()+"px":0))}BtnFav(),function(o){if(o){var e=o.querySelector("select"),r=o.querySelectorAll("ol>li"),t=doc.getElementById("strum");function l(e){t||((t=doc.createElement("audio")).type="audio/mpeg",t.id="strum",t.loop=!0,t.hidden=!0,extens.appendChild(t)),i(),e=e.replace("#","s"),t.src="https://src.mechords.com/audios/acoustic-guitar-tuning/"+e+".mp3",t.play()}e.onchange=function(){i();for(var e=(this.value||this.options[this.selectedIndex].value).split("|"),t=0;t<e.length;t++)r[t].innerHTML=e[t]};for(var s=0;s<r.length;s++)r[s].addEventListener("click",function(){var e=this.innerText;e?(l(e),this.classList.add("strumming")):i()});function i(){if(t&&(t.pause(),t.currentTime=0),r)for(var e=0;e<r.length;e++)r[e].classList.remove("strumming")}doc.addEventListener("keyup",function(e){var t,s;!o.querySelector(".strumming")||null!=(e={96:"stop",97:5,98:4,99:3,100:2,101:1,102:0}[e.which||e.keyCode])&&("stop"!=e&&(s=(t=r[e]).innerText)?(l(s),t.classList.add("strumming")):i())})}}($("#guitar-tuning").self);var btn_scroll=$(".me-scroll button").all;if(btn_scroll.length){for(var g_scroll=$(".me-scroll>._global").self,c_scholl=$(".me-scroll>._chord").self,i=0;i<btn_scroll.length;i++)btn_scroll[i].addEventListener("click",function(e){Stope(e);var t,e=this.value;"arrow"!=e&&("up"==e?SmoothScroll(0):"down"==e?(ChordTb(),chordTb?g_scroll&&c_scholl&&(g_scroll.classList.add("_none"),c_scholl.classList.remove("_none"),(t=$("#x1").self)&&(CloseTooltip(),ChordScrollStart(t.value),ActiveScrollBtn(t)),ScrollPos()):SmoothScroll($("body").height+bottomSpace-$(win).height)):"stop"==e?(g_scroll.classList.remove("_none"),c_scholl.classList.add("_none"),ChordScrollStop(),ScrollPos()):(ChordScrollStart(e),ActiveScrollBtn(this)))});function ActiveScrollBtn(e){var t=$(".me-scroll>._chord>button").all;if(t.length)for(var s=0;s<t.length;s++){var o=t[s];"arrow"!==o.value&&o.classList.remove("-active")}e&&"stop"!=e.value&&e.classList.add("-active")}function SmoothScroll(e){var s=window.pageYOffset,o=e-s,r=null;window.requestAnimationFrame(function e(t){r=r||t;t-=r;window.scrollTo(0,EaseInOutCubic(t,s,o,1e3));t<1e3&&window.requestAnimationFrame(e)})}function EaseInOutCubic(e,t,s,o){return(e/=o/2)<1?s/2*e*e*e+t:s/2*((e-=2)*e*e+2)+t}}function Alert(e){alertBox&&e&&(alertBox.innerHTML='<div class="-inner"><pre>'+e+'</pre><button type="button" onclick="Xlert(event);">ปิด</button></div>',alertBox.classList.remove("_none"))}function Xlert(e){Stope(e),alertBox&&(alertBox.innerHTML="",alertBox.classList.add("_none"))}var fbComment=!1;function FBPlugin(){var e;$("#fb-comments").self&&!fbComment&&(fbComment=!0,(e=doc.createElement("script")).async=!0,e.defer=!0,e.src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v8.0&appId=1458156584324917&autoLogAppEvents=1",body.appendChild(e))}function DeepLinkAndroid(){var e,t,s,o;"undefined"!=typeof Android&&(o=e="file:///android_asset/index.html#home",t=html.dataset.page,/label\:/.test(t)?(s=t.split(":")[1],o="file:///android_asset/page.html#"+(s=/recently|trending/.test(s)?""+s:"label-"+s)+"&back=home"):/search\:/.test(t)?o="file:///android_asset/index.html#search-"+t.split(":")[1]:"item"==t?(o="file:///android_asset/item.html?id="+postItem.className.split("post-")[1]+"&title="+$("h2",postItem).self.innerText+"&back=home",o+="&back=home"):o="index"==t&&e,o&&Android.LoadUrl(o))}function FncBundle(){Wasteful(),ScrollPos(),FBPlugin()}doc.addEventListener("click",function(){ResetThePage()}),doc.addEventListener("DOMContentLoaded",function(e){DeepLinkAndroid(),FncBundle()}),win.addEventListener("scroll",function(){FncBundle(),topStart=$(win).scrollTop}),win.addEventListener("resize",function(){FncBundle()});