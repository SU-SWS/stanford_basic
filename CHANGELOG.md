# Stanford Basic Theme

8.x-4.1
--------------------------------------------------------------------------------  
_Release Date: 2020-02-14_

- D8CORE-1260: Table Style Revisions (#127)
- D8CORE-1024: Template and styles for login portal style page (#124)
- Updated to Decanter 6.0.3
- D8CORE-1082: Search Results Page (#128)
- D8CORE-1286: Search page title styles (#131)

8.x-4.0
--------------------------------------------------------------------------------  
_Release Date: 2020-02-05_
- Stable release!
- Massive improvements to accessibility and HTML semantics.
- D8CORE-1012: Center images in the WYSIWYG.
- Revisions to main and secondary navigation look and feel.
- Removed use of the `pattern()` twig function to remove the dependency on ui_patterns module.
- Added `@basic-dist` twig namespace.
- Fixed bug where all the status messages were of the same type.
- Fixed bugs where attributes were duplicated.
- D8CORE-931: Revisions to skip links where you can skip to content or secondary navigation.
- Added default GitHub issue/feature/pull-request templates.
- D8CORE-1099: Added z-index to the masthead to keep the shadow on top.
- D8CORE-1231: Fixed bug on footer closing tag.
- D8CORE-941: Moved WYSIWYG paragraph styles to stanford_profile where they belong.
- Updated Decanter to version 6.0.1 which removed many layout templates from dist.

8.x-4.0-alpha3
--------------------------------------------------------------------------------  
_Release Date: 2020-01-22_

- D8CORE-59: Added global Google analytics tracker for Acquia (#100)
- Move everything inside canvas-wrapper and add global footer region for outside content items (#102)
- D8CORE-856 Display paragraph contextual links (#106)
- D8CORE-941: drop cap styles (#108)
- D8CORE-941: Headings and styles (#109) center caption on image & change modular-spacing calls
- Add dist/templates to @basic twig namespace.

8.x-4.0-alpha2
--------------------------------------------------------------------------------  
_Release Date: 2019-11-13_

- New html element wrappers around regions in page.html.twig.
- Added css classes to node.html.twig
- Fixed issue with role='article' on <article> in node.html.twig
- Refactored and rebuilt both the primary and secondary navigations to use new multi-menu component.
- Cleanup from codeclimate linting.
- Added codeclimate and eslint files.

8.x-4.0-alpha1
--------------------------------------------------------------------------------  
_Release Date: 2019-10-30_

- Initial Release. Yes, really.
