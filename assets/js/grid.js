/*
  Grid
*/
console.log('--> grid.js');

// Using freewall.js on post loop
// http://vnjs.net/www/project/freewall/
var wall = new Freewall("#loop");
wall.reset({
    selector: 'article.loop-post',
    animate: true,
    cellW: 320,
    cellH: 'auto',
    onResize: function() {
      if(window.innerWidth > 380) {
        wall.fitWidth();
      } else {
        $('article.loop-post').css('width','100%');
      }
    }
});

$(document).ready(function() {
    wall.fitWidth();
});