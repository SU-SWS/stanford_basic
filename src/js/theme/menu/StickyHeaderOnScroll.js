var header = document.getElementById('block-stanford-basic-local-tasks');
var sticky = 0;

if (header) {
  sticky = header.getBoundingClientRect().top;
  window.onscroll = function () {
    stickyHeaderOnScroll();
  };
}

function stickyHeaderOnScroll() {
  var toolbarHeight = 0;
  var toolbarOpen = document.body.classList.contains('toolbar-tray-open');

  if (toolbarOpen === true) {
    toolbarHeight = 79;
  }
  else {
    toolbarHeight = 39;
  }

  if (window.pageYOffset >= sticky - toolbarHeight) {
    header.classList.add('sticky');
    header.style.marginTop = toolbarHeight + 'px';
  }
  else {
    header.classList.remove('sticky');
    header.style.marginTop = '0px';
  }
}
