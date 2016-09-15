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
    cellW: 300,
    cellH: 'auto',
    onResize: function() {
        wall.fitWidth();
    }
});

$(document).ready(function() {
    wall.fitWidth();
});