function BalanceMainList(){var e;emptyItem=$("#empty").self,640<=$(win).width?emptyItem||(e=$("article",mainList).all).length&&e.length%2==1&&((emptyItem=doc.createElement("li")).setAttribute("id","empty"),emptyItem.innerHTML="<aside></aside>",mainList.appendChild(emptyItem)):emptyItem&&mainList.removeChild(emptyItem)}function CreateList(e,t,s,r,i,l){var o=$("#item").self?"h4":"h3",a="คอร์ดเพลง "+t;s=s.replace(/http(s)*\:\/\/www\.mechords\.com/,"");var n="";if("object"==typeof i){var c=[t];/\s*[\(|\?]/.test(t)&&(c.push(t.split(/\s*[\(|\?]/)[0]),/\s*\(/.test(t)&&c.push(t.match(/\((.*)\)/)[1]));for(var d=0;d<i.length;d++){var h=i[d];-1===ignoreLabels.indexOf(h)&&-1===c.indexOf(h)&&(n+='<a href="/search/label/'+encodeURIComponent(h)+'">'+h+"</a>")}}else n+='<a href="'+s+'">'+i+"</a>";var f=l?'<span class="time">'+l+"</span>":"",v=CanUseStorage()&&0!=e?'<button class="btn-like"></button>':"",m="";return r.match(/vi(\_webp)*\/(.*)\/(0|default|maxresdefault)/)&&(m='class="-ytimg"'),'<article class="post-'+e+'"><a class="thumbnail" href="'+s+'"><img width="120" height="68" '+m+' src="'+(r=r.replace("/s72-c/","/s120/"))+'" alt="'+a+'" /></a><div class="details"><a class="title" href="'+s+'"><'+o+">"+t+"</"+o+'></a><div class="lbls">'+n+"</div></div>"+f+v+"</article>"}function BrowserIs(e){var t=navigator.userAgent,s=-1!=(t.indexOf("Opera")||t.indexOf("OPR"))?"opera":-1!=t.indexOf("Chrome")?"chrome":-1!=t.indexOf("Safari")?"safari":-1!=t.indexOf("Firefox")?"firefox":-1!=t.indexOf("MSIE")||1==!!doc.documentMode?"ie":void 0;return s===e}function CanUseWebP(){var e=doc.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))&&0==e.toDataURL("image/webp").indexOf("data:image/webp")}function CanUseSpeech(){return"SpeechRecognition"in window||"webkitSpeechRecognition"in window}function CanUseStorage(){var e="test";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}function AreYouReady(){return!!("querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach)}function Stope(e){(e=e||window.event).cancelBubble=!0,e.stopPropagation&&e.stopPropagation()}function Shuffler(e){if(e&&1<e.length){for(var t=e.length-1;0<t;t--){var s=Math.floor(Math.random()*(t+1)),r=e[t];e[t]=e[s],e[s]=r}return e}}function WriteScript(e){var t;scriptBox&&((t=document.createElement("script")).src=mechords+e,BrowserIs("ie")?document.body.appendChild(t):scriptBox.appendChild(t))}function ScrollbarWidth(){var e=doc.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",e.style.msOverflowStyle="scrollbar",body.appendChild(e);var t=doc.createElement("div");e.appendChild(t);var s=e.offsetWidth-t.offsetWidth;return e.parentNode.removeChild(e),s+"px"}function CopyToClipboard(e){var t;e&&extens&&((t=doc.createElement("textarea")).value=e,extens.appendChild(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),extens.removeChild(t))}function M01(){var e=win.location.search;return/[\?\&]m=1/.test(e)}function LoadTime(){var e=window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;e&&console.log("ระยะเวลาในการโหลดหน้าเว็บ "+e/1e3+" วินาที")}function ResetQ(){topScroll=$(win).scrollTop,win.scrollTo(0,0),qNotFound=!1,iQ=0,qIDs=[],qListA=[],qListB=[],qListC=[],lightBox||(lightBox=doc.createElement("div"),extens.appendChild(lightBox)),lightBox.innerHTML='<div class="wrapper"><ul class="post-list -wide -placeholder">'+ListHolder(18)+"</ul><div>",lightBox.classList.remove("_none")}function ListHolder(e){var t="";for(i=0;i<e;i++)t+=liHolder;return t}function insertAfter(e,t){t.parentNode.insertBefore(e,t.nextSibling)}function Wasteful(){var e=$(".wasteful").all;if(e.length)for(var t=0;t<e.length;t++)e[t].parentNode.removeChild(e[t])}function ShortenLinkIn(){var e=$("a").all;if(e.length)for(var t=0;t<e.length;t++){var s=e[t].getAttribute("href");s&&e[t].setAttribute("href",s.replace(/http(s)*\:\/\/www\.mechords\.com/,""))}}function Reverse(e){for(var t=new Array,s=e.length-1;0<=s;s--)t.push(e[s]);return t}var win=window,doc=document,html=doc.documentElement,body=doc.body||doc.querySelector("body");function $(e,t){var e=e,s=void 0!==win.pageYOffset,r="CSS1Compat"===(doc.compatMode||""),i={all:0,self:0,width:0,height:0,top:0,left:0,topScroll:0,bottomScroll:0,leftScroll:0,rightScroll:0};if(e.self==window)return{width:win.innerWidth||body.clientWidth,height:win.innerHeight||body.clientHeight,scrollTop:s?win.pageYOffset:r?body.scrollTop:0,scrollLeft:s?win.pageXOffset:r?body.scrollLeft:0};if(e==document)return{width:window.innerWidth||body.clientWidth||html.clientWidth,height:window.innerHeight||body.clientHeight||html.clientHeight};if("string"==typeof e){if((e=t?t.querySelectorAll(e):document.querySelectorAll(e)).length){var l=e[0].getBoundingClientRect();return{all:e,self:e[0],width:e[0].innerWidth||e[0].clientWidth,height:e[0].innerHeight||e[0].clientHeight,top:e[0].offsetTop,left:e[0].offsetLeft,topScroll:l.top,bottomScroll:l.bottom,leftScroll:l.left,rightScroll:l.right}}return i}if(e){l=e.getBoundingClientRect();return{all:0,self:e,width:e.innerWidth||e.clientWidth,height:e.innerHeight||e.clientHeight,top:e.offsetTop,left:e.offsetLeft,topScroll:l.top,bottomScroll:l.bottom,leftScroll:l.left,rightScroll:l.right}}return i}function ResetThePage(){var e=0!==topScroll?topScroll:topStart;topScroll=0,win.scrollTo(0,e),header&&(header.classList.remove("_search-extended"),header.classList.remove("_none"),header.removeAttribute("style")),lightBox&&(lightBox.classList.add("_none"),lightBox.innerHTML="",lightBox.removeAttribute("style")),search_txt&&(search_txt.value=""),search_cls&&search_cls.classList.add("_none"),shareBox&&shareBox.classList.add("_none"),body&&0==$("#chord-scroll").self&&body.classList.remove("_disable-scroll")}var mechords="https://www.mechords.com",pageURL=win.location.href,searchLabel=(searchLabel=pageURL.match(/search\/label\/(.*)/))?"-/"+searchLabel[1].split("?")[0]:"",searchQuery=pageURL.match(/[\?\&]q=(.*)/);searchQuery=!!(searchQuery=!!searchQuery&&searchQuery[1].split("&")[0])&&decodeURI(searchQuery);var ignoreLabels=["คอร์ดเพลง","recently","app-trending","app-recently","trending","สตริง","เพื่อชีวิต","ลูกกรุง","ลูกทุ่ง","ลูกทุ่งเพื่อชีวิต","หมอลำ","อีสาน","ใต้","คำเมือง","ลาว","สากล","เพลงคู่","Cover","คนโสด","เพลงจีบ","ชิลๆ","อินเลิฟ","อกหัก","เหงา","เศร้า","คิดถึง","ฤดูร้อน","ฤดูฝน","ฤดูหนาว","ปีใหม่","วันพ่อ","วันแม่","new","shorten-data","visiting-data","0.0","โควิด-19","เร็กเก้/สกา","อินดี้โฟล์ก","แร็พ","ปลดแอก"],XL=1035.98<$(doc).width,fullScreen=1279.98<$(doc).width&&719.98<$(doc).height,scriptBox=$(".script-box").self,header=$("#header").self,footer=$("#footer").self,theTitle=$("#header h1").self,brand=$("#header .brand").self,searchBox=$("#header .search-box").self,search_txt=$(".search-box>.-txt").self,search_cls=$(".search-box>.-clear").self,search_btn=$(".search-box>.-submit").self,search_mic=$(".search-box>.-speech").self,lightBox=$("#extensions .light-box").self,alertBox=$("#extensions .alert-box").self,extens=$("#extensions").self,mainList=$("#main-list").self,mostList=$("#most-list").self,mostList1=$("#most-list-1").self,mostList2=$("#most-list-2").self,similarList=$("#similar .post-list").self,emptyItem=$("#empty").self,postItem=$("#post-item").self,itemTitle=$("#post-item header h2").self,navigation=$("#navigation").self,bottomSpace=200,chordTb=(chordTb=$(".chord-tb").self)||$(".chords-tb").self,btnFav=$("#category .btn-fav").self,favRes=$("#extensions .favorite-res").self;function ChordTb(){chordTb=(chordTb=$(".chord-tb").self)||$(".chords-tb").self}var fixAutoHeightInterval,shareBox=$(".share-box").self,keySelector=$(".select.-key>select").self,defaultSelectIndex=0,btn_share=$(".btn.-share").self,btn_switch=$(".btn.-switch").self,btn_lightbox=$(".btn.-lightbox").self,btn_like=$(".btn.-like").self,chk_gc=$(".chk.-gc > input").self,chk_uc=$(".chk.-uc > input").self,chk_simplify=$(".chk.-simplify > input").self,chk_cr=$(".chk.-cr > input").self,frm_l=$(".chk.-l > input").self,frm_m=$(".chk.-m > input").self,frm_e=$(".chk.-e > input").self,accordion=$(".accordion").self,a_pr=$(".accordion>.-pr").self,a_ps=$(".accordion>.-ps").self,a_gc=$(".accordion>.-gc").self,a_uc=$(".accordion>.-uc").self,a_cr=$(".accordion>.-cr").self,fixAutoHeightTime=0,liHolder="<li><div><div></div><div><div></div><div></div></div></div></li>",iQ=0,qByTitle=!1,qNotFound=!1,qListA=[],qListB=[],qListC=[],qIDs=[],iO="IntersectionObserver"in window,topStart=$(win).scrollTop,topScroll=0;!function(e){var t,s,r;e&&(!BrowserIs("ie")||(t=e.childNodes[0])&&(r="https://src.mechords.com/img/",(s=doc.createElement("div")).innerHTML='<div class="wrapper alert">คุณกำลังใช้เว็บบราวเซอร์ที่ล้าสมัย เพื่อการใช้งานเว็บไซต์อย่างเต็มประสิทธิภาพ ขอแนะนำให้ใช้หนึ่งในเบราว์เซอร์ฟรีที่ทันสมัยเหล่านี้แทนเถิด<br/><ul><li><a href="https://www.google.com/chrome/browser/desktop/" rel="nofollow" target="_blank"><img src="'+r+'chrome.png"/></a></li><li><a href="https://opera.com/" rel="nofollow" target="_blank"><img src="'+r+'opera.png"/></a></li><li><a href="https://www.microsoftedgeinsider.com/" rel="nofollow" target="_blank"><img src="'+r+'edge.png"/></a></li><li><a href="https://www.mozilla.com/firefox/" rel="nofollow" target="_blank"><img src="'+r+'firefox.png"/></a></li></ul></div><br/>',e.insertBefore(s,t)))}($("#billboard").self),function(i){var l,o,a,e;i&&((l=i.getAttribute("data-dropdown"))&&(o=doc.createElement("li"),(a=$(".btn-down",i).self)&&(a.classList.remove("_none"),a.addEventListener("click",function(e){e.preventDefault();var t=$(".-dropdown",i).self;if(!t){(t=doc.createElement("ul")).setAttribute("class"," -dropdown"),l=l.split("|");for(var s=0;s<l.length;s++){var r=l[s];t.innerHTML+='<li><a href="/search/label/'+encodeURIComponent(r)+'">'+r.replace(/อารมณ์|เพลง|เทศกาล/g,"")+"</a></li>"}o.innerHTML='<a class="_i" href="#" ><svg style="margin:4px auto;"><path d="M18 15l-6-6-6 6h12z"/></svg></a>',o.setAttribute("class","btn-up"),t.appendChild(o),i.appendChild(t)}this.classList.add("_none"),t.classList.remove("_none"),o&&o.addEventListener("click",function(e){e.preventDefault(),a.classList.remove("_none"),t.classList.add("_none")})}))),(e=$(".btn-fav a",i).self)&&e.addEventListener("click",function(e){e.preventDefault()}))}($("#category").self),function(){function s(){""!==search_txt.value?"คอร์ดเพลงที่ถูกใจ"==search_txt.value?FavoriteRes():searchQuery?gcseReq():(SearchReq(search_txt.value),header.classList.add("_search-extended")):(header.classList.add("_search-extended"),search_txt.focus())}var r,e;AreYouReady()&&searchBox&&header&&search_txt&&search_cls&&search_btn&&search_mic&&extens&&(search_txt.addEventListener("focus",function(){header.classList.add("_search-extended")}),search_txt.addEventListener("keyup",function(e){27==(e.which||e.keycode)&&ResetThePage(),""!==this.value?search_cls.classList.remove("_none"):ResetThePage()}),search_cls.addEventListener("click",function(){ResetThePage(),search_txt.focus()}),searchBox.addEventListener("click",function(e){Stope(e)}),searchBox.addEventListener("submit",function(e){e.preventDefault(),s()}),CanUseSpeech()&&(search_mic.classList.remove("_none"),(r=new webkitSpeechRecognition).continuous=!1,r.interimResults=!1,r.lang="th-TH",search_mic.addEventListener("click",function(){search_txt.value="",search_mic.classList.add("-active"),r.start(),r.onresult=function(e){var t=e.results[0][0].transcript;search_txt.value=t,r.stop(),s()},r.onspeechend=function(){r.stop(),search_mic.classList.remove("-active")},r.onerror=function(){r.stop(),search_mic.classList.remove("-active")}})),(e=$("#header .rnd.-q").self)&&e.addEventListener("click",function(e){Stope(e),ResetQ(),header.classList.add("_search-extended"),RandomReq()}))}(),function(e){function s(e){var t=$("article",e).all;if(t.length)for(var s=0;s<t.length;s++){var r,i,l,o=t[s];$("img",o).self||(i=(r=$(".thumbnail",o).self).getAttribute("data-img"),l=$(".title",o).self.innerText,i&&(r.innerHTML='<img class="-ytimg" src="'+i+'" alt="คอร์ดเพลง '+l+'" />',r.removeAttribute("data-img")))}}iO?new IntersectionObserver(function(e,t){(e=e[0]).isIntersecting&&(s(e.target),t.unobserve(e.target))},{rootMargin:"0px 0px"}).observe(e):s(e)}(mostList);var mostIDs=[];function MostRes(e){if(e.feed&&e.feed.entry){var t=e.feed.entry;if(t.length)for(var s=0;s<t.length;s++){var r=t[s],i=r.id.$t.split(".post-")[1],l=$("#most-list .post-"+i).self;if(l&&-1==mostIDs.indexOf(i)){mostIDs.push(i);var o=$(".title",l).self,a=o.getAttribute("href"),n=o.innerText;r.content.$t.match(/\<img.*?src=[\'\"](.*?)[\'\"]/);if(a&&n){l.classList.remove("-lazy");var c=[n];/\s*[\(|\?]/.test(n)&&(c.push(n.split(/\s*[\(|\?]/)[0]),c.push(n.match(/\((.*)\)/)[1]));var d=r.category,h="";if(d.length)for(var f=0;f<d.length;f++){var v=d[f].term;"ปลดแอก"===v?l.parentNode.setAttribute("class","liberty"):/recently|trending/.test(v)?l.parentNode.setAttribute("class",v):c.indexOf(v)<0&&ignoreLabels.indexOf(v)<0&&(h+="<a href='/search/label/"+encodeURIComponent(v)+"'>"+v+"</a>")}var m=$(".lbls",l).self;m&&(m.classList.remove("-loading"),m.innerHTML=h);var p,g=r.published.$t,u=$("time",l).self;g&&!u&&(p=(g=g.split("T")[0].split("-"))[2]+"/"+parseInt(g[1])+"/",p+=(parseInt(g[0])+543).toString().substr(2),(u=doc.createElement("span")).classList.add("time"),u.innerHTML=p,l.appendChild(u))}}}Favorite()}scriptBox.innerHTML=""}function HeaderSticky(e){search_txt.value=e,search_cls.classList.remove("_none"),header.classList.add("-search"),header.style.cssText="position: relative; z-index: 100; margin-right:"+ScrollbarWidth(),body.classList.add("_disable-scroll")}function RandomReq(){topStart=$(win).scrollTop;var e=Math.floor(Math.random()*(totalPost-150))+1;HeaderSticky("สุ่มคอร์ดเพลง"),WriteScript("/feeds/posts/default/?alt=json-in-script&start-index="+e+"&max-results=150&callback=RandomRes")}WriteScript("/feeds/posts/summary/?alt=json-in-script&callback=TotalRes&max-results=1");var totalPost=5e3;function TotalRes(e){e.feed&&e.feed.entry&&(totalPost=parseInt(e.feed.openSearch$totalResults.$t),console.log(totalPost))}var lightList=$(".post-list",lightBox).self;function RandomRes(e){if(lightList=$(".post-list>li",lightBox).all,e.feed&&e.feed.entry){var t=e.feed.entry;if(t.length)for(var s=18<(t=18<t.length?Shuffler(t):t).length?18:t.length,r=0;r<s;r++){for(var i=t[r],l=i.title.$t,o="",a=i.link,n=0;n<a.length;n++)"alternate"==a[n].rel&&(o=a[n].href);for(var c=i.content.$t.match(/src\s*=\s*"(.+?)"/),d=((c=c&&c[1]?c[1].replace("0.jpg","default.jpg"):"https://src.mechords.com/img/no-img.gif").indexOf("ytimg.com"),[]),h=0;h<i.category.length;h++)d.push(i.category[h].term);var f="",v=i.published.$t;v&&(v=v.split("T")[0].split("-"))[1]&&v[2]&&(f=v[2]+"/"+parseInt(v[1])+"/",f+=(parseInt(v[0])+543).toString().substr(2)),lightList&&lightList[r]&&(lightList[r].innerHTML=CreateList(id,l,o,c,d,f))}}}function SearchReq(e){topScroll=$(win).scrollTop,win.scrollTo(0,0),HeaderSticky(e),lightBox||(lightBox=doc.createElement("div"),extens.appendChild(lightBox));lightBox.innerHTML="<div class='wrapper'><div id='mcse-results'><div></div>",lightBox.classList.remove("_none"),Gcse()}var mcse=!1;function gcseRen(){google.search.cse.element.render({div:"mcse-results",tag:"searchresults-only",gname:"mcse"}),mcse=google.search.cse.element.getElement("mcse"),search_txt.value&&mcse.execute(search_txt.value)}function Gcse(){var e=doc.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://cse.google.com/cse.js?cx=011758994913547751990:dzxc-nd0qoe";var t=$("script").self;t&&t.parentNode&&t.parentNode.insertBefore(e,t)}window.__gcse={parsetags:"explicit",callback:function(){"complete"==doc.readyState?gcseRen():google.setOnLoadCallback(function(){gcseRen()},!0)}};var favStorage,oldFav=localStorage.getItem("favorites");if(oldFav&&(oldFav=JSON.parse(oldFav),Object.keys(oldFav).length)){var items=Object.keys(oldFav);if(items.length){for(var li="",i=0;i<items.length;i++){var id=items[i],data=oldFav[id],title=data[1],link=mechords+"/"+data[0]+".html";link=(link=data[0].match(/(\d{4}\/\d{2}\/[^.]*)/))?mechords+"/"+link[1]+".html":"";var img="https://i.ytimg.com/vi/"+data[3]+"/default.jpg",lbls=data[2];"object"==typeof lbls&&(lbls=lbls.join("|")),FavFind(id=id.substr(1))||FavSet("add",id,link,title,lbls,img)}localStorage.removeItem("favorites"),BtnFav(),Favorite()}}function BtnFav(){var e;CanUseStorage()&&btnFav&&(favStorage=localStorage.getItem("mechords_favorite"),(e=$("a",btnFav).self)&&(favStorage&&Object.keys(JSON.parse(favStorage)).length?e.classList.add("-active"):e.classList.remove("-active"),e.removeEventListener("click",FavoriteRes),e.addEventListener("click",FavoriteRes)))}function FavFind(e){return!!(favStorage=localStorage.getItem("mechords_favorite"))&&!!(favStorage=JSON.parse(favStorage))[e]}function FavListener(e){Stope(e=e||window.event);var t=e.target.parentNode,s=t.className.match(/post\-(\d+)/);if(s=!!s&&s[1]){if(FavFind(s))FavSet("del",s);else{var r=$(".thumbnail",t).self,i=$(".title",t).self,l=i.getAttribute("href"),o=i.innerText,a=(a=$("img",r).self).getAttribute("src"),n=$(".lbls a",t).all;if(n.length){for(var c=[],d=0;d<n.length;d++)c.push(n[d].innerHTML);c=c.join("|")}l&&o&&c&&a&&FavSet("add",s,l,o,c,a)}BtnFav()}}function Favorite(){if(CanUseStorage()){favStorage=localStorage.getItem("mechords_favorite");var e=$(".post-list .btn-like").all;if(e.length)for(var t=startFav=0;t<e.length;t++){var s=e[t];s.classList.remove("_none");var r=s.parentNode.className.match(/post\-(\d+)/);(r=r?r[1]:0)&&FavFind(r)&&s.classList.add("-active"),s.removeEventListener("click",FavListener),s.addEventListener("click",FavListener)}}}function FavSet(e,t,s,r,i,l){var o,a=$(".post-"+t).all;if(a.length)for(var n=0;n<a.length;n++){var c=$(".btn-like,.btn.-like",a[n]).all;if(c.length)for(var d=0;d<c.length;d++)"add"==e?c[d].classList.add("-active"):"del"==e&&c[d].classList.remove("-active")}favStorage=localStorage.getItem("mechords_favorite"),t&&(o=(o=JSON.parse(favStorage))||{},"add"==e?s&&r&&i&&l&&(o[t]=[s,r,i,l]):"del"==e&&delete o[t],localStorage.setItem("mechords_favorite",JSON.stringify(o)))}function FavoriteRes(e){if((e=e||window.event).preventDefault(),Stope(e),t=localStorage.getItem("mechords_favorite"),win.scrollTo(0,0),t&&Object.keys(JSON.parse(t)).length){var t=JSON.parse(t),s=Object.keys(t);if(s.length){for(var r="",i=s.length-1;-1<i;i--){var l=s[i],o=t[l];r+="<li>"+CreateList(l,o[1],o[0],o[3],o[2].split("|"))+"</li>"}body.classList.add("_disable-scroll"),header.style.cssText="position: relative; z-index: 100; margin-right:"+ScrollbarWidth(),search_txt.value="คอร์ดเพลงที่ถูกใจ",search_cls.classList.remove("_none"),lightBox.classList.remove("_none"),lightBox.innerHTML='<div class="wrapper"><ul class="post-list -wide">'+r+"</ul></div>";var a=$(".post-list",lightBox).self;a&&(a.removeEventListener("click",Stope),a.addEventListener("click",Stope)),Favorite(),search_txt.focus()}}}function FavItem(e,t){if(e&&t){if(FavFind(e))FavSet("del",e),t.classList.remove("-active");else{var s=pageURL.split(/[\#\?\&]/)[0],r=$("h2",postItem).self.innerHTML,i=$(".item-tags a",postItem).all,l="";if(i.length)for(var o=0;o<i.length;o++)l+=(0!=o?"|":"")+i[o].innerText;var a=$("img",postItem).self,n=$(".vdo",postItem).self,c=$("iframe",n).self;FavSet("add",e,s,r,l,a=a?a.getAttribute("src"):c&&(a=!!(a=c.src.match(/embed\/(.*)/))&&a[1].split(/\?/)[0])?"https://i.ytimg.com/vi/"+a+"/default.jpg":""),t.classList.add("-active")}BtnFav()}}function ScrollPos(){var e,t,s,r;me_scroll=$(".me-scroll"),me_scroll.self&&(e=$("#body").left,t=$("#body").width+2*me_scroll.width,s=$("#body").width,r=$(win).height/2-me_scroll.height/2,me_scroll.self.style.top=r+"px",$(win).width>t+36?(me_scroll.self.style.right="",me_scroll.self.style.left=e+s+18+"px"):(me_scroll.self.style.left="",me_scroll.self.style.right=0))}BtnFav(),function(i){if(i){var e=i.querySelector("select"),l=i.querySelectorAll("ol>li"),t=doc.getElementById("strum");function o(e){t||((t=doc.createElement("audio")).type="audio/mpeg",t.id="strum",t.loop=!0,t.hidden=!0,extens.appendChild(t)),a(),e=e.replace("#","s"),t.src="https://src.mechords.com/audios/acoustic-guitar-tuning/"+e+".mp3",t.play()}e.onchange=function(){a();for(var e=(this.value||this.options[this.selectedIndex].value).split("|"),t=0;t<e.length;t++)l[t].innerHTML=e[t]};for(var s=0;s<l.length;s++)l[s].addEventListener("click",function(){var e=this.innerText;e?(o(e),this.classList.add("strumming")):a()});function a(){if(t&&(t.pause(),t.currentTime=0),l)for(var e=0;e<l.length;e++)l[e].classList.remove("strumming")}doc.addEventListener("keyup",function(e){var t,s,r;!i.querySelector(".strumming")||null!=(t={96:"stop",97:5,98:4,99:3,100:2,101:1,102:0}[e.which||e.keyCode])&&("stop"!=t&&(r=(s=l[t]).innerText)?(o(r),s.classList.add("strumming")):a())})}}($("#guitar-tuning").self);var btn_scroll=$(".me-scroll button").all;if(btn_scroll.length){for(var g_scroll=$(".me-scroll>._global").self,c_scholl=$(".me-scroll>._chord").self,i=0;i<btn_scroll.length;i++)btn_scroll[i].addEventListener("click",function(e){Stope(e);var t,s=this.value;"up"==s?SmoothScroll(0):"down"==s?(ChordTb(),chordTb?g_scroll&&c_scholl&&(g_scroll.classList.add("_none"),c_scholl.classList.remove("_none"),(t=$("button",c_scholl).self)&&(CloseTooltip(),ChordScrollStart(t.value),ActiveScrollBtn(t)),ScrollPos()):SmoothScroll($("body").height+bottomSpace-$(win).height)):"stop"==s?(g_scroll.classList.remove("_none"),c_scholl.classList.add("_none"),ChordScrollStop(),ScrollPos()):(ChordScrollStart(s),ActiveScrollBtn(this))});var svg_down='<svg><path d="M16.59,10.942L12,15.522l-4.59-4.58L6,12.353l6,6l6-6L16.59,10.942z" /><path d="M16.59,5.647L12,10.228l-4.59-4.58L6,7.058l6,6l6-6L16.59,5.647z" /></svg>';function ActiveScrollBtn(e){var t=$(".me-scroll>._chord>button").all;if(t.length)for(var s=0;s<t.length;s++){var r=t[s];r.classList.remove("-active"),-1==r.value.indexOf("stop")&&(r.innerHTML="")}e&&"stop"!=e.value&&(e.innerHTML=svg_down,e.classList.add("-active"))}function SmoothScroll(e){var r=window.pageYOffset,i=e-r,l=1e3,o=null;window.requestAnimationFrame(function e(t){o=o||t;var s=t-o;window.scrollTo(0,EaseInOutCubic(s,r,i,l));s<l&&window.requestAnimationFrame(e)})}function EaseInOutCubic(e,t,s,r){return(e/=r/2)<1?s/2*e*e*e+t:s/2*((e-=2)*e*e+2)+t}}function Alert(e){var t;alertBox&&e&&(t='<div class="-inner"><pre>'+e+'</pre><button type="button" onclick="Xlert(event);">ปิด</button></div>',alertBox.innerHTML=t,alertBox.classList.remove("_none"))}function Xlert(e){Stope(e),alertBox&&(alertBox.innerHTML="",alertBox.classList.add("_none"))}var fbComment=!1;function FBPlugin(){var e;$("#fb-comments").self&&!fbComment&&(fbComment=!0,(e=doc.createElement("script")).async=!0,e.defer=!0,e.src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v8.0&appId=1458156584324917&autoLogAppEvents=1",body.appendChild(e))}function DeepLinkAndroid(){var e,t,s,r;"undefined"!=typeof Android&&(r=e="file:///android_asset/index.html#home",t=html.dataset.page,/label\:/.test(t)?(s=t.split(":")[1],r="file:///android_asset/page.html#"+(s=/recently|trending/.test(s)?""+s:"label-"+s)+"&back=home"):/search\:/.test(t)?r="file:///android_asset/index.html#search-"+t.split(":")[1]:"item"==t?(r="file:///android_asset/item.html?id="+postItem.className.split("post-")[1]+"&title="+$("h2",postItem).self.innerText+"&back=home",r+="&back=home"):r="index"==t&&e,r&&Android.LoadUrl(r))}function FncBundle(){Wasteful(),ScrollPos(),FBPlugin()}doc.addEventListener("click",function(){ResetThePage()}),doc.addEventListener("DOMContentLoaded",function(e){DeepLinkAndroid(),FncBundle()}),win.addEventListener("scroll",function(){FncBundle()}),win.addEventListener("resize",function(){FncBundle()});