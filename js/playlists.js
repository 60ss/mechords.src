function DeepLinkAndroid(){var e,t,i,l;"undefined"!=typeof Android&&(l=e="file:///android_asset/index.html#home",t=html.dataset.page,/label\:/.test(t)?(i=t.split(":")[1],l="file:///android_asset/page.html#"+(i=/recently|trending/.test(i)?""+i:"label-"+i)+"&back=home"):/search\:/.test(t)?l="file:///android_asset/index.html#search-"+t.split(":")[1]:"item"==t?(l="file:///android_asset/item.html?id="+postItem.className.split("post-")[1]+"&title="+$("h2",postItem).self.innerText+"&back=home",l+="&back=home"):l="index"==t&&e,l&&Android.LoadUrl(l))}function BalanceMainList(){var e;emptyItem=$("#empty").self,640<=$(win).width?emptyItem||(e=$("article",mainList).all).length&&e.length%2==1&&((emptyItem=doc.createElement("li")).setAttribute("id","empty"),emptyItem.innerHTML="<aside></aside>",mainList.appendChild(emptyItem)):emptyItem&&mainList.removeChild(emptyItem)}function CreateList(e,t,i,l,s,a){if(e&&t&&i&&l&&s){var d=$("#item").self?"h4":"h3",h="คอร์ดเพลง "+t,o=(i=i.replace(/http(s)*\:\/\/www\.mechords\.com/,""),"");if("object"==typeof s){var n=[t];/\s*[\(|\?]/.test(t)&&(n.push(t.split(/\s*[\(|\?]/)[0]),/\s*\(/.test(t)&&n.push(t.match(/\((.*)\)/)[1]));for(var r=0;r<s.length;r++){var c=s[r];-1===ignoreLabels.indexOf(c)&&-1===n.indexOf(c)&&(o+='<a href="/search/label/'+encodeURIComponent(c)+'">'+c+"</a>")}}else o+='<a href="'+i+'">'+s+"</a>";var a=a?'<span class="time">'+a+"</span>":"",f=CanUseStorage()&&0!=e?'<button class="btn-add"></button>':"",m="";return'<article class="post-'+e+'"><a class="thumbnail" href="'+i+'"><img width="120" height="68" '+(m=l.match(/vi(\_webp)*\/(.*)\/(0|default|maxresdefault)/)?'class="-ytimg"':m)+' src="'+(l=l.replace("/s72-c/","/s120/"))+'" alt="'+h+'" /></a><div class="details"><a class="title" href="'+i+'"><'+d+">"+t+"</"+d+'></a><div class="lbls">'+o+"</div></div>"+a+f+"</article>"}return""}function BrowserIs(e){var t=navigator.userAgent,t=-1!=(t.indexOf("Opera")||t.indexOf("OPR"))?"opera":-1!=t.indexOf("Chrome")?"chrome":-1!=t.indexOf("Safari")?"safari":-1!=t.indexOf("Firefox")?"firefox":-1!=t.indexOf("MSIE")||1==!!doc.documentMode?"ie":void 0;return t===e}function CanUseWebP(){var e=doc.createElement("canvas");return!(!e.getContext||!e.getContext("2d"))&&0==e.toDataURL("image/webp").indexOf("data:image/webp")}function CanUseSpeech(){return"SpeechRecognition"in window||"webkitSpeechRecognition"in window}function CanUseStorage(){var e="test";try{return localStorage.setItem(e,e),localStorage.removeItem(e),!0}catch(e){return!1}}function AreYouReady(){return!!("querySelector"in document&&"addEventListener"in window&&Array.prototype.forEach)}function Stope(e){(e=e||window.event).cancelBubble=!0,e.stopPropagation&&e.stopPropagation()}function Shuffler(e){if(e&&1<e.length){for(var t=e.length-1;0<t;t--){var i=Math.floor(Math.random()*(t+1)),l=e[t];e[t]=e[i],e[i]=l}return e}}function WriteScript(e){var t;scriptBox&&((t=document.createElement("script")).src=mechords+e,(BrowserIs("ie")?document.body:scriptBox).appendChild(t))}function ScrollbarWidth(){var e=doc.createElement("div"),t=(e.style.visibility="hidden",e.style.overflow="scroll",e.style.msOverflowStyle="scrollbar",body.appendChild(e),doc.createElement("div")),t=(e.appendChild(t),e.offsetWidth-t.offsetWidth);return e.parentNode.removeChild(e),t}function CopyToClipboard(e){var t;e&&extens&&((t=doc.createElement("textarea")).value=e,extens.appendChild(t),t.select(),t.setSelectionRange(0,99999),document.execCommand("copy"),extens.removeChild(t))}function M01(){var e=win.location.search;return/[\?\&]m=1/.test(e)}function LoadTime(){var e=window.performance.timing.domContentLoadedEventEnd-window.performance.timing.navigationStart;e&&console.log("ระยะเวลาในการโหลดหน้าเว็บ "+e/1e3+" วินาที")}function ResetQ(){topScroll=$(win).scrollTop,win.scrollTo(0,0),qNotFound=!1,iQ=0,qIDs=[],qListA=[],qListB=[],qListC=[],lightBox||(lightBox=doc.createElement("div"),extens.appendChild(lightBox)),lightBox.scrollTo(0,0);var e=$("#mechords").top+$("#header").height+16;lightBox.style.marginTop=e+"px",lightBox.innerHTML='<div class="wrapper"><ul class="post-list -wide -placeholder" onclick="Stope(event)">'+ListHolder(18)+"</ul><div>",lightBox.classList.remove("_none")}function ListHolder(e){var t="";for(i=0;i<e;i++)t+=liHolder;return t}function insertAfter(e,t){t.parentNode.insertBefore(e,t.nextSibling)}function Wasteful(){var e=$(".wasteful").all;if(e.length)for(var t=0;t<e.length;t++)e[t].parentNode.removeChild(e[t])}function ShortenLinkIn(){var e=$("a").all;if(e.length)for(var t=0;t<e.length;t++){var i=e[t].getAttribute("href");i&&e[t].setAttribute("href",i.replace(/http(s)*\:\/\/www\.mechords\.com/,""))}}function Reverse(e){for(var t=new Array,i=e.length-1;0<=i;i--)t.push(e[i]);return t}function $(e,t){var i,l,s,a={all:0,self:0,width:0,height:0,top:0,left:0,topScroll:0,bottomScroll:0,leftScroll:0,rightScroll:0};return(e=e).self==window?(i=void 0!==win.pageYOffset,l="CSS1Compat"===(doc.compatMode||""),{width:win.innerWidth||body.clientWidth,height:win.innerHeight||body.clientHeight,scrollTop:i?win.pageYOffset:l?body.scrollTop:0,scrollLeft:i?win.pageXOffset:l?body.scrollLeft:0}):e==document?{width:window.innerWidth||body.clientWidth||html.clientWidth,height:window.innerHeight||body.clientHeight||html.clientHeight}:"string"!=typeof e?e?(s=e.getBoundingClientRect(),{all:0,self:e,width:e.innerWidth||e.clientWidth,height:e.innerHeight||e.clientHeight,top:e.offsetTop,left:e.offsetLeft,topScroll:s.top,bottomScroll:s.bottom,leftScroll:s.left,rightScroll:s.right}):a:(e=(t||document).querySelectorAll(e)).length?(s=e[0].getBoundingClientRect(),{all:e,self:e[0],width:e[0].innerWidth||e[0].clientWidth,height:e[0].innerHeight||e[0].clientHeight,top:e[0].offsetTop,left:e[0].offsetLeft,topScroll:s.top,bottomScroll:s.bottom,leftScroll:s.left,rightScroll:s.right}):a}function ResetThePage(){var e=0!==topScroll?topScroll:topStart;topScroll=0,win.scrollTo(0,e),header&&(header.classList.remove("_search-extended"),header.classList.remove("_none"),header.removeAttribute("style")),lightBox&&(lightBox.classList.add("_none"),lightBox.innerHTML="",lightBox.removeAttribute("style")),search_txt&&(search_txt.value=""),search_cls&&search_cls.classList.add("_none"),shareBox&&shareBox.classList.add("_none"),body&&0==$("#chord-scroll").self&&body.classList.remove("_disable-scroll")}var win=window,doc=document,html=doc.documentElement,body=doc.body||doc.querySelector("body"),mechords="https://www.mechords.com",pageURL=win.location.href,searchLabel=(searchLabel=pageURL.match(/search\/label\/(.*)/))?"-/"+searchLabel[1].split("?")[0]:"",searchQuery=pageURL.match(/[\?\&]q=(.*)/),ignoreLabels=(searchQuery=!!(searchQuery=!!searchQuery&&searchQuery[1].split("&")[0])&&decodeURI(searchQuery),["คอร์ดเพลง","recently","app-trending","app-recently","trending","สตริง","เพื่อชีวิต","ลูกกรุง","ลูกทุ่ง","ลูกทุ่งเพื่อชีวิต","หมอลำ","อีสาน","ใต้","คำเมือง","ลาว","สากล","เพลงคู่","Cover","โสด","จีบ","อ่อย","ชิลล์","อินเลิฟ","ให้กำลังใจ","อกหัก","เหงา","เศร้า","คิดถึง","ร้อน","ฝน","หนาว","ปีใหม่","พ่อ","แม่","new","shorten-data","visiting-data","0.0","โควิด-19","เร็กเก้/สกา","โฟล์ก","แร็พ","ปลดแอก","จีน","เวียดนาม","ญี่ปุ่น","อินโด"]),XL=1035.98<$(doc).width,fullScreen=1279.98<$(doc).width&&719.98<$(doc).height,scriptBox=$(".script-box").self,header=$("#header").self,footer=$("#footer").self,theTitle=$("#header h1").self,brand=$("#header .brand").self,searchBox=$("#header .search-box").self,search_txt=$(".search-box>.-txt").self,search_cls=$(".search-box>.-clear").self,search_btn=$(".search-box>.-submit").self,search_mic=$(".search-box>.-speech").self,lightBox=$("#extensions .light-box").self,alertBox=$("#extensions .alert-box").self,extens=$("#extensions").self,mainList=$("#main-list").self,mostList=$("#most-list").self,mostList1=$("#most-list-1").self,mostList2=$("#most-list-2").self,similarList=$("#similar .post-list").self,emptyItem=$("#empty").self,postItem=$("#post-item").self,itemTitle=$("#post-item header h2").self,navigation=$("#navigation").self,bottomSpace=200,chordTb=(chordTb=$(".chord-tb").self)||$(".chords-tb").self,btnFav=$("#category .btn-fav").self,favRes=$("#extensions .favorite-res").self;function ChordTb(){chordTb=(chordTb=$(".chord-tb").self)||$(".chords-tb").self}var fixAutoHeightInterval,me_playlists,shareBox=$(".share-box").self,keySelector=$(".select.-key>select").self,defaultSelectIndex=0,btn_share=$(".btn.-share").self,btn_switch=$(".btn.-switch").self,btn_lightbox=$(".btn.-lightbox").self,btn_like=$(".btn.-like").self,chk_gc=$(".chk.-gc > input").self,chk_uc=$(".chk.-uc > input").self,chk_simplify=$(".chk.-simplify > input").self,chk_cr=$(".chk.-cr > input").self,frm_l=$(".chk.-l > input").self,frm_m=$(".chk.-m > input").self,frm_e=$(".chk.-e > input").self,accordion=$(".accordion").self,a_pr=$(".accordion>.-pr").self,a_ps=$(".accordion>.-ps").self,a_gc=$(".accordion>.-gc").self,a_uc=$(".accordion>.-uc").self,a_cr=$(".accordion>.-cr").self,fixAutoHeightTime=0,liHolder="<li class='-holdlist'><div><div></div><div><div></div><div></div></div></div></li>",iQ=0,qByTitle=!1,qNotFound=!1,qListA=[],qListB=[],qListC=[],qIDs=[],iO="IntersectionObserver"in window,topStart=$(win).scrollTop,topScroll=0,submitStarted=!1,submitSeconded=!1;if(me_favorite=localStorage.getItem("mechords_favorite")){if(Object.keys(JSON.parse(me_favorite)).length)for(var me_favorite=JSON.parse(me_favorite),items=Object.keys(me_favorite),objItem={},i=items.length-1;-1<i;i--){var id=items[i],data=me_favorite[id];objItem.id=items[i],objItem.title=data[1],objItem.link=data[0],objItem.img=data[3],objItem.lbls=data[2].split("|"),SetItemPlaylist("like",objItem,!0)}me_favorite=!1,localStorage.removeItem("mechords_favorite")}function PlaylistStorage(){CanUseStorage()&&((me_playlists=localStorage.getItem("mechords_playlists"))||SavePlayListToStorage(me_playlists=`[
				{
					"id" : "like",
					"name": "ถูกใจ",
					"items": []
				}
			]`),me_playlists=JSON.parse(me_playlists))}function SavePlayListToStorage(e){"object"==typeof e&&null!==e&&(e=JSON.stringify(e)),localStorage.setItem("mechords_playlists",e)}function getPlayListItem(e){PlaylistStorage();for(var t=0;t<me_playlists.length;t++){var i=me_playlists[t];if(playlistId==i.id)for(var l=i.items,s=0;s<l.length;s++)if(e==l[s].id)return e==l[s].id}}function CreatPlaylist(e){var t={};t.name=e,t.id=String(Date.now()),me_playlists.push(t),SavePlayListToStorage(me_playlists),PlayListItem()}function SetItemPlaylist(e,t,i){PlaylistStorage();for(var l=0;l<me_playlists.length;l++){var s=me_playlists[l];if(e==s.id){var a=s.items,o=!1;if(a){for(var n=0;n<a.length;n++)if(t.id==a[n].id){!(o=!0)===i&&s.items.splice(n,1);break}}else s.items=[];!o&&i&&s.items.push(t);break}}SavePlayListToStorage(me_playlists),ShowPlayList(e)}PlaylistStorage();var listplaylists=$("#listplaylists").self,playlist=$("#playlist").self,breadcrumbs=$("#breadcrumbs").self,post_list=$("#post-list").self;function ShowPlayList(e){if(post_list){post_list.innerHTML="";for(var t=0;t<me_playlists.length;t++){var i=me_playlists[t];if(e==i.id){if(!(l=i.items)||0===l.length)return;breadcrumbs.innerHTML='<ol><li><a href="javascript:ShowAllPlayLists();">เพลย์ลิสต์</a></li><li><strong>'+i.name+"</strong></li></ol>";for(var l=l.reverse(),s=0;s<l.length;s++){var a=l[s],e=a.id,o=a.title,n=a.img,r=a.lbls,a=a.link,c=doc.createElement("li");e&&o&&a&&n&&r&&(c.innerHTML=CreateList(e,o,a,n,r,""),post_list.appendChild(c))}break}}listplaylists.classList.add("_none"),playlist.classList.remove("_none"),PlayListRun()}}function ShowAllPlayLists(){listplaylists.innerHTML="",PlaylistStorage(),breadcrumbs.innerHTML='<ol><li><a href="/">mechords</a></li><li><strong>เพลย์ลิสต์ (เบต้า)</strong></li></ol>';for(var e=0;e<me_playlists.length;e++){var t=me_playlists[e],i=doc.createElement("li"),l="<i onclick=\"RemovePlayList('"+t.id+'\')"><svg><path d="M14.5,4.608L13.392,3.5L9,7.892L4.608,3.5L3.5,4.608L7.892,9L3.5,13.392L4.608,14.5L9,10.108l4.392,4.392l1.108-1.108L10.107,9L14.5,4.608z"></path></svg></i>';i.innerHTML="<a href=\"javascript:ShowPlayList('"+t.id+"');\">"+t.name+"</a>"+("like"!==t.id?l:""),listplaylists.appendChild(i),playlist.classList.add("_none"),listplaylists.classList.remove("_none")}}function RemovePlayList(t){1==confirm("ต้องการลบเพลย์ลิสต์นี้จริงๆใช่ไหม")&&(PlaylistStorage(),SavePlayListToStorage(me_playlists=me_playlists.filter(function(e){return e.id!==t})),ShowAllPlayLists())}var addBox=$(".add-box").self,playLis=$("li",addBox).all;function ShowBtnAdd(){if(CanUseStorage())for(var e=$(".btn-add").all,t=0;t<e.length;t++)e[t].classList.remove("_none")}function PlayListItem(){PlaylistStorage();var t=addBox.getAttribute("data-item"),i=(t=!!t&&JSON.parse(t))&&t.id?t.id:"",e=$("#playlist-items").self;e.innerHTML="";for(var l=0;l<me_playlists.length;l++){var s=me_playlists[l],a=doc.createElement("li"),o=-1,n=(s.items&&(o=s.items.findIndex(function(e){return i===e.id})),a.innerHTML=`
			<input type="checkbox" name="`+s.id+'" value="'+s.name+'" '+(o=-1!==o?"checked":"")+` />
			<label>`+s.name+`</label>
		`,e.appendChild(a),$("input",a).self);function r(e){e.checked=!e.checked,SetItemPlaylist(e.name,t,e.checked)}n.onclick=function(){r(this)},a.onclick=function(){r(n=$("input",this).self)}}playLis=$("li",addBox).all}function PlayListRun(){ShowBtnAdd();for(var e=$(".btn-add").all,t=0;t<e.length;t++)e[t].onclick=function(){var e={},t=this.parentNode,i=(e.id=t.className.match(/post-(\d+)(\s|$)/)[1],e.link=$(".title",t).self.href,e.link=e.link.split(/(\/\d{4}\/(.*)$)/)[1],e.title=$(".title",t).self.innerText,e.img=$("img",t).self.src,$(".lbls>a",t).all);e.lbls=[];for(var l=0;l<i.length;l++)e.lbls.push(i[l].innerText);addBox.setAttribute("data-item",JSON.stringify(e)),addBox.classList.remove("_none"),PlayListItem()}}PlayListRun();var addBoxOuter=$(".-outer",addBox).self,createNewPlayList=(addBoxOuter.onclick=function(){addBox.classList.add("_none")},$(".create-new",addBox).self),createNewNamePlayList=$(".create-new>input",addBox).self,btnCreateNewPlayList=$(".create-new>button",addBox).self,getCreateNewPlayList=$(".get-create-new",addBox).self;function FncBundle(){Wasteful()}getCreateNewPlayList.onclick=function(){createNewNamePlayList.value="",this.classList.add("_none"),createNewPlayList.classList.remove("_none"),createNewNamePlayList.focus()},btnCreateNewPlayList.onclick=function(){createNewNamePlayList.value&&CreatPlaylist(createNewNamePlayList.value)},doc.addEventListener("click",function(){}),doc.addEventListener("DOMContentLoaded",function(e){ShowAllPlayLists(),FncBundle()}),win.addEventListener("scroll",function(){FncBundle(),topStart=$(win).scrollTop}),win.addEventListener("resize",function(){FncBundle()});