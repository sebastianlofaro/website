
var $video  = $('video'),
    firstTimeNotice = true;
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




//Slick Nav hamburger menu
$(function() {
  $('#menu').slicknav();
});




//Pop up
$(document).mouseleave(function() {
  console.log('The mouse has left the room!');
  if (firstTimeNotice) {
    firstTimeNotice = false;
    $('#last-call').css('display', 'block');
    $('#notice').addClass('animate');
  }
});

$('#last-call').on('click', function() {
  $('#last-call').css('display', 'none');
});
