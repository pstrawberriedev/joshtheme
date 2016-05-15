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

//Set Posts in Loop to Equal Height
var posts = $('#loop .single');
var maxHeight = Math.max.apply(null, posts.map(function () {
  console.log($(this).height());
  return $(this).height();
}).get());
$(window).load(function() {
  //TweenLite.to(posts, .1, { height: maxHeight, ease: Power1.easeOut })
  posts.css('height', maxHeight);
});