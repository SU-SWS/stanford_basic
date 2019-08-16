Feature: Brandbar
  In order to verify that brandbar shows up correctly
  As an administrative user
  I should be able to change the color variant and see the expected result.

  @api
  Scenario: Ensure brandbar exists on the front end
    Given I am logged in as a user with the "Administrator" role
    Given I am on the home page
    Then I should see 1 ".su-brandbar" element
