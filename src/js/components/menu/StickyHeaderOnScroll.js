window.onscroll = function () {
  stickyHeaderOnScroll();
};

var header = document.getElementById('block-stanford-basic-local-tasks'),
  sticky = header.getBoundingClientRect().top;

function stickyHeaderOnScroll() {
  var toolbarHeight = document.getElementById('toolbar-administration')
      .offsetHeight,
    toolbarOpen = document.body.classList.contains('toolbar-tray-open');
  console.log('Toolbar Status:' + toolbarOpen);
  if (window.pageYOffset >= sticky - toolbarHeight) {
    header.classList.add('sticky');
    if (toolbarOpen === false) {
      header.style.marginTop = '39px';
    } else if (toolbarOpen === true) {
      header.style.marginTop = '79px';
    }
  } else {
    header.classList.remove('sticky');
    header.style.marginTop = '0';
  }
}
