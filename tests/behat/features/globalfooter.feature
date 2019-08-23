Feature: Brandbar
  In order to verify that global footer shows up correctly
  As an end user
  I should be able to see the brand bar at the bottom of each page.

  @api
  Scenario: Ensure global footer exists on the front end
    Given I am on the homepage
    Then I should see 1 ".su-global-footer" element
