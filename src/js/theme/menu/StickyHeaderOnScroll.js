window.onscroll = function () {
  stickyHeaderOnScroll();
};

function stickyHeaderOnScroll() {
  var authenticated = document.body.classList.contains('role--authenticated');
  var header = document.getElementById('block-stanford-basic-local-tasks');
  var toolbarHeight = 0;
  var toolbarOpen = document.body.classList.contains('toolbar-tray-open');

  if (authenticated) {
    var sticky = header.getBoundingClientRect().top;
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
}
