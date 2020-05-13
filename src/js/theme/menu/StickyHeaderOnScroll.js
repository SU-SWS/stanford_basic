var header = document.getElementById('block-stanford-basic-local-tasks');
var sticky = 0;

if (header) {
  sticky = header.getBoundingClientRect().top;
  window.onscroll = function () {
    stickyHeaderOnScroll();
  };
}

/**
 * Stick the local block tasks to the top of the window.
 */
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
