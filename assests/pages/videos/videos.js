var elem = document.getElementById('player');
if (elem.requestFullscreen) {
 elem.requestFullscreen();
} else if (elem.mozRequestFullScreen) {
 elem.mozRequestFullScreen();
} else if (elem.webkitRequestFullscreen) {
 elem.webkitRequestFullscreen();
} ;