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
      var $mc = $('#main-content', context).length;
      if (!$mc) {
        $('.su-skipnav--content', context).attr('href', '#page-content');
      }

      // Validate there is a skip link for the secondary navigation. If not,
      // remove the skip link.
      var $sn = $('#secondary-navigation', context).length;
      if (!$sn) {
        $('.su-skipnav--secondary', context).remove();
      }

      // Check for search box and move the second block to the mobile navigation.
      // Hide it and then only show for mobile sites.
      var $search = $('.su-masthead .su-site-search', context).length;
      if ($search) {
        var $ms = $('.su-masthead .su-site-search', context);
        $($ms.clone()).prependTo('.su-masthead .su-multi-menu > ul', context).wrap('<li></li>');
      }

      // Add an outline class to the page-content region if local tasks are
      // available.
      var localTab = $('#block-stanford-basic-local-tasks', context);
      if (localTab.length) {
        $('.page-content', context).addClass('stanford-basic--outline');
      }

      var userLogin = $('.page-user-login', context);
      if (userLogin) {
        $('.su-back-to-site', context).removeClass('hidden');
      }

    })(jQuery);
  },

  // Detach Example.
  detach() {
    // console.log("Detached.");
  }
};
