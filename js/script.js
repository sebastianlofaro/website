
var $video  = $('video'),
    firstTimeNotice = true,
    $window = $(window),
    $countdown = $("#countdown"),
    countdownDate = new Date("May 5, 2017 15:00:00").getTime();


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


//Count down timer
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countdownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  $countdown.text(days + " : " + hours + " : " + minutes + " : " + seconds);
}, 1000);
