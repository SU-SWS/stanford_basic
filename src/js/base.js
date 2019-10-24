/**
 * @file
 * A Webpack entry file for the theme.
 */

// My config overrides.
// This needs to be before the decanter.js so we can set the appropriate
// variables like $su-image-path.
import "../scss/config/index.scss";

// Include Decanter.
import "decanter/core/src/js/decanter.js";

// My base styles.
// It is important that this comes after the decanter.js as it is lower in the
// css cascade and allows us to override Decanter core features.
import "../scss/base/index.scss";
