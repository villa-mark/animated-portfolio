const menubar = document.getElementById("menubar");
const burgermenu = document.getElementById("burgermenu");

menubar.onclick = function() {
  burgermenu.style.display = "block";
  menubar.classList.add("closeIcon");
};
