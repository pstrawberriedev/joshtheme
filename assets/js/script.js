/*
  script.js
*/

console.log('--> script.js');

//Flowtype
$('body').flowtype({
 minimum   : 500,
 maximum   : 600,
 minFont   : 15,
 maxFont   : 20,
 fontRatio : 35
});

$(document).ready(function() {
  $(window).trigger('resize');
});

//Set Posts in Loop to Equal Height
var posts = $('#loop .single');

// https://pressupinc.com/blog/2014/02/setting-dynamic-equal-heights-multiple-elements-jquery/
(function($){
	function equalizeHeights(selector) {
		var heights = new Array();

		// Loop to get all element heights
		$(selector).each(function() {

			// Need to let sizes be whatever they want so no overflow on resize
			$(this).css('min-height', '0');
			$(this).css('max-height', 'none');
			$(this).css('height', 'auto');

			// Then add size (no units) to array
	 		heights.push($(this).height());
		});

		// Find max height of all elements
		var max = Math.max.apply( Math, heights );

		// Set all heights to max height
		$(selector).each(function() {
			$(this).css('height', max + 'px');
		});	
	}

	$(window).load(function() {
		// Fix heights on page load
		equalizeHeights(posts);

		// Fix heights on window resize
		$(window).resize(function() {
            if (window.innerWidth > 767) {
              // Needs to be a timeout function so it doesn't fire every ms of resize
              setTimeout(function() {
                  equalizeHeights(posts);
              }, 120);
            } else {
              setTimeout(function() {
                  posts.css('height', 'auto');
              }, 120);
            }
		});
	});
})(jQuery);