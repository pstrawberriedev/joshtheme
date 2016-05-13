/*
  navigation.js
*/

console.log('--> navigation.js');

// Vars
var hamburger = $('#mobile-menu');
var mobileNav = $('#mobile-nav');

// Window Scroll functions
$(window).on('scroll', function() {
    scrollPosition = $(this).scrollTop();
    
    // Hamburger Opacity
    if (scrollPosition >= 70) {
      TweenLite.to(hamburger, 0.2, { autoAlpha: .2, ease: Power1.easeInOut });
    } else {
      TweenLite.to(hamburger, 0.2, { autoAlpha: 1, ease: Power1.easeInOut });
    }
  
});

// Nav Menu
hamburger.on('click', function() {

  
  
  // Animation
  var tl = new TimelineLite({onComplete:completed});
  tl.to(mobileNav, .5, { x: 0, ease: Power1.easeOut })
  
  
  // Callback
  function completed() {
    console.log('completed');
  }
  
});