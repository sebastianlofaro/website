
var $video  = $('video'),
    lastMouseLocation = 10;
    $window = $(window);

function resizeVideo() {
  var height = $window.height();
  $video.css('height', height);

  var videoWidth = $video.width(),
      windowWidth = $window.width(),
      marginAdjust =   (windowWidth - videoWidth) / 2;

  $video.css({
      'height': height,
      'marginLeft' : marginAdjust,
      'marginRight' : marginAdjust
  });
  console.log("hello1");
}

$(document).ready(function() {
  resizeVideo();
});

$(window).resize(function(){
    resizeVideo();
});





$(function() {
  $('#menu').slicknav();
});






$(document).mousemove(function(event) {
  // console.log(event.pageX + ", " + event.pageY);
  if (event.pageY < lastMouseLocation+1) {
    // Mouse is moving up
    console.log("moving up");
    lastMouseLocation = event.pageY;
    if (event.pageY <= 10) {
      // alert("BUY TICKETS!!!");
      console.log("BUY TICKETS");
    }
  }
  else if(event.pageY > lastMouseLocation+1) {
    lastMouseLocation = event.pageY;
    console.log("moving down")
  }

});
