function BalanceMainList(){var e;emptyItem=$("#empty").self,640<=$(win).width?emptyItem||(e=$("article",mainList).all).length&&e.length%2==1&&((emptyItem=doc.createElement("li")).setAttribute("id","empty"),emptyItem.innerHTML="<aside></aside>",mainList.appendChild(emptyItem)):emptyItem&&mainList.removeChild(emptyItem)}function CreateList(e,t,r,s,i,a){var l=$("#item").self?"h4":"h3",n="คอร์ดเพลง "+t;r=r.replace(/http(s)*\:\/\/www\.mechords\.com/,"");var o="";if("object"==typeof i){var c=[t];/\s*[\(|\?]/.test(t)&&(c.push(t.split(/\s*[\(|\?]/)[0]),/\s*\(/.test(t)&&c.push(t.match(/\((.*)\)/)[1]));for(var d=0;d<i.length;d++){var h=i[d];-1===ignoreLabels.indexOf(h)&&-1===c.indexOf(h)&&(o+='<a href="/search/label/'+encodeURIComponent(h)+'">'+h+"</a>")}}else o+='<a href="'+r+'">'+i+"</a>";var f=a?'<span class="time">'+a+"</span>":"",v=CanUseStorage()&&0!=e?'<button class="btn-like"></button>':"",m="";return s.match(/vi(\_webp)*\/(.*)\/(0|default|maxresdefault)/)&&(m='class="-ytimg"'),'<article class="post-'+e+'"><a class="thumbnail" href="'+r+'"><img width="120" height="68" '+m+' src="'+(s=s.replace("/s72-c/","/s120/"))+'" alt="'+n+'" /></a><div class="details"><a class="title" href="'+r+'"><'+l+">"+t+"</"+l+'></a><div class="lbls">'+o+"</div></div>"+f+v+"</article>"}function BrowserIs(e){var t=navigator.userAgent,r=-1!=(t.indexOf("Opera")||t.indexOf("OPR"))?"opera":-1!=t.indexOf("Chrome")?"chrome":-1!=t.indexOf("Safari")?"safari":-1!=t.indexOf("Firefox")?"firefox":-1!=t.indexOf("MSIE")||1==!!doc.documentMode?"ie":void 0;return r===e}function CanUseWebP(){var e=doc.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))&&0==e.toDataURL("image/webp").indexOf("data:image/webp")}function CanUseSpeech(){return"SpeechRecognition"in window||"webkitSpeechRecognition"in window}function CanUseStorage(){var e="test";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}function AreYouReady(){return!!("querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach)}function Stope(e){(e=e||window.event).cancelBubble=!0,e.stopPropagation&&e.stopPropagation()}function Shuffler(e){if(e&&1<e.length){for(var t=e.length-1;0<t;t--){var r=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[r],e[r]=s}return e}}function WriteScript(e){var t;scriptBox&&((t=document.createElement("script")).src=mechords+e,BrowserIs("ie")?document.body.appendChild(t):scriptBox.appendChild(t))}function ScrollbarWidth(){var e=doc.createElement("div");e.style.visibility="hidden",e.style.overflow="scroll",e.style.msOverflowStyle="scrollbar",body.appendChild(e);var t=doc.createElement("div");e.appendChild(t);var r=e.offsetWidth-t.offsetWidth;return e.parentNode.removeChild(e),r+"px"}function CopyToClipboard(e){var t;e&&extens&&((t=doc.createElement("textarea")).value=e,extens.appendChild(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),extens.removeChild(t))}function M01(){var e=win.location.search;return/[\?\&]m=1/.test(e)}function LoadTime(){var e=window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;e&&console.log("ระยะเวลาในการโหลดหน้าเว็บ "+e/1e3+" วินาที")}function ResetQ(){topScroll=$(win).scrollTop,win.scrollTo(0,0),qNotFound=!1,iQ=0,qIDs=[],qListA=[],qListB=[],qListC=[],lightBox||(lightBox=doc.createElement("div"),extens.appendChild(lightBox)),lightBox.innerHTML='<div class="wrapper"><ul class="post-list -wide -placeholder">'+ListHolder(18)+"</ul><div>",lightBox.classList.remove("_none")}function ListHolder(e){var t="";for(i=0;i<e;i++)t+=liHolder;return t}function insertAfter(e,t){t.parentNode.insertBefore(e,t.nextSibling)}function Wasteful(){var e=$(".wasteful").all;if(e.length)for(var t=0;t<e.length;t++)e[t].parentNode.removeChild(e[t])}function ShortenLinkIn(){var e=$("a").all;if(e.length)for(var t=0;t<e.length;t++){var r=e[t].getAttribute("href");r&&e[t].setAttribute("href",r.replace(/http(s)*\:\/\/www\.mechords\.com/,""))}}function Reverse(e){for(var t=new Array,r=e.length-1;0<=r;r--)t.push(e[r]);return t}var win=window,doc=document,html=doc.documentElement,body=doc.body||doc.querySelector("body");function $(e,t){var e=e,r=void 0!==win.pageYOffset,s="CSS1Compat"===(doc.compatMode||""),i={all:0,self:0,width:0,height:0,top:0,left:0,topScroll:0,bottomScroll:0,leftScroll:0,rightScroll:0};if(e.self==window)return{width:win.innerWidth||body.clientWidth,height:win.innerHeight||body.clientHeight,scrollTop:r?win.pageYOffset:s?body.scrollTop:0,scrollLeft:r?win.pageXOffset:s?body.scrollLeft:0};if(e==document)return{width:window.innerWidth||body.clientWidth||html.clientWidth,height:window.innerHeight||body.clientHeight||html.clientHeight};if("string"==typeof e){if((e=t?t.querySelectorAll(e):document.querySelectorAll(e)).length){var a=e[0].getBoundingClientRect();return{all:e,self:e[0],width:e[0].innerWidth||e[0].clientWidth,height:e[0].innerHeight||e[0].clientHeight,top:e[0].offsetTop,left:e[0].offsetLeft,topScroll:a.top,bottomScroll:a.bottom,leftScroll:a.left,rightScroll:a.right}}return i}if(e){a=e.getBoundingClientRect();return{all:0,self:e,width:e.innerWidth||e.clientWidth,height:e.innerHeight||e.clientHeight,top:e.offsetTop,left:e.offsetLeft,topScroll:a.top,bottomScroll:a.bottom,leftScroll:a.left,rightScroll:a.right}}return i}function ResetThePage(){var e=0!==topScroll?topScroll:topStart;topScroll=0,win.scrollTo(0,e),header&&(header.classList.remove("_search-extended"),header.classList.remove("_none"),header.removeAttribute("style")),lightBox&&(lightBox.classList.add("_none"),lightBox.innerHTML="",lightBox.removeAttribute("style")),search_txt&&(search_txt.value=""),search_cls&&search_cls.classList.add("_none"),shareBox&&shareBox.classList.add("_none"),body&&0==$("#chord-scroll").self&&body.classList.remove("_disable-scroll")}var mechords="https://www.mechords.com",pageURL=win.location.href,searchLabel=(searchLabel=pageURL.match(/search\/label\/(.*)/))?"-/"+searchLabel[1].split("?")[0]:"",searchQuery=pageURL.match(/[\?\&]q=(.*)/);searchQuery=!!(searchQuery=!!searchQuery&&searchQuery[1].split("&")[0])&&decodeURI(searchQuery);var ignoreLabels=["คอร์ดเพลง","recently","app-trending","app-recently","trending","สตริง","เพื่อชีวิต","ลูกกรุง","ลูกทุ่ง","ลูกทุ่งเพื่อชีวิต","หมอลำ","อีสาน","ใต้","คำเมือง","ลาว","สากล","เพลงคู่","Cover","คนโสด","เพลงจีบ","ชิลๆ","อินเลิฟ","อกหัก","เหงา","เศร้า","คิดถึง","ฤดูร้อน","ฤดูฝน","ฤดูหนาว","ปีใหม่","วันพ่อ","วันแม่","new","shorten-data","visiting-data","0.0","โควิด-19","เร็กเก้/สกา","อินดี้โฟล์ก","แร็พ","ปลดแอก"],XL=1035.98<$(doc).width,fullScreen=1279.98<$(doc).width&&719.98<$(doc).height,scriptBox=$(".script-box").self,header=$("#header").self,footer=$("#footer").self,theTitle=$("#header h1").self,brand=$("#header .brand").self,searchBox=$("#header .search-box").self,search_txt=$(".search-box>.-txt").self,search_cls=$(".search-box>.-clear").self,search_btn=$(".search-box>.-submit").self,search_mic=$(".search-box>.-speech").self,lightBox=$("#extensions .light-box").self,alertBox=$("#extensions .alert-box").self,extens=$("#extensions").self,mainList=$("#main-list").self,mostList=$("#most-list").self,mostList1=$("#most-list-1").self,mostList2=$("#most-list-2").self,similarList=$("#similar .post-list").self,emptyItem=$("#empty").self,postItem=$("#post-item").self,itemTitle=$("#post-item header h2").self,navigation=$("#navigation").self,bottomSpace=200,chordTb=(chordTb=$(".chord-tb").self)||$(".chords-tb").self,btnFav=$("#category .btn-fav").self,favRes=$("#extensions .favorite-res").self;function ChordTb(){chordTb=(chordTb=$(".chord-tb").self)||$(".chords-tb").self}var fixAutoHeightInterval,shareBox=$(".share-box").self,keySelector=$(".select.-key>select").self,defaultSelectIndex=0,btn_share=$(".btn.-share").self,btn_switch=$(".btn.-switch").self,btn_lightbox=$(".btn.-lightbox").self,btn_like=$(".btn.-like").self,chk_gc=$(".chk.-gc > input").self,chk_uc=$(".chk.-uc > input").self,chk_simplify=$(".chk.-simplify > input").self,chk_cr=$(".chk.-cr > input").self,frm_l=$(".chk.-l > input").self,frm_m=$(".chk.-m > input").self,frm_e=$(".chk.-e > input").self,accordion=$(".accordion").self,a_pr=$(".accordion>.-pr").self,a_ps=$(".accordion>.-ps").self,a_gc=$(".accordion>.-gc").self,a_uc=$(".accordion>.-uc").self,a_cr=$(".accordion>.-cr").self,fixAutoHeightTime=0,liHolder="<li><div><div></div><div><div></div><div></div></div></div></li>",iQ=0,qByTitle=!1,qNotFound=!1,qListA=[],qListB=[],qListC=[],qIDs=[],iO="IntersectionObserver"in window,topStart=$(win).scrollTop,topScroll=0;!function(e){var t,r,s;e&&(!BrowserIs("ie")||(t=e.childNodes[0])&&(s="https://src.mechords.com/img/",(r=doc.createElement("div")).innerHTML='<div class="wrapper alert">คุณกำลังใช้เว็บบราวเซอร์ที่ล้าสมัย เพื่อการใช้งานเว็บไซต์อย่างเต็มประสิทธิภาพ ขอแนะนำให้ใช้หนึ่งในเบราว์เซอร์ฟรีที่ทันสมัยเหล่านี้แทนเถิด<br/><ul><li><a href="https://www.google.com/chrome/browser/desktop/" rel="nofollow" target="_blank"><img src="'+s+'chrome.png"/></a></li><li><a href="https://opera.com/" rel="nofollow" target="_blank"><img src="'+s+'opera.png"/></a></li><li><a href="https://www.microsoftedgeinsider.com/" rel="nofollow" target="_blank"><img src="'+s+'edge.png"/></a></li><li><a href="https://www.mozilla.com/firefox/" rel="nofollow" target="_blank"><img src="'+s+'firefox.png"/></a></li></ul></div><br/>',e.insertBefore(r,t)))}($("#billboard").self),function(i){var a,l,n,e;i&&((a=i.getAttribute("data-dropdown"))&&(l=doc.createElement("li"),(n=$(".btn-down",i).self)&&(n.classList.remove("_none"),n.addEventListener("click",function(e){e.preventDefault();var t=$(".-dropdown",i).self;if(!t){(t=doc.createElement("ul")).setAttribute("class"," -dropdown"),a=a.split("|");for(var r=0;r<a.length;r++){var s=a[r];t.innerHTML+='<li><a href="/search/label/'+encodeURIComponent(s)+'">'+s.replace(/อารมณ์|เพลง|เทศกาล/g,"")+"</a></li>"}l.innerHTML='<a class="_i" href="#" ><svg style="margin:4px auto;"><path d="M18 15l-6-6-6 6h12z"/></svg></a>',l.setAttribute("class","btn-up"),t.appendChild(l),i.appendChild(t)}this.classList.add("_none"),t.classList.remove("_none"),l&&l.addEventListener("click",function(e){e.preventDefault(),n.classList.remove("_none"),t.classList.add("_none")})}))),(e=$(".btn-fav a",i).self)&&e.addEventListener("click",function(e){e.preventDefault()}))}($("#category").self),function(){function r(){""!==search_txt.value?"คอร์ดเพลงที่ถูกใจ"==search_txt.value?FavoriteRes():searchQuery?gcseReq():(ResetQ(),SearchReq(search_txt.value)):(header.classList.add("_search-extended"),search_txt.focus())}var s,e;AreYouReady()&&searchBox&&header&&search_txt&&search_cls&&search_btn&&search_mic&&extens&&(search_txt.addEventListener("focus",function(){header.classList.add("_search-extended")}),search_txt.addEventListener("keyup",function(e){27==(e.which||e.keycode)&&ResetThePage(),""!==this.value?search_cls.classList.remove("_none"):ResetThePage()}),search_cls.addEventListener("click",function(){ResetThePage(),search_txt.focus()}),searchBox.addEventListener("click",function(e){Stope(e)}),searchBox.addEventListener("submit",function(e){e.preventDefault(),r()}),CanUseSpeech()&&(search_mic.classList.remove("_none"),(s=new webkitSpeechRecognition).continuous=!1,s.interimResults=!1,s.lang="th-TH",search_mic.addEventListener("click",function(){search_txt.value="",search_mic.classList.add("-active"),s.start(),s.onresult=function(e){var t=e.results[0][0].transcript;search_txt.value=t,s.stop(),r()},s.onspeechend=function(){s.stop(),search_mic.classList.remove("-active")},s.onerror=function(){s.stop(),search_mic.classList.remove("-active")}})),(e=$("#header .rnd.-q").self)&&e.addEventListener("click",function(e){Stope(e),ResetQ(),header.classList.add("_search-extended"),SearchReq("สุ่มคอร์ดเพลง")}))}(),function(e){function r(e){var t=$("article",e).all;if(t.length)for(var r=0;r<t.length;r++){var s,i=t[r];$("img",i).self||(s=i.className.match(/post\-(\d+)\s\-lazy/))&&WriteScript("/feeds/posts/default/?alt=json-in-script&max-results=1&q="+s[1]+"&callback=MostRes")}}iO?new IntersectionObserver(function(e,t){(e=e[0]).isIntersecting&&(r(e.target),t.unobserve(e.target))},{rootMargin:"0px 0px"}).observe(e):r(e)}(mostList);var mostIDs=[];function MostRes(e){if(e.feed&&e.feed.entry){var t=e.feed.entry;if(t.length)for(var r=0;r<t.length;r++){var s=t[r],i=s.id.$t.split(".post-")[1],a=$("#most-list .post-"+i).self;if(a&&-1==mostIDs.indexOf(i)){mostIDs.push(i);var l,n,o=$(".thumbnail",a).self,c=$(".title",a).self,d=c.getAttribute("href"),h=c.innerText,f=(o.getAttribute("data-img"),s.content.$t.match(/\<img.*?src=[\'\"](.*?)[\'\"]/)),v="";if(f?(n=(f=f[1]).match(/vi\/(.*)\/0|default|maxresdefault/))&&(v='class="-ytimg"'):f=!!(l=s.content.$t.match(/\<iframe.*?src=[\'\"](.*?)[\'\"]/))&&(v='class="-ytimg"',!!(n=(f=l[1]).match(/embed\/(.*)(\/\?)*/))&&"https://i.ytimg.com/vi/"+n[1]+"/default.jpg"),d&&h&&o){f&&(f=f.replace("0.jpg","default.jpg").replace("/s72-c/","/s120/"),o.innerHTML="<img "+v+' src="'+f+'" alt="คอร์ดเพลง '+h+'" />'),a.classList.remove("-lazy");var m=[h];/\s*[\(|\?]/.test(h)&&(m.push(h.split(/\s*[\(|\?]/)[0]),m.push(h.match(/\((.*)\)/)[1]));var p=s.category,u="";if(p.length)for(var g=0;g<p.length;g++){var b=p[g].term;"ปลดแอก"===b?a.parentNode.setAttribute("class","liberty"):/recently|trending/.test(b)?a.parentNode.setAttribute("class",b):m.indexOf(b)<0&&ignoreLabels.indexOf(b)<0&&(u+="<a href='/search/label/"+encodeURIComponent(b)+"'>"+b+"</a>")}var L=$(".lbls",a).self;L&&(L.classList.remove("-loading"),L.innerHTML=u);var x,_=s.published.$t,S=$("time",a).self;_&&!S&&(x=(_=_.split("T")[0].split("-"))[2]+"/"+parseInt(_[1])+"/",x+=(parseInt(_[0])+543).toString().substr(2),(S=doc.createElement("span")).classList.add("time"),S.innerHTML=x,a.appendChild(S))}}}Favorite()}scriptBox.innerHTML=""}var totalPost=1500;function TotalRes(e){e.feed&&e.feed.entry&&(totalPost=e.feed.openSearch$totalResults.$t)}WriteScript("/feeds/posts/default/-/คอร์ดเพลง?alt=json-in-script&callback=TotalRes&max-results=1");var rndList=!1,q_string="";function SearchReq(e){topStart=$(win).scrollTop;var t=1;"สุ่มคอร์ดเพลง"==e?(q_string=e,e="",t=Math.floor(Math.random()*(totalPost-150))+1):-1<e.indexOf("rnd:")?(e=e.split("rnd:")[1],e="&q="+(q_string=e),rndList=!0):-1<e.indexOf("default:")?(e=e.split("default:")[1],e="&q="+(q_string=e),qNotFound=!(rndList=!1)):(e="&q=title%3A"+(q_string=e),rndList=!1),search_txt.value=q_string,search_cls.classList.remove("_none"),header.classList.add("-search"),header.style.cssText="position: relative; z-index: 100; margin-right:"+ScrollbarWidth(),body.classList.add("_disable-scroll"),WriteScript("/feeds/posts/default/?alt=json-in-script&start-index="+t+"&max-results=150&callback=SearchRes"+e)}function SearchRes(e){var t,r;if(e.feed&&e.feed.entry){var s=e.feed.entry;if((s=rndList&&18<s.length?Shuffler(s):s).length){for(var i="สุ่มคอร์ดเพลง"==q_string?18:17,a=s.length>i-iQ?i-iQ:s.length,l=[],n=0;n<a;n++){var o=s[n],c=o.link;if(c.length)for(var d=0;d<c.length;d++)if("alternate"===c[d].rel){var h=o.id.$t.split(".post-")[1];if(-1==qIDs.indexOf(h)){qIDs.push(h);var f=o.title.$t;if(-1==["shorten","visiting"].indexOf(f)){var v,m,p=c[d].href,u=o.content.$t.match(/\<img.*?src=[\'\"](.*?)[\'\"]/);u=u?u[1].replace("0.jpg","default.jpg").replace("/s72-c/","/s120/"):(v=o.content.$t.match(/\<iframe.*?src=[\'\"](.*?)[\'\"]/))&&(m=(u=v[1]).match(/embed\/(.*)(\/\?)*/))?"https://i.ytimg.com/vi/"+m[1]+"/default.jpg":"";for(var g=[],b=0;b<o.category.length;b++)g.push(o.category[b].term);var L="",x=o.published.$t;x&&(x=x.split("T")[0].split("-"))[1]&&x[2]&&(L=x[2]+"/"+parseInt(x[1])+"/",L+=(parseInt(x[0])+543).toString().substr(2));var _=!1;-1<g.indexOf("ปลดแอก")?_="liberty":-1<g.indexOf("recently")?_="recently":-1<g.indexOf("trending")&&(_="trending"),rndList?l.push([_,CreateList(h,f,p,u,g,L)]):f===search_txt.value?qListA.push([_,CreateList(h,f,p,u,g,L)]):-1<f.indexOf(search_txt.value)?qListB.push([_,CreateList(h,f,p,u,g,L)]):qListC.push([_,CreateList(h,f,p,u,g,L)])}}}}a<i&&!qNotFound?SearchReq("default:"+q_string):rndList||(l=qListA.concat(qListB,qListC));var S=$(".post-list",lightBox).self;if(S&&l.length){for(var w=$("li",S).all,y=l.length>i?i:l.length,b=0;b<y;b++){var k=l[b][0],T=l[b][1];if(w[b]&&(w[b].innerHTML=T,k&&w[b].classList.add(k),b==y-1)){w[y].innerHTML=CreateList(0,"ดูผลการค้นหาเพิ่มเติม..","/search?q="+search_txt.value,"https://src.mechords.com/img/G.jpg",search_txt.value);for(var B=$("li>div",S).all,C=0;C<B.length;C++)S.removeChild(B[C].parentNode)}}S.removeEventListener("click",Stope),S.addEventListener("click",Stope)}Favorite()}}else{qNotFound?(t="ว้า.. ยังไม่มีคอร์ดเพลงนี้เลย<br/> สามารถแนะนำเพลงผ่านทาง<br/> <a href='https://www.facebook.com/mechords' target='_blank'>เฟซบุ๊คแฟนเพจ</a><br/> ",Alert(t+="หรือลอง <a href='https://www.mechords.com/search?q="+q_string+"'>ค้นหาแบบละเอียด</a>"),r=setInterval(function(){-1<alertBox.className.indexOf("_none")&&(clearInterval(r),ResetThePage(),search_txt.focus())},500)):SearchReq("default:"+q_string)}scriptBox.innerHTML=""}function SearchReqRnd(e){ResetQ(),SearchReq("rnd:"+e)}var favStorage,oldFav=localStorage.getItem("favorites");if(oldFav&&(oldFav=JSON.parse(oldFav),Object.keys(oldFav).length)){var items=Object.keys(oldFav);if(items.length){for(var li="",i=0;i<items.length;i++){var id=items[i],data=oldFav[id],title=data[1],link=mechords+"/"+data[0]+".html";link=(link=data[0].match(/(\d{4}\/\d{2}\/[^.]*)/))?mechords+"/"+link[1]+".html":"";var img="https://i.ytimg.com/vi/"+data[3]+"/default.jpg",lbls=data[2];"object"==typeof lbls&&(lbls=lbls.join("|")),FavFind(id=id.substr(1))||FavSet("add",id,link,title,lbls,img)}localStorage.removeItem("favorites"),BtnFav(),Favorite()}}function BtnFav(){var e;CanUseStorage()&&btnFav&&(favStorage=localStorage.getItem("mechords_favorite"),(e=$("a",btnFav).self)&&(favStorage&&Object.keys(JSON.parse(favStorage)).length?e.classList.add("-active"):e.classList.remove("-active"),e.removeEventListener("click",FavoriteRes),e.addEventListener("click",FavoriteRes)))}function FavFind(e){return!!(favStorage=localStorage.getItem("mechords_favorite"))&&!!(favStorage=JSON.parse(favStorage))[e]}function FavListener(e){Stope(e=e||window.event);var t=e.target.parentNode,r=t.className.match(/post\-(\d+)/);if(r=!!r&&r[1]){if(FavFind(r))FavSet("del",r);else{var s=$(".thumbnail",t).self,i=$(".title",t).self,a=i.getAttribute("href"),l=i.innerText,n=(n=$("img",s).self).getAttribute("src"),o=$(".lbls a",t).all;if(o.length){for(var c=[],d=0;d<o.length;d++)c.push(o[d].innerHTML);c=c.join("|")}a&&l&&c&&n&&FavSet("add",r,a,l,c,n)}BtnFav()}}function Favorite(){if(CanUseStorage()){favStorage=localStorage.getItem("mechords_favorite");var e=$(".post-list .btn-like").all;if(e.length)for(var t=startFav=0;t<e.length;t++){var r=e[t];r.classList.remove("_none");var s=r.parentNode.className.match(/post\-(\d+)/);(s=s?s[1]:0)&&FavFind(s)&&r.classList.add("-active"),r.removeEventListener("click",FavListener),r.addEventListener("click",FavListener)}}}function FavSet(e,t,r,s,i,a){var l,n=$(".post-"+t).all;if(n.length)for(var o=0;o<n.length;o++){var c=$(".btn-like,.btn.-like",n[o]).all;if(c.length)for(var d=0;d<c.length;d++)"add"==e?c[d].classList.add("-active"):"del"==e&&c[d].classList.remove("-active")}favStorage=localStorage.getItem("mechords_favorite"),t&&(l=(l=JSON.parse(favStorage))||{},"add"==e?r&&s&&i&&a&&(l[t]=[r,s,i,a]):"del"==e&&delete l[t],localStorage.setItem("mechords_favorite",JSON.stringify(l)))}function FavoriteRes(e){if((e=e||window.event).preventDefault(),Stope(e),t=localStorage.getItem("mechords_favorite"),win.scrollTo(0,0),t&&Object.keys(JSON.parse(t)).length){var t=JSON.parse(t),r=Object.keys(t);if(r.length){for(var s="",i=r.length-1;-1<i;i--){var a=r[i],l=t[a];s+="<li>"+CreateList(a,l[1],l[0],l[3],l[2].split("|"))+"</li>"}body.classList.add("_disable-scroll"),header.style.cssText="position: relative; z-index: 100; margin-right:"+ScrollbarWidth(),search_txt.value="คอร์ดเพลงที่ถูกใจ",search_cls.classList.remove("_none"),lightBox.classList.remove("_none"),lightBox.innerHTML='<div class="wrapper"><ul class="post-list -wide">'+s+"</ul></div>";var n=$(".post-list",lightBox).self;n&&(n.removeEventListener("click",Stope),n.addEventListener("click",Stope)),Favorite(),search_txt.focus()}}}function FavItem(e,t){if(e&&t){if(FavFind(e))FavSet("del",e),t.classList.remove("-active");else{var r=pageURL.split(/[\#\?\&]/)[0],s=$("h2",postItem).self.innerHTML,i=$(".item-tags a",postItem).all,a="";if(i.length)for(var l=0;l<i.length;l++)a+=(0!=l?"|":"")+i[l].innerText;var n=$("img",postItem).self,o=$(".vdo",postItem).self,c=$("iframe",o).self;FavSet("add",e,r,s,a,n=n?n.getAttribute("src"):c&&(n=!!(n=c.src.match(/embed\/(.*)/))&&n[1].split(/\?/)[0])?"https://i.ytimg.com/vi/"+n+"/default.jpg":""),t.classList.add("-active")}BtnFav()}}function ScrollPos(){var e,t,r,s;me_scroll=$(".me-scroll"),me_scroll.self&&(e=$("#body").left,t=$("#body").width+2*me_scroll.width,r=$("#body").width,s=$(win).height/2-me_scroll.height/2,me_scroll.self.style.top=s+"px",$(win).width>t+36?(me_scroll.self.style.right="",me_scroll.self.style.left=e+r+18+"px"):(me_scroll.self.style.left="",me_scroll.self.style.right=0))}BtnFav(),function(i){if(i){var e=i.querySelector("select"),a=i.querySelectorAll("ol>li"),t=doc.getElementById("strum");function l(e){t||((t=doc.createElement("audio")).type="audio/mpeg",t.id="strum",t.loop=!0,t.hidden=!0,extens.appendChild(t)),n(),e=e.replace("#","s"),t.src="https://src.mechords.com/audios/acoustic-guitar-tuning/"+e+".mp3",t.play()}e.onchange=function(){n();for(var e=(this.value||this.options[this.selectedIndex].value).split("|"),t=0;t<e.length;t++)a[t].innerHTML=e[t]};for(var r=0;r<a.length;r++)a[r].addEventListener("click",function(){var e=this.innerText;e?(l(e),this.classList.add("strumming")):n()});function n(){if(t&&(t.pause(),t.currentTime=0),a)for(var e=0;e<a.length;e++)a[e].classList.remove("strumming")}doc.addEventListener("keyup",function(e){var t,r,s;!i.querySelector(".strumming")||null!=(t={96:"stop",97:5,98:4,99:3,100:2,101:1,102:0}[e.which||e.keyCode])&&("stop"!=t&&(s=(r=a[t]).innerText)?(l(s),r.classList.add("strumming")):n())})}}($("#guitar-tuning").self);var btn_scroll=$(".me-scroll button").all;if(btn_scroll.length){for(var g_scroll=$(".me-scroll>._global").self,c_scholl=$(".me-scroll>._chord").self,i=0;i<btn_scroll.length;i++)btn_scroll[i].addEventListener("click",function(e){Stope(e);var t,r=this.value;"up"==r?SmoothScroll(0):"down"==r?(ChordTb(),chordTb?g_scroll&&c_scholl&&(g_scroll.classList.add("_none"),c_scholl.classList.remove("_none"),(t=$("button",c_scholl).self)&&(CloseTooltip(),ChordScrollStart(t.value),ActiveScrollBtn(t)),ScrollPos()):SmoothScroll($("body").height+bottomSpace-$(win).height)):"stop"==r?(g_scroll.classList.remove("_none"),c_scholl.classList.add("_none"),ChordScrollStop(),ScrollPos()):(ChordScrollStart(r),ActiveScrollBtn(this))});var svg_down='<svg><path d="M16.59,10.942L12,15.522l-4.59-4.58L6,12.353l6,6l6-6L16.59,10.942z" /><path d="M16.59,5.647L12,10.228l-4.59-4.58L6,7.058l6,6l6-6L16.59,5.647z" /></svg>';function ActiveScrollBtn(e){var t=$(".me-scroll>._chord>button").all;if(t.length)for(var r=0;r<t.length;r++){var s=t[r];s.classList.remove("-active"),-1==s.value.indexOf("stop")&&(s.innerHTML="")}e&&"stop"!=e.value&&(e.innerHTML=svg_down,e.classList.add("-active"))}function SmoothScroll(e){var s=window.pageYOffset,i=e-s,a=1e3,l=null;window.requestAnimationFrame(function e(t){l=l||t;var r=t-l;window.scrollTo(0,EaseInOutCubic(r,s,i,a));r<a&&window.requestAnimationFrame(e)})}function EaseInOutCubic(e,t,r,s){return(e/=s/2)<1?r/2*e*e*e+t:r/2*((e-=2)*e*e+2)+t}}function Alert(e){var t;alertBox&&e&&(t='<div class="-inner"><pre>'+e+'</pre><button type="button" onclick="Xlert(event);">OK</button></div>',alertBox.innerHTML=t,alertBox.classList.remove("_none"))}function Xlert(e){Stope(e),alertBox&&(alertBox.innerHTML="",alertBox.classList.add("_none"))}var fbComment=!1;function FBPlugin(){var e;$("#fb-comments").self&&!fbComment&&(fbComment=!0,(e=doc.createElement("script")).async=!0,e.defer=!0,e.src="https://connect.facebook.net/th_TH/sdk.js#xfbml=1&version=v8.0&appId=1458156584324917&autoLogAppEvents=1",body.appendChild(e))}function DeepLinkAndroid(){var e,t,r,s;"undefined"!=typeof Android&&(s=e="file:///android_asset/index.html#home",t=html.dataset.page,/label\:/.test(t)?(r=t.split(":")[1],s="file:///android_asset/page.html#"+(r=/recently|trending/.test(r)?""+r:"label-"+r)+"&back=home"):/search\:/.test(t)?s="file:///android_asset/index.html#search-"+t.split(":")[1]:"item"==t?(s="file:///android_asset/item.html?id="+postItem.className.split("post-")[1]+"&title="+$("h2",postItem).self.innerText+"&back=home",s+="&back=home"):s="index"==t&&e,s&&Android.LoadUrl(s))}function FncBundle(){Wasteful(),MostReq(),ScrollPos(),FBPlugin()}doc.addEventListener("click",function(){ResetThePage()}),doc.addEventListener("DOMContentLoaded",function(e){DeepLinkAndroid(),FncBundle()}),win.addEventListener("scroll",function(){FncBundle()}),win.addEventListener("resize",function(){FncBundle()});