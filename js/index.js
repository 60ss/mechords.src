function BalanceMainList(){var e;emptyItem=$("#empty").self,640<=$(win).width?emptyItem||(e=$("article",mainList).all).length&&e.length%2==1&&((emptyItem=doc.createElement("li")).setAttribute("id","empty"),emptyItem.innerHTML="<aside></aside>",mainList.appendChild(emptyItem)):emptyItem&&mainList.removeChild(emptyItem)}function CreateList(e,t,i,s,r,l){var d=$("#item").self?"h4":"h3",h="คอร์ดเพลง "+t,a=(i=i.replace(/http(s)*\:\/\/www\.mechords\.com/,""),"");if("object"==typeof r){var n=[t];/\s*[\(|\?]/.test(t)&&(n.push(t.split(/\s*[\(|\?]/)[0]),/\s*\(/.test(t)&&n.push(t.match(/\((.*)\)/)[1]));for(var o=0;o<r.length;o++){var c=r[o];-1===ignoreLabels.indexOf(c)&&-1===n.indexOf(c)&&(a+='<a href="/search/label/'+encodeURIComponent(c)+'">'+c+"</a>")}}else a+='<a href="'+i+'">'+r+"</a>";var l=l?'<span class="time">'+l+"</span>":"",f=CanUseStorage()&&0!=e?'<button class="btn-like"></button>':"",m="";return'<article class="post-'+e+'"><a class="thumbnail" href="'+i+'"><img width="120" height="68" '+(m=s.match(/vi(\_webp)*\/(.*)\/(0|default|maxresdefault)/)?'class="-ytimg"':m)+' src="'+(s=s.replace("/s72-c/","/s120/"))+'" alt="'+h+'" /></a><div class="details"><a class="title" href="'+i+'"><'+d+">"+t+"</"+d+'></a><div class="lbls">'+a+"</div></div>"+l+f+"</article>"}function BrowserIs(e){var t=navigator.userAgent,t=-1!=(t.indexOf("Opera")||t.indexOf("OPR"))?"opera":-1!=t.indexOf("Chrome")?"chrome":-1!=t.indexOf("Safari")?"safari":-1!=t.indexOf("Firefox")?"firefox":-1!=t.indexOf("MSIE")||1==!!doc.documentMode?"ie":void 0;return t===e}function CanUseWebP(){var e=doc.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))&&0==e.toDataURL("image/webp").indexOf("data:image/webp")}function CanUseSpeech(){return"SpeechRecognition"in window||"webkitSpeechRecognition"in window}function CanUseStorage(){var e="test";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}function AreYouReady(){return!!("querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach)}function Stope(e){(e=e||window.event).cancelBubble=!0,e.stopPropagation&&e.stopPropagation()}function Shuffler(e){if(e&&1<e.length){for(var t=e.length-1;0<t;t--){var i=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[i],e[i]=s}return e}}function WriteScript(e){var t;scriptBox&&((t=document.createElement("script")).src=mechords+e,(BrowserIs("ie")?document.body:scriptBox).appendChild(t))}function ScrollbarWidth(){var e=doc.createElement("div"),t=(e.style.visibility="hidden",e.style.overflow="scroll",e.style.msOverflowStyle="scrollbar",body.appendChild(e),doc.createElement("div")),t=(e.appendChild(t),e.offsetWidth-t.offsetWidth);return e.parentNode.removeChild(e),t}function CopyToClipboard(e){var t;e&&extens&&((t=doc.createElement("textarea")).value=e,extens.appendChild(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),extens.removeChild(t))}function M01(){var e=win.location.search;return/[\?\&]m=1/.test(e)}function LoadTime(){var e=window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;e&&console.log("ระยะเวลาในการโหลดหน้าเว็บ "+e/1e3+" วินาที")}function ResetQ(){topScroll=$(win).scrollTop,win.scrollTo(0,0),qNotFound=!1,iQ=0,qIDs=[],qListA=[],qListB=[],qListC=[],lightBox||(lightBox=doc.createElement("div"),extens.appendChild(lightBox)),lightBox.scrollTo(0,0);var e=$("#mechords").top+$("#header").height+16;lightBox.style.marginTop=e+"px",lightBox.innerHTML='<div class="wrapper"><ul class="post-list -wide -placeholder" onclick="Stope(event)">'+ListHolder(18)+"</ul><div>",lightBox.classList.remove("_none")}function ListHolder(e){var t="";for(i=0;i<e;i++)t+=liHolder;return t}function insertAfter(e,t){t.parentNode.insertBefore(e,t.nextSibling)}function Wasteful(){var e=$(".wasteful").all;if(e.length)for(var t=0;t<e.length;t++)e[t].parentNode.removeChild(e[t])}function ShortenLinkIn(){var e=$("a").all;if(e.length)for(var t=0;t<e.length;t++){var i=e[t].getAttribute("href");i&&e[t].setAttribute("href",i.replace(/http(s)*\:\/\/www\.mechords\.com/,""))}}function Reverse(e){for(var t=new Array,i=e.length-1;0<=i;i--)t.push(e[i]);return t}var win=window,doc=document,html=doc.documentElement,body=doc.body||doc.querySelector("body");function $(e,t){var i,s=void 0!==win.pageYOffset,r="CSS1Compat"===(doc.compatMode||""),l={all:0,self:0,width:0,height:0,top:0,left:0,topScroll:0,bottomScroll:0,leftScroll:0,rightScroll:0};return e.self==window?{width:win.innerWidth||body.clientWidth,height:win.innerHeight||body.clientHeight,scrollTop:s?win.pageYOffset:r?body.scrollTop:0,scrollLeft:s?win.pageXOffset:r?body.scrollLeft:0}:e==document?{width:window.innerWidth||body.clientWidth||html.clientWidth,height:window.innerHeight||body.clientHeight||html.clientHeight}:"string"!=typeof e?e?(i=e.getBoundingClientRect(),{all:0,self:e,width:e.innerWidth||e.clientWidth,height:e.innerHeight||e.clientHeight,top:e.offsetTop,left:e.offsetLeft,topScroll:i.top,bottomScroll:i.bottom,leftScroll:i.left,rightScroll:i.right}):l:(e=(t||document).querySelectorAll(e)).length?(i=e[0].getBoundingClientRect(),{all:e,self:e[0],width:e[0].innerWidth||e[0].clientWidth,height:e[0].innerHeight||e[0].clientHeight,top:e[0].offsetTop,left:e[0].offsetLeft,topScroll:i.top,bottomScroll:i.bottom,leftScroll:i.left,rightScroll:i.right}):l}function ResetThePage(){var e=0!==topScroll?topScroll:topStart;topScroll=0,win.scrollTo(0,e),header&&(header.classList.remove("_search-extended"),header.classList.remove("_none"),header.removeAttribute("style")),lightBox&&(lightBox.classList.add("_none"),lightBox.innerHTML="",lightBox.removeAttribute("style")),search_txt&&(search_txt.value=""),search_cls&&search_cls.classList.add("_none"),shareBox&&shareBox.classList.add("_none"),body&&0==$("#chord-scroll").self&&body.classList.remove("_disable-scroll")}var mechords="https://www.mechords.com",pageURL=win.location.href,searchLabel=(searchLabel=pageURL.match(/search\/label\/(.*)/))?"-/"+searchLabel[1].split("?")[0]:"",searchQuery=pageURL.match(/[\?\&]q=(.*)/),ignoreLabels=(searchQuery=!!(searchQuery=!!searchQuery&&searchQuery[1].split("&")[0])&&decodeURI(searchQuery),["คอร์ดเพลง","recently","app-trending","app-recently","trending","สตริง","เพื่อชีวิต","ลูกกรุง","ลูกทุ่ง","ลูกทุ่งเพื่อชีวิต","หมอลำ","อีสาน","ใต้","คำเมือง","ลาว","สากล","เพลงคู่","Cover","คนโสด","เพลงจีบ","ชิลๆ","อินเลิฟ","อกหัก","เหงา","เศร้า","คิดถึง","ฤดูร้อน","ฤดูฝน","ฤดูหนาว","ปีใหม่","วันพ่อ","วันแม่","new","shorten-data","visiting-data","0.0","โควิด-19","เร็กเก้/สกา","อินดี้โฟล์ก","แร็พ","ปลดแอก"]),XL=1035.98<$(doc).width,fullScreen=1279.98<$(doc).width&&719.98<$(doc).height,scriptBox=$(".script-box").self,header=$("#header").self,footer=$("#footer").self,theTitle=$("#header h1").self,brand=$("#header .brand").self,searchBox=$("#header .search-box").self,search_txt=$(".search-box>.-txt").self,search_cls=$(".search-box>.-clear").self,search_btn=$(".search-box>.-submit").self,search_mic=$(".search-box>.-speech").self,lightBox=$("#extensions .light-box").self,alertBox=$("#extensions .alert-box").self,extens=$("#extensions").self,mainList=$("#main-list").self,mostList=$("#most-list").self,mostList1=$("#most-list-1").self,mostList2=$("#most-list-2").self,similarList=$("#similar .post-list").self,emptyItem=$("#empty").self,postItem=$("#post-item").self,itemTitle=$("#post-item header h2").self,navigation=$("#navigation").self,bottomSpace=200,chordTb=(chordTb=$(".chord-tb").self)||$(".chords-tb").self,btnFav=$("#category .btn-fav").self,favRes=$("#extensions .favorite-res").self;function ChordTb(){chordTb=(chordTb=$(".chord-tb").self)||$(".chords-tb").self}var fixAutoHeightInterval,shareBox=$(".share-box").self,keySelector=$(".select.-key>select").self,defaultSelectIndex=0,btn_share=$(".btn.-share").self,btn_switch=$(".btn.-switch").self,btn_lightbox=$(".btn.-lightbox").self,btn_like=$(".btn.-like").self,chk_gc=$(".chk.-gc > input").self,chk_uc=$(".chk.-uc > input").self,chk_simplify=$(".chk.-simplify > input").self,chk_cr=$(".chk.-cr > input").self,frm_l=$(".chk.-l > input").self,frm_m=$(".chk.-m > input").self,frm_e=$(".chk.-e > input").self,accordion=$(".accordion").self,a_pr=$(".accordion>.-pr").self,a_ps=$(".accordion>.-ps").self,a_gc=$(".accordion>.-gc").self,a_uc=$(".accordion>.-uc").self,a_cr=$(".accordion>.-cr").self,fixAutoHeightTime=0,liHolder="<li class='-holdlist'><div><div></div><div><div></div><div></div></div></div></li>",iQ=0,qByTitle=!1,qNotFound=!1,qListA=[],qListB=[],qListC=[],qIDs=[],iO="IntersectionObserver"in window,topStart=$(win).scrollTop,topScroll=0,submitStarted=!1,submitSeconded=!1,recently_s=(!function(e){var t,i,s;e&&(!BrowserIs("ie")||(t=e.childNodes[0])&&((i=doc.createElement("div")).innerHTML='<div class="wrapper alert">คุณกำลังใช้เว็บบราวเซอร์ที่ล้าสมัย เพื่อการใช้งานเว็บไซต์อย่างเต็มประสิทธิภาพ ขอแนะนำให้ใช้หนึ่งในเบราว์เซอร์ฟรีที่ทันสมัยเหล่านี้แทนเถิด<br/><ul><li><a href="https://www.google.com/chrome/browser/desktop/" rel="nofollow" target="_blank"><img src="'+(s="https://src.mechords.com/img/")+'chrome.png"/></a></li><li><a href="https://opera.com/" rel="nofollow" target="_blank"><img src="'+s+'opera.png"/></a></li><li><a href="https://www.microsoftedgeinsider.com/" rel="nofollow" target="_blank"><img src="'+s+'edge.png"/></a></li><li><a href="https://www.mozilla.com/firefox/" rel="nofollow" target="_blank"><img src="'+s+'firefox.png"/></a></li></ul></div><br/>',e.insertBefore(i,t)))}($("#billboard").self),function(r){var l,a,n,e;r&&((l=r.getAttribute("data-dropdown"))&&(a=doc.createElement("li"),(n=$(".btn-down",r).self)&&(n.classList.remove("_none"),n.addEventListener("click",function(e){e.preventDefault();var t=$(".-dropdown",r).self;if(!t){(t=doc.createElement("ul")).setAttribute("class"," -dropdown"),l=l.split("|");for(var i=0;i<l.length;i++){var s=l[i];t.innerHTML+='<li><a href="/search/label/'+encodeURIComponent(s)+'">'+s.replace(/อารมณ์|เพลง|เทศกาล/g,"")+"</a></li>"}a.innerHTML='<a class="_i" href="#" ><svg style="margin:4px auto;"><path d="M18 15l-6-6-6 6h12z"/></svg></a>',a.setAttribute("class","btn-up"),t.appendChild(a),r.appendChild(t)}this.classList.add("_none"),t.classList.remove("_none"),a&&a.addEventListener("click",function(e){e.preventDefault(),n.classList.remove("_none"),t.classList.add("_none")})}))),(e=$(".btn-fav a",r).self)&&e.addEventListener("click",function(e){e.preventDefault()}))}($("#category").self),function(){function t(){""!==search_txt.value?"คอร์ดเพลงที่ถูกใจ"==search_txt.value?FavoriteRes():"สุ่มคอร์ดเพลง"==search_txt.value?(ResetQ(),RandomReq()):searchQuery?gcseReq():(ResetQ(),SearchReq(search_txt.value),header.classList.add("_search-extended")):(header.classList.add("_search-extended"),search_txt.focus())}var i,e;AreYouReady()&&searchBox&&header&&search_txt&&search_cls&&search_btn&&search_mic&&extens&&(search_txt.addEventListener("focus",function(){header.classList.add("_search-extended")}),search_txt.addEventListener("keyup",function(e){27==(e.which||e.keycode)&&ResetThePage(),""!==this.value?search_cls.classList.remove("_none"):ResetThePage()}),search_cls.addEventListener("click",function(){ResetThePage(),search_txt.focus()}),searchBox.addEventListener("click",function(e){Stope(e)}),searchBox.addEventListener("submit",function(e){e.preventDefault(),submitSeconded=submitStarted=!1,t()}),CanUseSpeech()&&(search_mic.classList.remove("_none"),(i=new webkitSpeechRecognition).continuous=!1,i.interimResults=!1,i.lang="th-TH",search_mic.addEventListener("click",function(){search_txt.value="",search_mic.classList.add("-active"),i.start(),i.onresult=function(e){e=e.results[0][0].transcript;search_txt.value=e,i.stop(),t()},i.onspeechend=function(){i.stop(),search_mic.classList.remove("-active")},i.onerror=function(){i.stop(),search_mic.classList.remove("-active")}})),(e=$("#header .rnd.-q").self)&&e.addEventListener("click",function(e){Stope(e),ResetQ(),header.classList.add("_search-extended"),RandomReq()}))}(),!1);function RecentlyReq(){$("#recently").self&&(recently_s||WriteScript("/feeds/posts/default/-/recently?alt=json-in-script&max-results=18&callback=RecentlyRes"))}function RecentlyRes(e){if(e.feed&&e.feed.entry){var d=$("#recently li").all,t=e.feed.entry;if(t.length){recently_s=!0;for(var i=0;i<t.length;i++)for(var s=t[i],h=s.link,r=0;r<h.length;r++)if("alternate"===(a=h[r]).rel){for(var l,f=s.id.$t.split(".post-")[1],m=s.title.$t,a=a.href,n=s.content.$t.match(/\<img.*?src=[\'\"](.*?)[\'\"]/),v=(n?(l=(n=n[1]).match(/vi\/(.*)\/0|default|maxresdefault/))?0:n=n.replace("/s0/","/s120/"):n=(o=s.content.$t.match(/\<iframe.*?src=[\'\"](.*?)[\'\"]/))?(l=(n=o[1]).match(/embed\/(.*)(\/\?)*/))?"https://i.ytimg.com/vi/"+l[1]+"/default.jpg":"":"",CanUseWebP()&&(n=n.replace("/vi/","/vi_webp/").replace("0.jpg","default.webp")),[]),p=0;p<s.category.length;p++)v.push(s.category[p].term);var o="",c=s.published.$t;c&&(c=c.split("T")[0].split("-"))[1]&&c[2]&&(o=c[2]+"/"+parseInt(c[1])+"/",o+=(parseInt(c[0])+543).toString().substr(2)),d[i]&&(d[i].innerHTML=CreateList(f,m,a,n,v,o))}Favorite()}}scriptBox.innerHTML=""}function MoreList(){var e,t,i;BalanceMainList(),navigation&&!$(".-loadmore",navigation).self&&(e=$("article",mainList).all.length,t="/feeds/posts/default/"+searchLabel+"?alt=json-in-script&start-index="+(e=0===e?1:e+1)+"&max-results=1&callback=MoreBtn",i=doc.location.search,WriteScript(t=(i=!/updated-max=/.test(i))?t:"/feeds/posts/default/"+searchLabel+"?alt=json-in-script&start-index="+e+"&max-results=1&callback=NextBtn")),fixAutoHeightInterval||(fixAutoHeightTime=0,fixAutoHeightInterval=setInterval(FixAutoHeight,300))}function NextBtn(e){e.feed&&e.feed.entry||(e=$(".-next",navigation).self)&&navigation.removeChild(e),scriptBox.innerHTML=""}function MoreBtn(e){e.feed&&e.feed.entry?$(".-loadmore",navigation).self||((e=doc.createElement("a")).classList.add("-loadmore"),e.setAttribute("title","โหลดคอร์ดเพลงเพิ่มเติม"),e.setAttribute("href","javascript:void(0);"),e.setAttribute("onclick","MoreReq(this)"),e.innerHTML='<svg><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></svg><span>แสดงเพิ่มเติม</span>',navigation.insertBefore(e,navigation.childNodes[0])):(e=$(".-next",navigation).self)&&navigation.removeChild(e),scriptBox.innerHTML=""}function MoreReq(){fixAutoHeightInterval=null,navigation.innerHTML="<a href='#' class='_loading'><svg><circle cx='17' cy='17' r='15'/></svg></a>";var e=$("article",mainList).all,e=e?e.length:1,t=20;WriteScript("/feeds/posts/default/"+searchLabel+"?alt=json-in-script&start-index="+(e=1<e?e+1:e)+"&max-results="+(t=emptyItem?t+1:t)+"&callback=MoreRes")}function MoreRes(e){if(e.feed&&e.feed.entry){var t=e.feed.entry;if(t.length){for(var d="",i=0;i<t.length;i++){var s=t[i],r=s.link;if(r.length)for(var l=0;l<r.length;l++)if("alternate"===r[l].rel){for(var h,f=s.id.$t.split(".post-")[1],m=s.title.$t,v=r[l].href,a=s.content.$t.match(/\<img.*?src=[\'\"](.*?)[\'\"]/),p=(a=(a=a?a[1]:(o=s.content.$t.match(/\<iframe.*?src=[\'\"](.*?)[\'\"]/))&&(h=(a=o[1]).match(/embed\/(.*)(\/\?)*/))?"https://i.ytimg.com/vi/"+h[1]+"/0.jpg":"").replace("0.jpg","default.jpg").replace("/s72-c/","/s120/"),s.category),n=[],g=0;g<p.length;g++)n.push(p[g].term);var o="",c=s.published.$t,c=(c&&(c=c.split("T")[0].split("-"))[1]&&c[2]&&(o=c[2]+"/"+parseInt(c[1])+"/",o+=(parseInt(c[0])+543).toString().substr(2)),"");-1<n.indexOf("ปลดแอก")?c=' class="liberty"':-1<n.indexOf("recently")?c=' class="recently"':-1<n.indexOf("trending")&&(c=' class="trending"'),d+="<li"+c+">"+CreateList(f,m,v,a,n,o)+"</li>"}}setTimeout(function(){emptyItem&&mainList.removeChild(emptyItem),$("._loading",navigation).self&&navigation.removeChild($("._loading",navigation).self),mainList.innerHTML+=d,Favorite(),MoreList()},50)}}}function HeaderSticky(e){search_txt.value=e,search_cls.classList.remove("_none"),header.classList.add("_search-extended"),header.style.cssText="position: relative; z-index: 100; margin-right:"+ScrollbarWidth()+"px;",body.classList.add("_disable-scroll")}function RandomReq(){topStart=$(win).scrollTop;var e=Math.floor(Math.random()*(totalPost-150))+1;HeaderSticky("สุ่มคอร์ดเพลง"),WriteScript("/feeds/posts/default/?alt=json-in-script&start-index="+e+"&max-results=150&callback=RandomRes")}!function(e){function i(e){$("img",e).self;var t=$(".thumbnail",e).self,i=$(".title",e).self,s=i.getAttribute("href"),i=i.innerText,r=t.getAttribute("data-img");s&&i&&r&&(t.removeAttribute("data-img"),s="",r.match(/vi\/(.*)\/0|default|maxresdefault/)&&(s='class="-ytimg"'),r=r.replace("0.jpg","default.jpg").replace("/s72-c/","/s120/"),t.innerHTML="<img "+s+' src="'+r+'" alt="คอร์ดเพลง '+i+'"/>',(t=$(".time",e).self)&&(s=t.innerHTML.replace(/\./g,"/"),t.innerHTML=s),Favorite(),MoreList())}if(iO)for(var t=new IntersectionObserver(function(e,t){e.forEach(function(e){e.isIntersecting&&(i(e.target),t.unobserve(e.target))})},{rootMargin:"0px 0px"}),s=0;s<e.length;s++)t.observe(e[s]);else for(s=0;s<e.length;s++)i(e[s])}($("article",mainList).all),WriteScript("/feeds/posts/summary/?alt=json-in-script&callback=TotalRes&max-results=1");var totalPost=5e3;function TotalRes(e){e.feed&&e.feed.entry&&(totalPost=parseInt(e.feed.openSearch$totalResults.$t))}var lightList=$(".post-list",lightBox).self;function RandomRes(e){if(lightList=$(".post-list>li",lightBox).all,e.feed&&e.feed.entry){var t=e.feed.entry;if(t.length)for(var d=18<(t=18<t.length?Shuffler(t):t).length?18:t.length,i=0;i<d;i++){for(var s=t[i],h=s.id.$t.split(".post-")[1],f=s.title.$t,m="",r=s.link,l=0;l<r.length;l++)"alternate"==r[l].rel&&(m=r[l].href);for(var a=s.content.$t.match(/src\s*=\s*"(.+?)"/),v=((a=a&&a[1]?a[1].replace("0.jpg","default.jpg"):"https://src.mechords.com/img/no-img.gif").indexOf("ytimg.com"),[]),n=0;n<s.category.length;n++)v.push(s.category[n].term);var o="",c=s.published.$t;c&&(c=c.split("T")[0].split("-"))[1]&&c[2]&&(o=c[2]+"/"+parseInt(c[1])+"/",o+=(parseInt(c[0])+543).toString().substr(2)),lightList&&lightList[i]&&(lightList[i].classList.remove("-holdlist"),lightList[i].innerHTML=CreateList(h,f,m,a,v,o))}RemoveHoldList()}}function SearchReq(e){topScroll=$(win).scrollTop,win.scrollTo(0,0),HeaderSticky(e.replace("rnd:",""));var t=18;-1<e.indexOf("rnd:")?(e="&callback=RandomRes&q="+e.split("rnd:")[1],t=150):e="&callback=SearchRes"+(submitStarted?"&q="+e:"&q=title:"+e),WriteScript("/feeds/posts/default/?alt=json-in-script&start-index=1&max-results="+t+e)}function SearchRes(e){if(submitStarted=!submitStarted,lightList=$(".post-list>li",lightBox).all,e.feed&&e.feed.entry){var t=e.feed.entry;if(t.length)for(var d=17<t.length?17:t.length,h=0;h<d;h++){var i=t[h],f=i.id.$t.split(".post-")[1];if(-1==qIDs.indexOf(f)){qIDs.push(f);for(var m=i.title.$t,v="",p=i.link,s=0;s<p.length;s++)"alternate"==p[s].rel&&(v=p[s].href);for(var r=i.content.$t.match(/src\s*=\s*"(.+?)"/),l=((r=r&&r[1]?r[1].replace("0.jpg","default.jpg"):"https://src.mechords.com/img/no-img.gif").indexOf("ytimg.com"),[]),g=0;g<i.category.length;g++)l.push(i.category[g].term);var u="",a=i.published.$t,a=(a&&(a=a.split("T")[0].split("-"))[1]&&a[2]&&(u=a[2]+"/"+parseInt(a[1])+"/",u+=(parseInt(a[0])+543).toString().substr(2)),!1);-1<l.indexOf("ปลดแอก")?a="liberty":-1<l.indexOf("recently")?a="recently":-1<l.indexOf("trending")&&(a="trending"),(m===search_txt.value?qListA:-1<m.indexOf(search_txt.value)?qListB:qListC).push([a,CreateList(f,m,v,r,l,u)])}}if(t.length<17&&0==submitSeconded)submitSeconded=!0,SearchReq(search_txt.value);else for(var n=qListA.concat(qListB,qListC),o=n.length>d?d:n.length,c=0;c<o;c++){var b=n[c][0],L=n[c][1];lightList[c]&&(lightList[c].innerHTML=L,lightList[c].classList.remove("-holdlist"),b&&lightList[c].classList.add(b),c==o-1&&(lightList[o].innerHTML=CreateList(0,"ดูผลการค้นหาแบบละเอียด..","/search?q="+search_txt.value,"https://src.mechords.com/img/G.jpg",search_txt.value),lightList[o].classList.remove("-holdlist"),RemoveHoldList()))}}else{var x;submitSeconded?(Alert("ไม่พบเพลงที่ค้นหา <br/>ลอง <a href='https://www.mechords.com/search?q="+search_txt.value+"'>ค้นหาแบบละเอียด</a> ดูอีกสักครั้ง<br/>อาจเจอก็เป็นได้นะ"),x=setInterval(function(){-1<alertBox.className.indexOf("_none")&&(clearInterval(x),ResetThePage(),search_txt.focus())},500)):(submitSeconded=!0,SearchReq(search_txt.value))}Favorite()}function SearchReqRnd(e){submitSeconded=submitStarted=!1,ResetQ(),SearchReq("rnd:"+e)}function RemoveHoldList(){for(var e=$(".-holdlist").all,t=0;t<e.length;t++)e[t].parentNode.removeChild(e[t])}!function(e){if(e&&e.length)for(var t=0;t<e.length;t++){var i=e[t],s=i.getAttribute("data-link");s&&(i.setAttribute("href",s.replace(/(https*:\/\/)*(www.)*mechords.com\/*/,"/")),i.removeAttribute("data-link"))}}($("[data-link]").all);var favStorage,oldFav=localStorage.getItem("favorites");if(oldFav&&(oldFav=JSON.parse(oldFav),Object.keys(oldFav).length)){var items=Object.keys(oldFav);if(items.length){for(var li="",i=0;i<items.length;i++){var id=items[i],data=oldFav[id],title=data[1],link=mechords+"/"+data[0]+".html",img=(link=(link=data[0].match(/(\d{4}\/\d{2}\/[^.]*)/))?mechords+"/"+link[1]+".html":"","https://i.ytimg.com/vi/"+data[3]+"/default.jpg"),lbls=data[2];"object"==typeof lbls&&(lbls=lbls.join("|")),FavFind(id=id.substr(1))||FavSet("add",id,link,title,lbls,img)}localStorage.removeItem("favorites"),BtnFav(),Favorite()}}function BtnFav(){var e;CanUseStorage()&&btnFav&&(favStorage=localStorage.getItem("mechords_favorite"),(e=$("a",btnFav).self)&&(favStorage&&Object.keys(JSON.parse(favStorage)).length?e.classList.add("-active"):e.classList.remove("-active"),e.removeEventListener("click",FavoriteRes),e.addEventListener("click",FavoriteRes)))}function FavFind(e){return!!(favStorage=localStorage.getItem("mechords_favorite"))&&!!(favStorage=JSON.parse(favStorage))[e]}function FavListener(e){Stope(e=e||window.event);var e=e.target.parentNode,t=e.className.match(/post\-(\d+)/);if(t=!!t&&t[1]){if(FavFind(t))FavSet("del",t);else{var i=$(".thumbnail",e).self,s=$(".title",e).self,r=s.getAttribute("href"),s=s.innerText,i=(i=$("img",i).self).getAttribute("src"),l=$(".lbls a",e).all;if(l.length){for(var a=[],n=0;n<l.length;n++)a.push(l[n].innerHTML);a=a.join("|")}r&&s&&a&&i&&FavSet("add",t,r,s,a,i)}BtnFav()}}function Favorite(){if(CanUseStorage()){favStorage=localStorage.getItem("mechords_favorite");var e=$(".post-list .btn-like").all;if(e.length)for(var t=startFav=0;t<e.length;t++){var i=e[t];i.classList.remove("_none");var s=i.parentNode.className.match(/post\-(\d+)/);(s=s?s[1]:0)&&FavFind(s)&&i.classList.add("-active"),i.removeEventListener("click",FavListener),i.addEventListener("click",FavListener)}}}function FavSet(e,t,i,s,r,d){var l,a=$(".post-"+t).all;if(a.length)for(var n=0;n<a.length;n++){var o=$(".btn-like,.btn.-like",a[n]).all;if(o.length)for(var c=0;c<o.length;c++)"add"==e?o[c].classList.add("-active"):"del"==e&&o[c].classList.remove("-active")}favStorage=localStorage.getItem("mechords_favorite"),t&&(l=(l=JSON.parse(favStorage))||{},"add"==e?i&&s&&r&&d&&(l[t]=[i,s,r,d]):"del"==e&&delete l[t],localStorage.setItem("mechords_favorite",JSON.stringify(l)))}function FavoriteRes(e){(e=e||window.event).preventDefault(),Stope(e),t=localStorage.getItem("mechords_favorite"),win.scrollTo(0,0);e=$("#mechords").top+$("#header").height+16;if(lightBox.style.marginTop=e+"px",t&&Object.keys(JSON.parse(t)).length){var t=JSON.parse(t),i=Object.keys(t);if(i.length){for(var s="",r=i.length-1;-1<r;r--){var l=i[r],a=t[l];s+="<li>"+CreateList(l,a[1],a[0],a[3],a[2].split("|"))+"</li>"}body.classList.add("_disable-scroll"),header.style.cssText="position: relative; z-index: 100; margin-right:"+ScrollbarWidth()+"px;",search_txt.value="คอร์ดเพลงที่ถูกใจ",search_cls.classList.remove("_none"),lightBox.classList.remove("_none"),lightBox.innerHTML='<div class="wrapper"><ul class="post-list -wide">'+s+"</ul></div>";e=$(".post-list",lightBox).self;e&&(e.removeEventListener("click",Stope),e.addEventListener("click",Stope)),Favorite(),search_txt.focus()}}}function FavItem(e,t){if(e&&t){if(FavFind(e))FavSet("del",e),t.classList.remove("-active");else{var i=pageURL.split(/[\#\?\&]/)[0],s=$("h2",postItem).self.innerHTML,r=$(".item-tags a",postItem).all,l="";if(r.length)for(var a=0;a<r.length;a++)l+=(0!=a?"|":"")+r[a].innerText;var n=$("img",postItem).self,o=$(".vdo",postItem).self,o=$("iframe",o).self;FavSet("add",e,i,s,l,n=n?n.getAttribute("src"):o&&(n=!!(n=o.src.match(/embed\/(.*)/))&&n[1].split(/\?/)[0])?"https://i.ytimg.com/vi/"+n+"/default.jpg":""),t.classList.add("-active")}BtnFav()}}function ScrollPos(){me_scroll=$(".me-scroll");var e,t,i,s,r=$("._disable-scroll").self;me_scroll.self&&(e=$("#body").left,t=$("#body").width+2*me_scroll.width,i=$("#body").width,s=$(win).height/2-me_scroll.height/2,me_scroll.self.style.top=s+"px",$(win).width>t+36?(me_scroll.self.style.right="",me_scroll.self.style.left=e+i+18+"px"):(me_scroll.self.style.left="",me_scroll.self.style.right=r?ScrollbarWidth()+"px":0))}BtnFav(),function(s){if(s){var e=s.querySelector("select"),r=s.querySelectorAll("ol>li"),t=doc.getElementById("strum");function l(e){t||((t=doc.createElement("audio")).type="audio/mpeg",t.id="strum",t.loop=!0,t.hidden=!0,extens.appendChild(t)),a(),e=e.replace("#","s"),t.src="https://src.mechords.com/audios/acoustic-guitar-tuning/"+e+".mp3",t.play()}e.onchange=function(){a();for(var e=(this.value||this.options[this.selectedIndex].value).split("|"),t=0;t<e.length;t++)r[t].innerHTML=e[t]};for(var i=0;i<r.length;i++)r[i].addEventListener("click",function(){var e=this.innerText;e?(l(e),this.classList.add("strumming")):a()});function a(){if(t&&(t.pause(),t.currentTime=0),r)for(var e=0;e<r.length;e++)r[e].classList.remove("strumming")}doc.addEventListener("keyup",function(e){var t,i;!s.querySelector(".strumming")||null!=(e={96:"stop",97:5,98:4,99:3,100:2,101:1,102:0}[e.which||e.keyCode])&&("stop"!=e&&(i=(t=r[e]).innerText)?(l(i),t.classList.add("strumming")):a())})}}($("#guitar-tuning").self);var btn_scroll=$(".me-scroll button").all;if(btn_scroll.length){for(var g_scroll=$(".me-scroll>._global").self,c_scholl=$(".me-scroll>._chord").self,i=0;i<btn_scroll.length;i++)btn_scroll[i].addEventListener("click",function(e){Stope(e);var t,e=this.value;"arrow"!=e&&("up"==e?SmoothScroll(0):"down"==e?(ChordTb(),chordTb?g_scroll&&c_scholl&&(g_scroll.classList.add("_none"),c_scholl.classList.remove("_none"),(t=$("#x1").self)&&(CloseTooltip(),ChordScrollStart(t.value),ActiveScrollBtn(t)),ScrollPos()):SmoothScroll($("body").height+bottomSpace-$(win).height)):"stop"==e?(g_scroll.classList.remove("_none"),c_scholl.classList.add("_none"),ChordScrollStop(),ScrollPos()):(ChordScrollStart(e),ActiveScrollBtn(this)))});function ActiveScrollBtn(e){var t=$(".me-scroll>._chord>button").all;if(t.length)for(var i=0;i<t.length;i++){var s=t[i];"arrow"!==s.value&&s.classList.remove("-active")}e&&"stop"!=e.value&&e.classList.add("-active")}function SmoothScroll(e){var i=window.pageYOffset,s=e-i,r=null;window.requestAnimationFrame(function e(t){r=r||t;t-=r;window.scrollTo(0,EaseInOutCubic(t,i,s,1e3));t<1e3&&window.requestAnimationFrame(e)})}function EaseInOutCubic(e,t,i,s){return(e/=s/2)<1?i/2*e*e*e+t:i/2*((e-=2)*e*e+2)+t}}function Alert(e){alertBox&&e&&(alertBox.innerHTML='<div class="-inner"><pre>'+e+'</pre><button type="button" onclick="Xlert(event);">ปิด</button></div>',alertBox.classList.remove("_none"))}function Xlert(e){Stope(e),alertBox&&(alertBox.innerHTML="",alertBox.classList.add("_none"))}function FixAutoHeight(){var e=$('[style*="height: auto"]').all;if(e.length)for(var t=0;t<e.length;t++)e[t].style.height="",e[t].getAttribute("style").length||e[t].removeAttribute("style");20<=++fixAutoHeightTime&&fixAutoHeightInterval&&clearInterval(fixAutoHeightInterval)}var fbComment=!1;function FBPlugin(){var e;$("#fb-comments").self&&!fbComment&&(fbComment=!0,(e=doc.createElement("script")).async=!0,e.defer=!0,e.src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v8.0&appId=1458156584324917&autoLogAppEvents=1",body.appendChild(e))}function DeepLinkAndroid(){var e,t,i,s;"undefined"!=typeof Android&&(s=e="file:///android_asset/index.html#home",t=html.dataset.page,/label\:/.test(t)?(i=t.split(":")[1],s="file:///android_asset/page.html#"+(i=/recently|trending/.test(i)?""+i:"label-"+i)+"&back=home"):/search\:/.test(t)?s="file:///android_asset/index.html#search-"+t.split(":")[1]:"item"==t?(s="file:///android_asset/item.html?id="+postItem.className.split("post-")[1]+"&title="+$("h2",postItem).self.innerText+"&back=home",s+="&back=home"):s="index"==t&&e,s&&Android.LoadUrl(s))}var invisibleAboutMe=0,about_me=$("#about-me").self;function CloseAboutMe(){var e;about_me&&(about_me.style.display="none",(e=$(".do-not-show-again",about_me).self)&&e.checked&&CanUseStorage()&&localStorage.setItem("about_me","1"))}function FncBundle(){Wasteful(),BalanceMainList(),ScrollPos(),FBPlugin()}!function(){var e;about_me&&(CanUseStorage()&&"1"==(invisibleAboutMe=localStorage.getItem("about_me"))?about_me.classList.add("_none"):about_me.classList.remove("_none"),(e=$("i",about_me).self)&&(e.removeEventListener("click",CloseAboutMe),e.addEventListener("click",CloseAboutMe)))}(),doc.addEventListener("click",function(){ResetThePage()}),doc.addEventListener("DOMContentLoaded",function(e){DeepLinkAndroid(),RecentlyReq(),FncBundle()}),win.addEventListener("scroll",function(){FncBundle(),topStart=$(win).scrollTop}),win.addEventListener("resize",function(){FncBundle()});