var modal=document.getElementById("modalBox");
var viewbtn=document.getElementById("view-btn");
var span=document.getElementsByClassName("close")[0];
var cancel=document.getElementsByClassName("btn-cancel")[0];

viewbtn.onclick=function()
{
    modal.style.display="block";
}

span.onclick=function(){
    modal.style.display="none";
}

cancel.onclick=function(){
    modal.style.display="none";
}
