/**
 * @file
 * A Webpack entry file for the theme.
 */

 // Include Decanter.
 // Right now we import the components as the main decanter.js file always
 // imports all of the SASS and we want to make changes to it before we render.
 import "decanter/core/src/js/components/components.js";

 // MY Base SCSS styles.
 import "../scss/base/index.scss";
