$(window).scroll(function () {
  if ($(window).scrollTop() >= 200) {
    $('#topbar').css('background-color','#2e3131');
  }
  else {
    $('#topbar').css('background-color','transparent');
  }
});

function openGraph(evt, tabName, id) {
  var i, tabcontent, tablinks;
  parent = document.getElementById(id);
  children = parent.childNodes;
  for(var i = 0; i < children.length; i++){
    if(children[i].className && children[i].className.indexOf("tabcontent") != -1) children[i].style.display = "none";
    else if(children[i].className == "tab"){
      var tabs = children[i].childNodes;
      for(var j = 0; j < tabs.length; j++){
        if(tabs[j].className && tabs[j].className.indexOf("tablinks") != -1) tabs[j].className = tabs[j].className.replace(" active", "")

      }
    }
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

var openDefault = document.getElementsByClassName("defaultOpen");

for(var i=0; i < openDefault.length; i++) {
  openDefault[i].click();
}
