$(window).scroll(function () {
  if ($(window).scrollTop() >= 200) {
    $('#topbar').css('background-color','#2e3131');
  }
  else {
    $('#topbar').css('background-color','transparent');
  }
});

function openGraph(evt, tabName) {  //function overrides - DOM with the div - nthChild
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

document.getElementById("defaultOpen").click();
// document.getElementById("defaultOpen2").click();
