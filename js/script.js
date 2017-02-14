
var $video  = $('video'),
    firstTimeNotice = true;
    $window = $(window);
//
// function resizeVideo() {
//   var height = $window.height();
//   $video.css('height', height);
//
//   var videoWidth = $video.width(),
//       windowWidth = $window.width(),
//       marginAdjust =   (windowWidth - videoWidth) / 2;
//
//   $video.css({
//       'height': height,
//       'marginLeft' : marginAdjust,
//       'marginRight' : marginAdjust
//   });
// }
//
//
//
// $(window).resize(function(){
//     resizeVideo();
// });




//Slick Nav hamburger menu
$(function() {
  $('#menu').slicknav();
});




//Pop up
$(document).mouseleave(function() {
  if (firstTimeNotice) {
    firstTimeNotice = false;
    $('#last-call').css('display', 'block');
    $('#notice').addClass('animate');
  }
});

$('.blackout').on('click', function() {
  $('#last-call').css('display', 'none');
});

$('.close').on('click', function() {
  $('#last-call').css('display', 'none');
});
