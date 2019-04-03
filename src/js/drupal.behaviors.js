// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function (Drupal, $, window) {

  // To understand behaviors, see https://www.drupal.org/node/2269515
  Drupal.behaviors.stanford_basic = {
    attach: function (context, settings) {

    }
  };

} (Drupal, jQuery, this));
