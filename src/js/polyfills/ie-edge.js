// All the polyfills.
require('@babel/polyfill');

// IE11 Fix for Element.matches
// See: https://www.npmjs.com/package/element-matches-polyfill
require('element-matches-polyfill');

// Polyfill - :scope in IE/Edge.
import 'element-qsa-scope';

// Polyfill for Object.assign function.
// See: https://stackoverflow.com/questions/35215360/getting-error-object-doesnt-support-property-or-method-assign
require('es6-object-assign').polyfill();

// https://www.npmjs.com/package/element-closest-polyfill
require('element-closest-polyfill');
