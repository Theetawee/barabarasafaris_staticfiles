// check_screen_width.js
window.addEventListener('load', function() {
  checkScreenWidth();
});

window.addEventListener('resize', function() {
  checkScreenWidth();
});

function checkScreenWidth() {
  var screenWidth = window.innerWidth || document.documentElement.clientWidth;
  var cards = document.querySelectorAll('.maining');
  
  if (screenWidth <= 768) {
    // Small screen width, show only 2 cards
    for (var i = 2; i < cards.length; i++) {
      cards[i].style.display = 'none';
    }
  } else {
    // Larger screen width, show all cards
    for (var i = 0; i < cards.length; i++) {
      cards[i].style.display = 'block';
    }
  }
}
