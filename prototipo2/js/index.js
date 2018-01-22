var acc = document.getElementsByClassName("accordion");
var otherPanel = document.getElementsByClassName('panel');
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    var isOpen = panel.style.display == "block";
    for (var i = 0; i < otherPanel.length; i++) {
      otherPanel[i].style.display="none";
    }
    if (isOpen) {
      panel.style.display = "none";
    }else {
      panel.style.display = "block";
    }
  });
}
var acc = document.getElementById("container");
var btntoggle = document.getElementById("openMenu");
btntoggle.addEventListener("click", function() {
  /* Toggle between adding and removing the "active" class,
  to highlight the button that controls the panel */
  acc.classList.toggle("active");
  for (var i = 0; i < otherPanel.length; i++) {
    otherPanel[i].style.display="none";
  }
});
