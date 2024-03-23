const menubar = document.getElementById("menubar");
const burgermenu = document.getElementById("burgermenu");
const closebar = document.getElementsByClassName("closeIcon");

menubar.onclick = function() {
  burgermenu.classList.toggle("closeIcon");
  menubar.classList.toggle("closeIcon");
};

