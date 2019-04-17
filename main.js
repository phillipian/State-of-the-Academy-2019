$(window).scroll(function () {
  if ($(window).scrollTop() >= 200) {
    $('#topbar').css('background-color','#2e3131');
  }
  else {
    $('#topbar').css('background-color','transparent');
  }
});
