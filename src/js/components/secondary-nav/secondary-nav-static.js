import SecondaryNavStatic from './static/SecondaryNavStatic';
document.addEventListener('DOMContentLoaded', event => {
  var secondaryNavs = document.querySelectorAll('.su-secondary-nav');
  secondaryNavs.forEach((nav, index) => {
    if (nav.className.match(/su-secondary-nav--static/)) {
      var options = {
        expand: false,
        activeTrail: false
      };
      new SecondaryNavStatic(nav, options);
    }
  });
});
