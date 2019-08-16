Feature: Brandbar
  In order to verify that lockup shows up correctly
  As an administrative user
  I should be able to change the variant and text in the appearance settings.

  @api
  Scenario: Ensure lockup exists on the front end
    Given I am logged in as a user with the "Administrator" role
    Given I am on the home page
    Then I should see 1 ".su-lockup" element

@api
Scenario: Ensure variant A works
  Given I am logged in as a user with the "Administrator" role
  Given I am on "admin/appearance/settings/stanford_basic"
  Then I fill "Variant A - Line 1" into "Line 1"
  Then I fill "I should not exist" into "Line 2"
  Then I fill "I should not exist" into "Line 3"
  Then I fill "I should not exist" into "Line 4"
  Then I fill "Variant A - Line 5" into "Line 5"
  Given I am on the home page
  Then I should see "Variant A - Line 1" in the "header" region
  Then I should see "Variant A - Line 5" in the "header" region
  Then I should not see "I should not exist" in the "header" region
