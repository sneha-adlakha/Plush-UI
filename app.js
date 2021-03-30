var modal=document.getElementById("modalBox");
var viewbtn=document.getElementById("view-btn");
var span=document.getElementsByClassName("close")[0];
var cancel=document.getElementsByClassName("btn-cancel")[0];
var navbar = document.getElementById("topnav");

window.onscroll = function() {myFunction()};

// Get the navbar


// Get the offset position of the navbar
var sticky = topnav.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("header");
  }
}

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



var btnContainer = document.getElementById("sidenavigation");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("sidenavigation_item");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}