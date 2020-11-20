
INTRODUCTION
------------
This document describes how to update your theme when the theme changes.

8.x-4.13 -> 8.x-4.14
----------------

*Contextual links*
This theme provided contextual links for ds entity view display modes. For Drupal 9, a `pre_render` call must be
a method in a class that implements `\Drupal\Core\Security\TrustedCallbackInterface`. To allow this theme to be
installed on Drupal 9 platform, the contextual links were removed. If it is desired to have those links, create a
class that implements `TrustedCallbackInterface` and follow the documentation for that [on drupal.org](https://www.drupal.org/node/2966725).
