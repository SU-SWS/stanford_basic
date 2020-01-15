import SecondaryNavStatic from './SecondaryNavStatic';

document.addEventListener('DOMContentLoaded', event => {
  var secondaryNavs = document.querySelectorAll('.su-secondary-nav');
  secondaryNavs.forEach((nav, index) => {
    if (nav.className.match(/su-secondary-nav/)) {
      new SecondaryNavStatic(nav);
    }
  });

});
