/**
 * Behavior Example that works with Webpack.
 *
 * @see: https://www.npmjs.com/package/drupal-behaviors-loader
 *
 * Webpack wraps everything in enclosures and hides the global variables from
 * scripts so special handling is needed.
 */

export default {

  // Attach Drupal Behavior.
  attach(context, settings) {
    (function ($) {
      // Validate there is a skip link anchor for the main content. If not,
      // default to #page-content.
      var $mc = $('#main-content').length;
      if (!$mc) {
        $('.su-skipnav--content').attr('href', '#page-content');
      }

      // Validate there is a skip link for the secondary navigation. If not,
      // remove the skip link.
      var $sn = $('#secondary-navigation').length;
      if (!$sn) {
        $('.su-skipnav--secondary').remove();
      }
    })(jQuery);
  },

  // Detach Example.
  detach() {
    // console.log("Detached.");
  }
};
