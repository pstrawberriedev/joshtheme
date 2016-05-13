/*
  navigation.js
*/

console.log('--> navigation.js');

var hamburger = $('#mobile-menu');

// Window Scroll functions
$(window).on('scroll', function() {
    scrollPosition = $(this).scrollTop();
    if (scrollPosition >= 70) {
      TweenLite.to(hamburger, 0.2, { autoAlpha: .2, ease: Power1.easeInOut });
    } else {
      TweenLite.to(hamburger, 0.2, { autoAlpha: 1, ease: Power1.easeInOut });
    }
});