topButton = document.getElementById("move-top");

window.onscroll = function() {displayButton()};

function displayButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topButton.style.display = "block";
    } else {
      topButton.style.display = "none";
    }
  }
function moveUp(){
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  }