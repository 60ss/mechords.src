
"use strict";
doc.addEventListener("click",function(){
	ResetThePage();
});
doc.addEventListener("DOMContentLoaded",function(event){
	//M01();
	FncBundle();
});
win.addEventListener("scroll",function(){
	FncBundle();
});
win.addEventListener("resize",function(){
	FncBundle();
});
function FncBundle() {
	//MainList();
	//BalanceMainList();
	MostReq();
	ScrollPos();
}
window.onload = LoadTime;