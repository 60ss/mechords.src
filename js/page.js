function BalanceMainList(){var e;emptyItem=$("#empty").self,640<=$(win).width?emptyItem||(e=$("article",mainList).all).length&&e.length%2==1&&((emptyItem=doc.createElement("li")).setAttribute("id","empty"),emptyItem.innerHTML="<aside></aside>",mainList.appendChild(emptyItem)):emptyItem&&mainList.removeChild(emptyItem)}function CreateList(e,t,s,i,l,r){var o=$("#item").self?"h4":"h3",a="คอร์ดเพลง "+t;s=s.replace(/http(s)*\:\/\/www\.mechords\.com/,"");var n="";if("object"==typeof l){var c=[t];/\s*[\(|\?]/.test(t)&&(c.push(t.split(/\s*[\(|\?]/)[0]),/\s*\(/.test(t)&&c.push(t.match(/\((.*)\)/)[1]));for(var d=0;d<l.length;d++){var h=l[d];-1===ignoreLabels.indexOf(h)&&-1===c.indexOf(h)&&(n+='<a href="/search/label/'+encodeURIComponent(h)+'">'+h+"</a>")}}else n+='<a href="'+s+'">'+l+"</a>";var f=r?'<span class="time">'+r+"</span>":"",m=CanUseStorage()&&0!=e?'<button class="btn-like"></button>':"",v="";return i.match(/vi(\_webp)*\/(.*)\/(0|default|maxresdefault)/)&&(v='class="-ytimg"'),'<article class="post-'+e+'"><a class="thumbnail" href="'+s+'"><img width="120" height="68" '+v+' src="'+(i=i.replace("/s72-c/","/s120/"))+'" alt="'+a+'" /></a><div class="details"><a class="title" href="'+s+'"><'+o+">"+t+"</"+o+'></a><div class="lbls">'+n+"</div></div>"+f+m+"</article>"}function BrowserIs(e){var t=navigator.userAgent,s=-1!=(t.indexOf("Opera")||t.indexOf("OPR"))?"opera":-1!=t.indexOf("Chrome")?"chrome":-1!=t.indexOf("Safari")?"safari":-1!=t.indexOf("Firefox")?"firefox":-1!=t.indexOf("MSIE")||1==!!doc.documentMode?"ie":void 0;return s===e}function CanUseWebP(){var e=doc.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))&&0==e.toDataURL("image/webp").indexOf("data:image/webp")}function CanUseSpeech(){return"SpeechRecognition"in window||"webkitSpeechRecognition"in window}function CanUseStorage(){var e="test";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}function AreYouReady(){return!!("querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach)}function Stope(e){(e=e||window.event).cancelBubble=!0,e.stopPropagation&&e.stopPropagation()}function Shuffler(e){if(e&&1<e.length){for(var t=e.length-1;0<t;t--){var s=Math.floor(Math.random()*(t+1)),i=e[t];e[t]=e[s],e[s]=i}return e}}function WriteScript(e){var t;scriptBox&&((t=document.createElement("script")).src=mechords+e,BrowserIs("ie")?document.body.appendChild(t):scriptBox.appendChild(t))}function ScrollbarWidth(){var e=doc.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",e.style.msOverflowStyle="scrollbar",body.appendChild(e);var t=doc.createElement("div");e.appendChild(t);var s=e.offsetWidth-t.offsetWidth;return e.parentNode.removeChild(e),s+"px"}function CopyToClipboard(e){var t;e&&extens&&((t=doc.createElement("textarea")).value=e,extens.appendChild(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),extens.removeChild(t))}function M01(){var e=win.location.search;return/[\?\&]m=1/.test(e)}function LoadTime(){var e=window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;e&&console.log("ระยะเวลาในการโหลดหน้าเว็บ "+e/1e3+" วินาที")}function ResetQ(){topScroll=$(win).scrollTop,win.scrollTo(0,0),qNotFound=!1,iQ=0,qIDs=[],qListA=[],qListB=[],qListC=[],lightBox||(lightBox=doc.createElement("div"),extens.appendChild(lightBox)),lightBox.scrollTo(0,0);var e=$("#mechords").top+$("#header").height+17;lightBox.style.paddingTop=e+"px",lightBox.innerHTML='<div class="wrapper"><ul class="post-list -wide -placeholder" onclick="Stope(event)">'+ListHolder(18)+"</ul><div>",lightBox.classList.remove("_none")}function ListHolder(e){var t="";for(i=0;i<e;i++)t+=liHolder;return t}function insertAfter(e,t){t.parentNode.insertBefore(e,t.nextSibling)}function Wasteful(){var e=$(".wasteful").all;if(e.length)for(var t=0;t<e.length;t++)e[t].parentNode.removeChild(e[t])}function ShortenLinkIn(){var e=$("a").all;if(e.length)for(var t=0;t<e.length;t++){var s=e[t].getAttribute("href");s&&e[t].setAttribute("href",s.replace(/http(s)*\:\/\/www\.mechords\.com/,""))}}function Reverse(e){for(var t=new Array,s=e.length-1;0<=s;s--)t.push(e[s]);return t}var win=window,doc=document,html=doc.documentElement,body=doc.body||doc.querySelector("body");function $(e,t){var e=e,s=void 0!==win.pageYOffset,i="CSS1Compat"===(doc.compatMode||""),l={all:0,self:0,width:0,height:0,top:0,left:0,topScroll:0,bottomScroll:0,leftScroll:0,rightScroll:0};if(e.self==window)return{width:win.innerWidth||body.clientWidth,height:win.innerHeight||body.clientHeight,scrollTop:s?win.pageYOffset:i?body.scrollTop:0,scrollLeft:s?win.pageXOffset:i?body.scrollLeft:0};if(e==document)return{width:window.innerWidth||body.clientWidth||html.clientWidth,height:window.innerHeight||body.clientHeight||html.clientHeight};if("string"==typeof e){if((e=t?t.querySelectorAll(e):document.querySelectorAll(e)).length){var r=e[0].getBoundingClientRect();return{all:e,self:e[0],width:e[0].innerWidth||e[0].clientWidth,height:e[0].innerHeight||e[0].clientHeight,top:e[0].offsetTop,left:e[0].offsetLeft,topScroll:r.top,bottomScroll:r.bottom,leftScroll:r.left,rightScroll:r.right}}return l}if(e){r=e.getBoundingClientRect();return{all:0,self:e,width:e.innerWidth||e.clientWidth,height:e.innerHeight||e.clientHeight,top:e.offsetTop,left:e.offsetLeft,topScroll:r.top,bottomScroll:r.bottom,leftScroll:r.left,rightScroll:r.right}}return l}function ResetThePage(){var e=0!==topScroll?topScroll:topStart;topScroll=0,win.scrollTo(0,e),header&&(header.classList.remove("_search-extended"),header.classList.remove("_none"),header.removeAttribute("style")),lightBox&&(lightBox.classList.add("_none"),lightBox.innerHTML="",lightBox.removeAttribute("style")),search_txt&&(search_txt.value=""),search_cls&&search_cls.classList.add("_none"),shareBox&&shareBox.classList.add("_none"),body&&0==$("#chord-scroll").self&&body.classList.remove("_disable-scroll")}var mechords="https://www.mechords.com",pageURL=win.location.href,searchLabel=(searchLabel=pageURL.match(/search\/label\/(.*)/))?"-/"+searchLabel[1].split("?")[0]:"",searchQuery=pageURL.match(/[\?\&]q=(.*)/);searchQuery=!!(searchQuery=!!searchQuery&&searchQuery[1].split("&")[0])&&decodeURI(searchQuery);var ignoreLabels=["คอร์ดเพลง","recently","app-trending","app-recently","trending","สตริง","เพื่อชีวิต","ลูกกรุง","ลูกทุ่ง","ลูกทุ่งเพื่อชีวิต","หมอลำ","อีสาน","ใต้","คำเมือง","ลาว","สากล","เพลงคู่","Cover","คนโสด","เพลงจีบ","ชิลๆ","อินเลิฟ","อกหัก","เหงา","เศร้า","คิดถึง","ฤดูร้อน","ฤดูฝน","ฤดูหนาว","ปีใหม่","วันพ่อ","วันแม่","new","shorten-data","visiting-data","0.0","โควิด-19","เร็กเก้/สกา","อินดี้โฟล์ก","แร็พ","ปลดแอก"],XL=1035.98<$(doc).width,fullScreen=1279.98<$(doc).width&&719.98<$(doc).height,scriptBox=$(".script-box").self,header=$("#header").self,footer=$("#footer").self,theTitle=$("#header h1").self,brand=$("#header .brand").self,searchBox=$("#header .search-box").self,search_txt=$(".search-box>.-txt").self,search_cls=$(".search-box>.-clear").self,search_btn=$(".search-box>.-submit").self,search_mic=$(".search-box>.-speech").self,lightBox=$("#extensions .light-box").self,alertBox=$("#extensions .alert-box").self,extens=$("#extensions").self,mainList=$("#main-list").self,mostList=$("#most-list").self,mostList1=$("#most-list-1").self,mostList2=$("#most-list-2").self,similarList=$("#similar .post-list").self,emptyItem=$("#empty").self,postItem=$("#post-item").self,itemTitle=$("#post-item header h2").self,navigation=$("#navigation").self,bottomSpace=200,chordTb=(chordTb=$(".chord-tb").self)||$(".chords-tb").self,btnFav=$("#category .btn-fav").self,favRes=$("#extensions .favorite-res").self;function ChordTb(){chordTb=(chordTb=$(".chord-tb").self)||$(".chords-tb").self}var fixAutoHeightInterval,shareBox=$(".share-box").self,keySelector=$(".select.-key>select").self,defaultSelectIndex=0,btn_share=$(".btn.-share").self,btn_switch=$(".btn.-switch").self,btn_lightbox=$(".btn.-lightbox").self,btn_like=$(".btn.-like").self,chk_gc=$(".chk.-gc > input").self,chk_uc=$(".chk.-uc > input").self,chk_simplify=$(".chk.-simplify > input").self,chk_cr=$(".chk.-cr > input").self,frm_l=$(".chk.-l > input").self,frm_m=$(".chk.-m > input").self,frm_e=$(".chk.-e > input").self,accordion=$(".accordion").self,a_pr=$(".accordion>.-pr").self,a_ps=$(".accordion>.-ps").self,a_gc=$(".accordion>.-gc").self,a_uc=$(".accordion>.-uc").self,a_cr=$(".accordion>.-cr").self,fixAutoHeightTime=0,liHolder="<li class='-holdlist'><div><div></div><div><div></div><div></div></div></div></li>",iQ=0,qByTitle=!1,qNotFound=!1,qListA=[],qListB=[],qListC=[],qIDs=[],iO="IntersectionObserver"in window,topStart=$(win).scrollTop,topScroll=0,submitStarted=!1,submitSeconded=!1;function HeaderSticky(e){search_txt.value=e,search_cls.classList.remove("_none"),header.classList.add("_search-extended"),header.style.cssText="position: relative; z-index: 100; margin-right:"+ScrollbarWidth(),body.classList.add("_disable-scroll")}function RandomReq(){topStart=$(win).scrollTop;var e=Math.floor(Math.random()*(totalPost-150))+1;HeaderSticky("สุ่มคอร์ดเพลง"),WriteScript("/feeds/posts/default/?alt=json-in-script&start-index="+e+"&max-results=150&callback=RandomRes")}!function(e){var t,s,i;e&&(!BrowserIs("ie")||(t=e.childNodes[0])&&(i="https://src.mechords.com/img/",(s=doc.createElement("div")).innerHTML='<div class="wrapper alert">คุณกำลังใช้เว็บบราวเซอร์ที่ล้าสมัย เพื่อการใช้งานเว็บไซต์อย่างเต็มประสิทธิภาพ ขอแนะนำให้ใช้หนึ่งในเบราว์เซอร์ฟรีที่ทันสมัยเหล่านี้แทนเถิด<br/><ul><li><a href="https://www.google.com/chrome/browser/desktop/" rel="nofollow" target="_blank"><img src="'+i+'chrome.png"/></a></li><li><a href="https://opera.com/" rel="nofollow" target="_blank"><img src="'+i+'opera.png"/></a></li><li><a href="https://www.microsoftedgeinsider.com/" rel="nofollow" target="_blank"><img src="'+i+'edge.png"/></a></li><li><a href="https://www.mozilla.com/firefox/" rel="nofollow" target="_blank"><img src="'+i+'firefox.png"/></a></li></ul></div><br/>',e.insertBefore(s,t)))}($("#billboard").self),function(l){var r,o,a,e;l&&((r=l.getAttribute("data-dropdown"))&&(o=doc.createElement("li"),(a=$(".btn-down",l).self)&&(a.classList.remove("_none"),a.addEventListener("click",function(e){e.preventDefault();var t=$(".-dropdown",l).self;if(!t){(t=doc.createElement("ul")).setAttribute("class"," -dropdown"),r=r.split("|");for(var s=0;s<r.length;s++){var i=r[s];t.innerHTML+='<li><a href="/search/label/'+encodeURIComponent(i)+'">'+i.replace(/อารมณ์|เพลง|เทศกาล/g,"")+"</a></li>"}o.innerHTML='<a class="_i" href="#" ><svg style="margin:4px auto;"><path d="M18 15l-6-6-6 6h12z"/></svg></a>',o.setAttribute("class","btn-up"),t.appendChild(o),l.appendChild(t)}this.classList.add("_none"),t.classList.remove("_none"),o&&o.addEventListener("click",function(e){e.preventDefault(),a.classList.remove("_none"),t.classList.add("_none")})}))),(e=$(".btn-fav a",l).self)&&e.addEventListener("click",function(e){e.preventDefault()}))}($("#category").self),function(){function s(){""!==search_txt.value?"คอร์ดเพลงที่ถูกใจ"==search_txt.value?FavoriteRes():"สุ่มคอร์ดเพลง"==search_txt.value?(ResetQ(),RandomReq()):searchQuery?gcseReq():(ResetQ(),SearchReq(search_txt.value),header.classList.add("_search-extended")):(header.classList.add("_search-extended"),search_txt.focus())}var i,e;AreYouReady()&&searchBox&&header&&search_txt&&search_cls&&search_btn&&search_mic&&extens&&(search_txt.addEventListener("focus",function(){header.classList.add("_search-extended")}),search_txt.addEventListener("keyup",function(e){27==(e.which||e.keycode)&&ResetThePage(),""!==this.value?search_cls.classList.remove("_none"):ResetThePage()}),search_cls.addEventListener("click",function(){ResetThePage(),search_txt.focus()}),searchBox.addEventListener("click",function(e){Stope(e)}),searchBox.addEventListener("submit",function(e){e.preventDefault(),submitSeconded=submitStarted=!1,s()}),CanUseSpeech()&&(search_mic.classList.remove("_none"),(i=new webkitSpeechRecognition).continuous=!1,i.interimResults=!1,i.lang="th-TH",search_mic.addEventListener("click",function(){search_txt.value="",search_mic.classList.add("-active"),i.start(),i.onresult=function(e){var t=e.results[0][0].transcript;search_txt.value=t,i.stop(),s()},i.onspeechend=function(){i.stop(),search_mic.classList.remove("-active")},i.onerror=function(){i.stop(),search_mic.classList.remove("-active")}})),(e=$("#header .rnd.-q").self)&&e.addEventListener("click",function(e){Stope(e),ResetQ(),header.classList.add("_search-extended"),RandomReq()}))}(),WriteScript("/feeds/posts/summary/?alt=json-in-script&callback=TotalRes&max-results=1");var totalPost=5e3;function TotalRes(e){e.feed&&e.feed.entry&&(totalPost=parseInt(e.feed.openSearch$totalResults.$t))}var lightList=$(".post-list",lightBox).self;function RandomRes(e){if(lightList=$(".post-list>li",lightBox).all,e.feed&&e.feed.entry){var t=e.feed.entry;if(t.length)for(var s=18<(t=18<t.length?Shuffler(t):t).length?18:t.length,i=0;i<s;i++){for(var l=t[i],r=l.id.$t.split(".post-")[1],o=l.title.$t,a="",n=l.link,c=0;c<n.length;c++)"alternate"==n[c].rel&&(a=n[c].href);for(var d=l.content.$t.match(/src\s*=\s*"(.+?)"/),h=((d=d&&d[1]?d[1].replace("0.jpg","default.jpg"):"https://src.mechords.com/img/no-img.gif").indexOf("ytimg.com"),[]),f=0;f<l.category.length;f++)h.push(l.category[f].term);var m="",v=l.published.$t;v&&(v=v.split("T")[0].split("-"))[1]&&v[2]&&(m=v[2]+"/"+parseInt(v[1])+"/",m+=(parseInt(v[0])+543).toString().substr(2)),lightList&&lightList[i]&&(lightList[i].classList.remove("-holdlist"),lightList[i].innerHTML=CreateList(r,o,a,d,h,m))}RemoveHoldList()}}function SearchReq(e){topScroll=$(win).scrollTop,win.scrollTo(0,0),HeaderSticky(e.replace("rnd:",""));var t=18;-1<e.indexOf("rnd:")?(e="&callback=RandomRes&q="+e.split("rnd:")[1],t=150):e="&callback=SearchRes"+(submitStarted?"&q="+e:"&q=title:"+e),WriteScript("/feeds/posts/default/?alt=json-in-script&start-index=1&max-results="+t+e)}function SearchRes(e){if(submitStarted=!submitStarted,lightList=$(".post-list>li",lightBox).all,e.feed&&e.feed.entry){var t=e.feed.entry;if(t.length)for(var s=17<t.length?17:t.length,i=0;i<s;i++){var l=t[i],r=l.id.$t.split(".post-")[1];if(-1==qIDs.indexOf(r)){qIDs.push(r);for(var o=l.title.$t,a="",n=l.link,c=0;c<n.length;c++)"alternate"==n[c].rel&&(a=n[c].href);for(var d=l.content.$t.match(/src\s*=\s*"(.+?)"/),h=((d=d&&d[1]?d[1].replace("0.jpg","default.jpg"):"https://src.mechords.com/img/no-img.gif").indexOf("ytimg.com"),[]),f=0;f<l.category.length;f++)h.push(l.category[f].term);var m="",v=l.published.$t;v&&(v=v.split("T")[0].split("-"))[1]&&v[2]&&(m=v[2]+"/"+parseInt(v[1])+"/",m+=(parseInt(v[0])+543).toString().substr(2));var p=!1;-1<h.indexOf("ปลดแอก")?p="liberty":-1<h.indexOf("recently")?p="recently":-1<h.indexOf("trending")&&(p="trending"),o===search_txt.value?qListA.push([p,CreateList(r,o,a,d,h,m)]):-1<o.indexOf(search_txt.value)?qListB.push([p,CreateList(r,o,a,d,h,m)]):qListC.push([p,CreateList(r,o,a,d,h,m)])}}if(t.length<17&&0==submitSeconded)submitSeconded=!0,SearchReq(search_txt.value);else for(var u=qListA.concat(qListB,qListC),g=u.length>s?s:u.length,b=0;b<g;b++){var L=u[b][0],S=u[b][1];lightList[b]&&(lightList[b].innerHTML=S,lightList[b].classList.remove("-holdlist"),L&&lightList[b].classList.add(L),b==g-1&&(lightList[g].innerHTML=CreateList(0,"ดูผลการค้นหาแบบละเอียด..","/search?q="+search_txt.value,"https://src.mechords.com/img/G.jpg",search_txt.value),lightList[g].classList.remove("-holdlist"),RemoveHoldList()))}}else submitSeconded||(submitSeconded=!0,SearchReq(search_txt.value))}function SearchReqRnd(e){submitSeconded=submitStarted=!1,ResetQ(),SearchReq("rnd:"+e)}function RemoveHoldList(){for(var e=$(".-holdlist").all,t=0;t<e.length;t++)e[t].parentNode.removeChild(e[t])}var favStorage,oldFav=localStorage.getItem("favorites");if(oldFav&&(oldFav=JSON.parse(oldFav),Object.keys(oldFav).length)){var items=Object.keys(oldFav);if(items.length){for(var li="",i=0;i<items.length;i++){var id=items[i],data=oldFav[id],title=data[1],link=mechords+"/"+data[0]+".html";link=(link=data[0].match(/(\d{4}\/\d{2}\/[^.]*)/))?mechords+"/"+link[1]+".html":"";var img="https://i.ytimg.com/vi/"+data[3]+"/default.jpg",lbls=data[2];"object"==typeof lbls&&(lbls=lbls.join("|")),FavFind(id=id.substr(1))||FavSet("add",id,link,title,lbls,img)}localStorage.removeItem("favorites"),BtnFav(),Favorite()}}function BtnFav(){var e;CanUseStorage()&&btnFav&&(favStorage=localStorage.getItem("mechords_favorite"),(e=$("a",btnFav).self)&&(favStorage&&Object.keys(JSON.parse(favStorage)).length?e.classList.add("-active"):e.classList.remove("-active"),e.removeEventListener("click",FavoriteRes),e.addEventListener("click",FavoriteRes)))}function FavFind(e){return!!(favStorage=localStorage.getItem("mechords_favorite"))&&!!(favStorage=JSON.parse(favStorage))[e]}function FavListener(e){Stope(e=e||window.event);var t=e.target.parentNode,s=t.className.match(/post\-(\d+)/);if(s=!!s&&s[1]){if(FavFind(s))FavSet("del",s);else{var i=$(".thumbnail",t).self,l=$(".title",t).self,r=l.getAttribute("href"),o=l.innerText,a=(a=$("img",i).self).getAttribute("src"),n=$(".lbls a",t).all;if(n.length){for(var c=[],d=0;d<n.length;d++)c.push(n[d].innerHTML);c=c.join("|")}r&&o&&c&&a&&FavSet("add",s,r,o,c,a)}BtnFav()}}function Favorite(){if(CanUseStorage()){favStorage=localStorage.getItem("mechords_favorite");var e=$(".post-list .btn-like").all;if(e.length)for(var t=startFav=0;t<e.length;t++){var s=e[t];s.classList.remove("_none");var i=s.parentNode.className.match(/post\-(\d+)/);(i=i?i[1]:0)&&FavFind(i)&&s.classList.add("-active"),s.removeEventListener("click",FavListener),s.addEventListener("click",FavListener)}}}function FavSet(e,t,s,i,l,r){var o,a=$(".post-"+t).all;if(a.length)for(var n=0;n<a.length;n++){var c=$(".btn-like,.btn.-like",a[n]).all;if(c.length)for(var d=0;d<c.length;d++)"add"==e?c[d].classList.add("-active"):"del"==e&&c[d].classList.remove("-active")}favStorage=localStorage.getItem("mechords_favorite"),t&&(o=(o=JSON.parse(favStorage))||{},"add"==e?s&&i&&l&&r&&(o[t]=[s,i,l,r]):"del"==e&&delete o[t],localStorage.setItem("mechords_favorite",JSON.stringify(o)))}function FavoriteRes(e){if((e=e||window.event).preventDefault(),Stope(e),t=localStorage.getItem("mechords_favorite"),win.scrollTo(0,0),t&&Object.keys(JSON.parse(t)).length){var t=JSON.parse(t),s=Object.keys(t);if(s.length){for(var i="",l=s.length-1;-1<l;l--){var r=s[l],o=t[r];i+="<li>"+CreateList(r,o[1],o[0],o[3],o[2].split("|"))+"</li>"}body.classList.add("_disable-scroll"),header.style.cssText="position: relative; z-index: 100; margin-right:"+ScrollbarWidth(),search_txt.value="คอร์ดเพลงที่ถูกใจ",search_cls.classList.remove("_none"),lightBox.classList.remove("_none"),lightBox.innerHTML='<div class="wrapper"><ul class="post-list -wide">'+i+"</ul></div>";var a=$(".post-list",lightBox).self;a&&(a.removeEventListener("click",Stope),a.addEventListener("click",Stope)),Favorite(),search_txt.focus()}}}function FavItem(e,t){if(e&&t){if(FavFind(e))FavSet("del",e),t.classList.remove("-active");else{var s=pageURL.split(/[\#\?\&]/)[0],i=$("h2",postItem).self.innerHTML,l=$(".item-tags a",postItem).all,r="";if(l.length)for(var o=0;o<l.length;o++)r+=(0!=o?"|":"")+l[o].innerText;var a=$("img",postItem).self,n=$(".vdo",postItem).self,c=$("iframe",n).self;FavSet("add",e,s,i,r,a=a?a.getAttribute("src"):c&&(a=!!(a=c.src.match(/embed\/(.*)/))&&a[1].split(/\?/)[0])?"https://i.ytimg.com/vi/"+a+"/default.jpg":""),t.classList.add("-active")}BtnFav()}}function ScrollPos(){var e,t,s,i;me_scroll=$(".me-scroll"),me_scroll.self&&(e=$("#body").left,t=$("#body").width+2*me_scroll.width,s=$("#body").width,i=$(win).height/2-me_scroll.height/2,me_scroll.self.style.top=i+"px",$(win).width>t+36?(me_scroll.self.style.right="",me_scroll.self.style.left=e+s+18+"px"):(me_scroll.self.style.left="",me_scroll.self.style.right=0))}BtnFav(),function(l){if(l){var e=l.querySelector("select"),r=l.querySelectorAll("ol>li"),t=doc.getElementById("strum");function o(e){t||((t=doc.createElement("audio")).type="audio/mpeg",t.id="strum",t.loop=!0,t.hidden=!0,extens.appendChild(t)),a(),e=e.replace("#","s"),t.src="https://src.mechords.com/audios/acoustic-guitar-tuning/"+e+".mp3",t.play()}e.onchange=function(){a();for(var e=(this.value||this.options[this.selectedIndex].value).split("|"),t=0;t<e.length;t++)r[t].innerHTML=e[t]};for(var s=0;s<r.length;s++)r[s].addEventListener("click",function(){var e=this.innerText;e?(o(e),this.classList.add("strumming")):a()});function a(){if(t&&(t.pause(),t.currentTime=0),r)for(var e=0;e<r.length;e++)r[e].classList.remove("strumming")}doc.addEventListener("keyup",function(e){var t,s,i;!l.querySelector(".strumming")||null!=(t={96:"stop",97:5,98:4,99:3,100:2,101:1,102:0}[e.which||e.keyCode])&&("stop"!=t&&(i=(s=r[t]).innerText)?(o(i),s.classList.add("strumming")):a())})}}($("#guitar-tuning").self);var btn_scroll=$(".me-scroll button").all;if(btn_scroll.length){for(var g_scroll=$(".me-scroll>._global").self,c_scholl=$(".me-scroll>._chord").self,i=0;i<btn_scroll.length;i++)btn_scroll[i].addEventListener("click",function(e){Stope(e);var t,s=this.value;"up"==s?SmoothScroll(0):"down"==s?(ChordTb(),chordTb?g_scroll&&c_scholl&&(g_scroll.classList.add("_none"),c_scholl.classList.remove("_none"),(t=$("button",c_scholl).self)&&(CloseTooltip(),ChordScrollStart(t.value),ActiveScrollBtn(t)),ScrollPos()):SmoothScroll($("body").height+bottomSpace-$(win).height)):"stop"==s?(g_scroll.classList.remove("_none"),c_scholl.classList.add("_none"),ChordScrollStop(),ScrollPos()):(ChordScrollStart(s),ActiveScrollBtn(this))});var svg_down='<svg><path d="M16.59,10.942L12,15.522l-4.59-4.58L6,12.353l6,6l6-6L16.59,10.942z" /><path d="M16.59,5.647L12,10.228l-4.59-4.58L6,7.058l6,6l6-6L16.59,5.647z" /></svg>';function ActiveScrollBtn(e){var t=$(".me-scroll>._chord>button").all;if(t.length)for(var s=0;s<t.length;s++){var i=t[s];i.classList.remove("-active"),-1==i.value.indexOf("stop")&&(i.innerHTML="")}e&&"stop"!=e.value&&(e.innerHTML=svg_down,e.classList.add("-active"))}function SmoothScroll(e){var i=window.pageYOffset,l=e-i,r=1e3,o=null;window.requestAnimationFrame(function e(t){o=o||t;var s=t-o;window.scrollTo(0,EaseInOutCubic(s,i,l,r));s<r&&window.requestAnimationFrame(e)})}function EaseInOutCubic(e,t,s,i){return(e/=i/2)<1?s/2*e*e*e+t:s/2*((e-=2)*e*e+2)+t}}function Alert(e){var t;alertBox&&e&&(t='<div class="-inner"><pre>'+e+'</pre><button type="button" onclick="Xlert(event);">ปิด</button></div>',alertBox.innerHTML=t,alertBox.classList.remove("_none"))}function Xlert(e){Stope(e),alertBox&&(alertBox.innerHTML="",alertBox.classList.add("_none"))}var fbComment=!1;function FBPlugin(){var e;$("#fb-comments").self&&!fbComment&&(fbComment=!0,(e=doc.createElement("script")).async=!0,e.defer=!0,e.src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v8.0&appId=1458156584324917&autoLogAppEvents=1",body.appendChild(e))}function DeepLinkAndroid(){var e,t,s,i;"undefined"!=typeof Android&&(i=e="file:///android_asset/index.html#home",t=html.dataset.page,/label\:/.test(t)?(s=t.split(":")[1],i="file:///android_asset/page.html#"+(s=/recently|trending/.test(s)?""+s:"label-"+s)+"&back=home"):/search\:/.test(t)?i="file:///android_asset/index.html#search-"+t.split(":")[1]:"item"==t?(i="file:///android_asset/item.html?id="+postItem.className.split("post-")[1]+"&title="+$("h2",postItem).self.innerText+"&back=home",i+="&back=home"):i="index"==t&&e,i&&Android.LoadUrl(i))}function FncBundle(){Wasteful(),ScrollPos(),FBPlugin()}doc.addEventListener("click",function(){ResetThePage()}),doc.addEventListener("DOMContentLoaded",function(e){DeepLinkAndroid(),FncBundle()}),win.addEventListener("scroll",function(){FncBundle()}),win.addEventListener("resize",function(){FncBundle()});