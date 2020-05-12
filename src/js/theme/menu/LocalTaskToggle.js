var localTab = document.getElementById('block-stanford-basic-local-tasks');
var pageContent = document.getElementById('page-content');

function localTaskToggle() {
  console.log(pageContent);
  if (localTab) {
    pageContent.parentNode.classList.add('outline');
  }
}

window.onload = localTaskToggle;
