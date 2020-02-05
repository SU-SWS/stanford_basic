# [Stanford Basic](https://github.com/SU-SWS/stanford_basic)
##### Version: 8.x

Changelog: [Changelog.txt](CHANGELOG.txt)

Description
---

Stanford Basic is a Stanford Branded Drupal 8 base theme that integrates with the [Decanter Project](https://github.com/SU-SWS/decanter).

Accessibility
---
[![WCAG Conformance 2.0 AA Badge](https://www.w3.org/WAI/wcag2AA-blue.png)](https://www.w3.org/TR/WCAG20/)
Evaluation Date: 2020-02-05  
This theme conforms to level AA WCAG 2.0 standards as required by the university's accessibility policy. For more information on the policy please visit: [https://ucomm.stanford.edu/policies/accessibility-policy.html](https://ucomm.stanford.edu/policies/accessibility-policy.html).

Installation
---

Install this theme like any other theme. [See Drupal Documentation](https://www.drupal.org/docs/8/extending-drupal-8/installing-themes)

Configuration
---

Nothing special needed. Install, enable, and set as the default active theme. Once you have the theme enabled, be sure to check out the appearance settings for additional configuration items.


Troubleshooting
---

If you are experiencing issues with this theme try disabling and clear the cache first. If you are still experiencing issues try posting an issue on the GitHub issues page.

This theme is not intended to be used as an administration theme. Please use something else for that.

Developer
---

Development tools: To build and compile the CSS, Javascript, and Image assets required to make this theme great, you will need to have npm and nvm installed.
Navigate to the root of the theme then.

Run:
```
nvm use
npm install
```

This project uses webpack to assemble the assets for this theme. To compile sass, javascript and push all assets in to place:

Run:
```
npm run publish
```

This script will compile all assets from `/src` into `/dist`.

Check out `package.json` for additional npm scripts and functionality.

Contribution / Collaboration
---

You are welcome to contribute functionality, bug fixes, or documentation to this theme. If you would like to suggest a fix or new functionality you may add a new issue to the GitHub issue queue or you may fork this repository and submit a pull request. For more help please see [GitHub's article on fork, branch, and pull requests](https://help.github.com/articles/using-pull-requests)
