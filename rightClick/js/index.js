var a=document.getElementById("textDiv");
var menu=document.getElementById("contextMenu");
a.oncontextmenu=function(e){
  e=e||window.event;
  var x=e.clientX;var y=e.clientY;
  menu.style.display="inline";
  if(x+menu.offsetWidth>document.body.clientWidth) x-=menu.offsetWidth;
  if(y+menu.offsetHeight>document.body.clientWidth) y-=menu.offsetHeight;
  menu.style.left=x+"px";
  menu.style.top=y+"px";
  return false;
}
menu.onclick=function(e) {
  e=e||window.event;
  var t=e.target||e.srcElement;
  alert(t.innerText)
}
menu.onmouseover=function(e) {
  e=e||window.event;
  var t=e.target||e.srcElement;
  t.style.backgroundColor="blue";
}
menu.onmouseout=function(e) {
  e=e||window.event;
  var t=e.target||e.srcElement;
  t.style.backgroundColor="";
}
document.onclick=function(e) {
  e=e||window.event;
  var t=e.target||e.srcElement;
  if(t.className != "menuObject")
    menu.style.display="none";
}