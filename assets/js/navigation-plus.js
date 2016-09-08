/*
  Navigation
*/
console.log('--> navigation.js');

(function() {

  var $hamburger = $('#mobile-menu');
  var $mobileNav = $('nav.nav-plus');
	
  // Document Ready
  $(document).ready(function() {
    
    // Trigger a resize for the footer position function
    $(window).trigger('resize');

  });

  //  Touch Feedback (material design style)
  //  http://codepen.io/440design/pen/iEztk
  //
  $(function () {
      var ink, d, x, y;
      $("nav.nav-plus a").click(function (e) {
              if ($(this).find(".feedback-ink").length === 0) {
                  $(this).prepend("<span class='feedback-ink'></span>");
              }

              ink = $(this).find(".feedback-ink");
              ink.removeClass("animate");

              if (!ink.height() && !ink.width()) {
                  d = Math.max($(this).outerWidth(), $(this).outerHeight());
                  ink.css({ height: d, width: d });
              }

              x = e.pageX - $(this).offset().left - ink.width() / 2;
              y = e.pageY - $(this).offset().top - ink.height() / 2;

              ink.css({ top: y + 'px', left: x + 'px' }).addClass("animate");
      });
  });

  // Hamburger to X
  //
  function doTheHammy(option) {

      // Elements
      var $trigger = $hamburger;
      var $first = $trigger.find('.hammy-special .fir');
      var $second = $trigger.find('.hammy-special .sec');
      var $third = $trigger.find('.hammy-special .thi');

      if (option === "open") {
          TweenLite.to($first, .35, { rotation: "-360px", autoAlpha: 0, ease: Power1.easeInOut });
          TweenLite.to($second, .35, { y: 7, rotation: "-230px", ease: Power1.easeInOut });
          TweenLite.to($third, .35, { y: "-7px", rotation: 50, ease: Power1.easeInOut });
          $trigger.addClass('on');
      }
      if(option === "close") {
          TweenLite.to($first, .35, { rotation: 0, autoAlpha: 1, ease: Power1.easeInOut });
          TweenLite.to($second, .35, { y: 0, rotation: 0, ease: Power1.easeInOut });
          TweenLite.to($third, .35, { y: 0, rotation: 0, ease: Power1.easeInOut });
          $trigger.removeClass('on');
      }

  }

  // Open & Close Mobile Nav Functions
  //
	function closeNav() {
    
    doTheHammy('close');
    TweenLite.to($mobileNav, .3, { width: 0, ease: Power1.easeOut })
    $hamburger.removeClass('active');
    $('body').removeClass('overlay-active');
    
  }

  function openNav() {
    
    doTheHammy('open');
    TweenLite.to($mobileNav, .3, { width: 305, ease: Power1.easeOut })
    $hamburger.addClass('active');
    $('body').addClass('overlay-active');
    
  }

  // Hamburger Click Event
  //
  $hamburger.on('click', function(e) {
    e.preventDefault();
    
    // Default Action
    if(! $hamburger.hasClass('active')) {
      openNav();
    } else {
      closeNav();
    }

    // Close on Document Click
    $(document).on('click touchstart', function(event) {
      if(!$(event.target).closest($hamburger).length && !$(event.target).closest($mobileNav).length && $hamburger.hasClass('active')) {
          closeNav();
          return false;
      }
    });

    // Close with Escape key
    $(document).keyup(function(e) {
      if (e.which === 27 && $hamburger.hasClass('active')) {
        closeNav();
      }
    });


  });
  
  // Footer Positioning
  $(window).resize(function() {
    
    var h = window.innerHeight,
        navH = $('nav.nav-plus .links').height(),
        footerH = $('.nav-footer').height();
    
        setTimeout(function() {
          if(navH + (footerH * 2) < h) {
            $('.nav-footer').css('position', 'absolute');
          } else {
            $('.nav-footer').css('position', 'relative');
          }
        },200);
  });

})();