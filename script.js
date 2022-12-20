$(document).ready(function() {

  /* 반복되게 하기 */
  setInterval(function() {

    /* 시간 설정, 1000 = 1초 */
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();

    var years = now.getFullYear();
    var months = now.getMonth();
    var dates = now.getDate();

    if (hours < 10) {
      hours = '0' + hours;
    }

    if (minutes < 10) { 
      minutes = '0' + minutes;
    }

    if (seconds < 10) {
      seconds = '0' + seconds;
    }

    $('.clock').text(
      hours + ':' + minutes + ':' + seconds
      );
    $('.today').text(
      years + "-" + months + "-" + dates
      );
  }, 1000);

});




// $(document).ready(function() {
//   setInterval(function() {
//     var now = new Date();
//     var hours = now.getHours();
//     var minutes = now.getMinutes();
//     var seconds = now.getSeconds();

//     if(hours < 10) {
//       hours = '0' + hours;
//     }

//     if(minutes < 10) {
//       minutes = '0' + minutes;
//     }

//     if(seconds < 10) {
//       seconds = '0' + seconds;
//     }

//     $('.hours').text(hours).css({
//       'font-size': hours / 2 + 'vw'
//     });

//     $('.minutes').text(minutes).css({
//       'font-size': minutes / 2 + 'vw'
//     });

//     $('.seconds').text(seconds).css({
//       'font-size': seconds / 2 + 'vw'
//     });
//   }, 1000);
// });