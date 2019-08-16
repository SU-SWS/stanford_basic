Feature: Brandbar
  In order to verify that brandbar shows up correctly
  As an administrative user
  I should be able to change the color variant and see the expected result.

  @api
  Scenario: Ensure brandbar exists on the front end
    Given I am logged in as a user with the "Administrator" role
    Given I am on the homepage
    Then I should see 1 ".su-brand-bar" element

  @api
  Scenario: Ensure variants work
    Given I am logged in as a user with the "Administrator" role
    Given I am on "admin/appearance/settings/stanford_basic"
    Then I select "Bright" from "Brand Bar Variant"
    Then I press the "Save configuration" button
    Given I am on the homepage
    Then I should see 1 ".su-brand-bar--bright" element
    Given I am on "admin/appearance/settings/stanford_basic"
    Then I select "Dark" from "Brand Bar Variant"
    Then I press the "Save configuration" button
    Given I am on the homepage
    Then I should see 1 ".su-brand-bar--dark" element
    Given I am on "admin/appearance/settings/stanford_basic"
    Then I select "White" from "Brand Bar Variant"
    Then I press the "Save configuration" button
    Given I am on the homepage
    Then I should see 1 ".su-brand-bar--white" element
