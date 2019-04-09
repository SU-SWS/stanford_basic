/**
 * Behavior Example that works with Webpack.
 *
 * @see: https://www.npmjs.com/package/drupal-behaviors-loader
 *
 * Webpack wraps everything in enclosures and hides the global variables from
 * scripts so special handling is needed.
 */

import * as Decanter from 'Decanter';

 export default {

   // Attach Drupal Behavior.
   attach (context, settings) {
     console.log(Decanter);
   },

   // Detach Example.
   detach () {
     console.log("Detached.");
   }
 }
