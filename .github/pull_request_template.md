# NOT READY FOR REVIEW
- (Edit the above to reflect status)

# Summary
- TL;DR - what's this PR for?

# Review By (Date)
- When does this need to be reviewed by?

# Criticality
- How critical is this PR on a 1-10 scale? Also see [Severity Assessment](https://stanfordits.atlassian.net/browse/D8CORE-1705).
- E.g., it affects one site, or every site and product?

# Urgency
- How urgent is this? (Normal, High)

# Review Tasks

## Setup tasks and/or behavior to test

1. Check out this branch
2. Rebuild Cache and import config `drush cr ; drush ci`
3. Navigate to...
4. Verify...

### Site Configuration Sync

- Is there a config:export in this PR that changes the config sync directory?

## Front End Validation
- [ ] Design is approved by @ user?
- [ ] HTML validation: Is the markup using the appropriate semantic tags and [passes validation](https://validator.w3.org/nu/)? Or, [QA request ticket created](https://github.com/SU-SWS/template_warehouse/blob/master/jira_templates/QA_request_template.txt)?
- [ ] Cross-browser testing: Has been performed? Or, [QA request ticket created](https://github.com/SU-SWS/template_warehouse/blob/master/jira_templates/QA_request_template.txt)?
- [ ] Automated accessibility: Scans performed? Or, [QA request ticket created](https://github.com/SU-SWS/template_warehouse/blob/master/jira_templates/QA_request_template.txt)?
- [ ] Manual accessibility: Manually tested? Or, [QA request ticket created](https://github.com/SU-SWS/template_warehouse/blob/master/jira_templates/QA_request_template.txt)?

## Backend / Functional Validation
### Code
- [ ] Are the naming conventions following our standards?
- [ ] Does the code have sufficient inline comments?
- [ ] Is there anything in this code that would be hidden or hard to discover through the UI?
- [ ] Are there any [code smells](https://blog.codinghorror.com/code-smells/)?
- [ ] Are tests provided? eg (unit, behat, or codeception)

### Code security
- [ ] Are all [forms properly sanitized](https://www.drupal.org/docs/8/security/drupal-8-sanitizing-output)?
- [ ] Any obvious [security flaws or new areas for attack](https://www.drupal.org/docs/8/security)?

## General
- [ ] Is there anything included in this PR that is not related to the problem it is trying to solve?
- [ ] Is the approach to the problem appropriate?

# Affected Projects or Products
- Does this PR impact any particular projects, products, or modules?

# Associated Issues and/or People
- JIRA ticket(s)
- Other PRs
- Any other contextual information that might be helpful (e.g., description of a bug that this PR fixes, new functionality that it adds, etc.)
- Anyone who should be notified? (`@mention` them here)

# Resources
- [AMP Tool](https://stanford.levelaccess.net/index.php)
- [Accessibility Manual Test Script](https://docs.google.com/document/d/1ZXJ9RIUNXsS674ow9j3qJ2g1OAkCjmqMXl0Gs8XHEPQ/edit?usp=sharing)
- [HTML Validator](https://validator.w3.org/)
- [Browserstack](https://live.browserstack.com/dashboard) and link to [Browserstack Credentials](https://asconfluence.stanford.edu/confluence/display/SWS/External+Account+Credentials)
