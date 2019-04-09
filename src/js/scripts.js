/**
 * @file
 * A Webpack entry file for the theme.
 */

// Decanter.
import 'Decanter';

// Vendor Code.
import "./vendor/selectivizr-min.js";

// Theme code.
import "./drupal.behaviors.js";

// Theme styles for webpack.
import "../scss/base/index.scss";
