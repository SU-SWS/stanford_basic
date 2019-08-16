Feature: Brandbar
  In order to verify that lockup shows up correctly
  As an administrative user
  I should be able to change the variant and text in the appearance settings.

  @api
  Scenario: Ensure lockup exists on the front end
    Given I am logged in as a user with the "Administrator" role
    Given I am on the homepage
    Then I should see 1 ".su-lockup" element

  @api
  Scenario: Ensure variant A works
    Given I am logged in as a user with the "Administrator" role
    Given I am on "admin/appearance/settings/stanford_basic"
    Then I select "Option A" from "Lockup Options"
    Then I fill in "Line 1" with "Variant A - Line 1"
    Then I fill in "Line 2" with ""
    Then I fill in "Line 3" with ""
    Then I fill in "Line 4" with ""
    Then I fill in "Line 5" with "Variant A - Line 5"
    Then I press the "Save configuration" button
    Given I am on the homepage
    Then I should see "Variant A - Line 1"
    Then I should see "Variant A - Line 5"
    Then I should not see a ".su-lockup__line2" element
    Then I should not see a ".su-lockup__line3" element
    Then I should not see a ".su-lockup__line4" element

  @api
  Scenario: Ensure variant B works
    Given I am logged in as a user with the "Administrator" role
    Given I am on "admin/appearance/settings/stanford_basic"
    Then I select "Option B" from "Lockup Options"
    Then I fill in "Line 1" with "Variant B - Line 1"
    Then I fill in "Line 2" with "Variant B - Line 2"
    Then I fill in "Line 3" with ""
    Then I fill in "Line 4" with ""
    Then I fill in "Line 5" with ""
    Then I press the "Save configuration" button
    Given I am on the homepage
    Then I should see "Variant B - Line 1"
    Then I should see "Variant B - Line 2"
    Then I should not see a ".su-lockup__line3" element
    Then I should not see a ".su-lockup__line4" element
    Then I should not see a ".su-lockup__line5" element

  @api
  Scenario: Ensure variant C works
    Given I am logged in as a user with the "Administrator" role
    Given I am on "admin/appearance/settings/stanford_basic"
    Then I select "Option C" from "Lockup Options"
    Then I fill in "Line 1" with "Variant C - Line 1"
    Then I fill in "Line 2" with "Variant C - Line 2"
    Then I fill in "Line 3" with ""
    Then I fill in "Line 4" with ""
    Then I fill in "Line 5" with "Variant C - Line 5"
    Then I press the "Save configuration" button
    Given I am on the homepage
    Then I should see "Variant C - Line 1"
    Then I should see "Variant C - Line 2"
    Then I should see "Variant C - Line 5"
    Then I should not see a ".su-lockup__line3" element
    Then I should not see a ".su-lockup__line4" element

  @api
  Scenario: Ensure variant D works
    Given I am logged in as a user with the "Administrator" role
    Given I am on "admin/appearance/settings/stanford_basic"
    Then I select "Option D" from "Lockup Options"
    Then I fill in "Line 1" with "Variant D - Line 1"
    Then I fill in "Line 2" with ""
    Then I fill in "Line 3" with "Variant D - Line 3"
    Then I fill in "Line 4" with ""
    Then I fill in "Line 5" with ""
    Then I press the "Save configuration" button
    Given I am on the homepage
    Then I should see "Variant D - Line 1"
    Then I should see "Variant D - Line 3"
    Then I should not see a ".su-lockup__line2" element
    Then I should not see a ".su-lockup__line4" element
    Then I should not see a ".su-lockup__line5" element

  @api
  Scenario: Ensure variant E works
    Given I am logged in as a user with the "Administrator" role
    Given I am on "admin/appearance/settings/stanford_basic"
    Then I select "Option E" from "Lockup Options"
    Then I fill in "Line 1" with "Variant E - Line 1"
    Then I fill in "Line 2" with "Variant E - Line 2"
    Then I fill in "Line 3" with "Variant E - Line 3"
    Then I fill in "Line 4" with ""
    Then I fill in "Line 5" with ""
    Then I press the "Save configuration" button
    Given I am on the homepage
    Then I should see "Variant E - Line 1"
    Then I should see "Variant E - Line 2"
    Then I should see "Variant E - Line 3"
    Then I should not see a ".su-lockup__line4" element
    Then I should not see a ".su-lockup__line5" element

  @api
  Scenario: Ensure variant F works
    Given I am logged in as a user with the "Administrator" role
    Given I am on "admin/appearance/settings/stanford_basic"
    Then I select "Option F" from "Lockup Options"
    Then I fill in "Line 1" with "Variant F - Line 1"
    Then I fill in "Line 2" with "Variant F - Line 2"
    Then I fill in "Line 3" with ""
    Then I fill in "Line 4" with ""
    Then I fill in "Line 5" with ""
    Then I press the "Save configuration" button
    Given I am on the homepage
    Then I should see "Variant F - Line 1"
    Then I should see "Variant F - Line 2"
    Then I should not see a ".su-lockup__line3" element
    Then I should not see a ".su-lockup__line4" element
    Then I should not see a ".su-lockup__line5" element

  @api
  Scenario: Ensure variant G works
    Given I am logged in as a user with the "Administrator" role
    Given I am on "admin/appearance/settings/stanford_basic"
    Then I select "Option G" from "Lockup Options"
    Then I fill in "Line 1" with "Variant G - Line 1"
    Then I fill in "Line 2" with "Variant G - Line 2"
    Then I fill in "Line 3" with ""
    Then I fill in "Line 4" with ""
    Then I fill in "Line 5" with "Variant G - Line 5"
    Then I press the "Save configuration" button
    Given I am on the homepage
    Then I should see "Variant G - Line 1"
    Then I should see "Variant G - Line 2"
    Then I should see "Variant G - Line 5"
    Then I should not see a ".su-lockup__line3" element
    Then I should not see a ".su-lockup__line4" element

  @api
  Scenario: Ensure variant H works
    Given I am logged in as a user with the "Administrator" role
    Given I am on "admin/appearance/settings/stanford_basic"
    Then I select "Option H" from "Lockup Options"
    Then I fill in "Line 1" with "Variant H - Line 1"
    Then I fill in "Line 2" with ""
    Then I fill in "Line 3" with "Variant H - Line 3"
    Then I fill in "Line 4" with ""
    Then I fill in "Line 5" with ""
    Then I press the "Save configuration" button
    Given I am on the homepage
    Then I should see "Variant H - Line 1"
    Then I should see "Variant H - Line 3"
    Then I should not see a ".su-lockup__line2" element
    Then I should not see a ".su-lockup__line4" element
    Then I should not see a ".su-lockup__line5" element

  @api
  Scenario: Ensure variant I works
    Given I am logged in as a user with the "Administrator" role
    Given I am on "admin/appearance/settings/stanford_basic"
    Then I select "Option I" from "Lockup Options"
    Then I fill in "Line 1" with "Variant I - Line 1"
    Then I fill in "Line 2" with ""
    Then I fill in "Line 3" with "Variant I - Line 3"
    Then I fill in "Line 4" with ""
    Then I fill in "Line 5" with ""
    Then I press the "Save configuration" button
    Given I am on the homepage
    Then I should see "Variant I - Line 1"
    Then I should see "Variant I - Line 3"
    Then I should not see a ".su-lockup__line2" element
    Then I should not see a ".su-lockup__line4" element
    Then I should not see a ".su-lockup__line5" element

  @api
  Scenario: Ensure variant J works
    Given I am logged in as a user with the "Administrator" role
    Given I am on "admin/appearance/settings/stanford_basic"
    Then I select "Option J" from "Lockup Options"
    Then I fill in "Line 1" with "Variant J - Line 1"
    Then I fill in "Line 2" with "Variant J - Line 2"
    Then I fill in "Line 3" with ""
    Then I fill in "Line 4" with ""
    Then I fill in "Line 5" with "Variant J - Line 5"
    Then I press the "Save configuration" button
    Given I am on the homepage
    Then I should see "Variant J - Line 1"
    Then I should see "Variant J - Line 2"
    Then I should see "Variant J - Line 5"
    Then I should not see a ".su-lockup__line3" element
    Then I should not see a ".su-lockup__line4" element

  @api
  Scenario: Ensure variant K works
    Given I am logged in as a user with the "Administrator" role
    Given I am on "admin/appearance/settings/stanford_basic"
    Then I select "Option K" from "Lockup Options"
    Then I fill in "Line 1" with "Variant K - Line 1"
    Then I fill in "Line 2" with ""
    Then I fill in "Line 3" with ""
    Then I fill in "Line 4" with ""
    Then I fill in "Line 5" with "Variant K - Line 5"
    Then I press the "Save configuration" button
    Given I am on the homepage
    Then I should see "Variant K - Line 1"
    Then I should see "Variant K - Line 5"
    Then I should not see a ".su-lockup__line2" element
    Then I should not see a ".su-lockup__line3" element
    Then I should not see a ".su-lockup__line4" element

  @api
  Scenario: Ensure variant L works
    Given I am logged in as a user with the "Administrator" role
    Given I am on "admin/appearance/settings/stanford_basic"
    Then I select "Option L" from "Lockup Options"
    Then I fill in "Line 1" with "Variant L - Line 1"
    Then I fill in "Line 2" with ""
    Then I fill in "Line 3" with ""
    Then I fill in "Line 4" with ""
    Then I fill in "Line 5" with ""
    Then I press the "Save configuration" button
    Given I am on the homepage
    Then I should see "Variant L - Line 1"
    Then I should not see a ".su-lockup__line2" element
    Then I should not see a ".su-lockup__line3" element
    Then I should not see a ".su-lockup__line4" element
    Then I should not see a ".su-lockup__line5" element

  @api
  Scenario: Ensure variant M works
    Given I am logged in as a user with the "Administrator" role
    Given I am on "admin/appearance/settings/stanford_basic"
    Then I select "Option M" from "Lockup Options"
    Then I fill in "Line 1" with "Variant M - Line 1"
    Then I fill in "Line 2" with "Variant M - Line 2"
    Then I fill in "Line 3" with ""
    Then I fill in "Line 4" with ""
    Then I fill in "Line 5" with ""
    Then I press the "Save configuration" button
    Given I am on the homepage
    Then I should see "Variant M - Line 1"
    Then I should see "Variant M - Line 2"
    Then I should not see a ".su-lockup__line3" element
    Then I should not see a ".su-lockup__line4" element
    Then I should not see a ".su-lockup__line5" element

  @api
  Scenario: Ensure variant N works
    Given I am logged in as a user with the "Administrator" role
    Given I am on "admin/appearance/settings/stanford_basic"
    Then I select "Option N" from "Lockup Options"
    Then I fill in "Line 1" with "Variant N - Line 1"
    Then I fill in "Line 2" with ""
    Then I fill in "Line 3" with ""
    Then I fill in "Line 4" with ""
    Then I fill in "Line 5" with ""
    Then I press the "Save configuration" button
    Given I am on the homepage
    Then I should see "Variant N - Line 1"
    Then I should not see a ".su-lockup__line2" element
    Then I should not see a ".su-lockup__line3" element
    Then I should not see a ".su-lockup__line4" element
    Then I should not see a ".su-lockup__line5" element

  @api
  Scenario: Ensure variant O works
    Given I am logged in as a user with the "Administrator" role
    Given I am on "admin/appearance/settings/stanford_basic"
    Then I select "Option O" from "Lockup Options"
    Then I fill in "Line 1" with ""
    Then I fill in "Line 2" with ""
    Then I fill in "Line 3" with ""
    Then I fill in "Line 4" with "Variant O - Line 4"
    Then I fill in "Line 5" with ""
    Then I press the "Save configuration" button
    Given I am on the homepage
    Then I should see "Variant O - Line 4"
    Then I should not see a ".su-lockup__line1" element
    Then I should not see a ".su-lockup__line2" element
    Then I should not see a ".su-lockup__line3" element
    Then I should not see a ".su-lockup__line5" element

  @api
  Scenario: Ensure variant P works
    Given I am logged in as a user with the "Administrator" role
    Given I am on "admin/appearance/settings/stanford_basic"
    Then I select "Option P" from "Lockup Options"
    Then I fill in "Line 1" with "Variant P - Line 1"
    Then I fill in "Line 2" with ""
    Then I fill in "Line 3" with ""
    Then I fill in "Line 4" with "Variant P - Line 4"
    Then I fill in "Line 5" with ""
    Then I press the "Save configuration" button
    Given I am on the homepage
    Then I should see "Variant P - Line 1"
    Then I should see "Variant P - Line 4"
    Then I should not see a ".su-lockup__line2" element
    Then I should not see a ".su-lockup__line3" element
    Then I should not see a ".su-lockup__line5" element

  @api
  Scenario: Ensure variant Q works
    Given I am logged in as a user with the "Administrator" role
    Given I am on "admin/appearance/settings/stanford_basic"
    Then I select "Option G" from "Lockup Options"
    Then I fill in "Line 1" with "Variant Q - Line 1"
    Then I fill in "Line 2" with ""
    Then I fill in "Line 3" with "Variant Q - Line 3"
    Then I fill in "Line 4" with ""
    Then I fill in "Line 5" with "Variant Q - Line 5"
    Then I press the "Save configuration" button
    Given I am on the homepage
    Then I should see "Variant Q - Line 1"
    Then I should see "Variant Q - Line 3"
    Then I should see "Variant Q - Line 5"
    Then I should not see a ".su-lockup__line2" element
    Then I should not see a ".su-lockup__line4" element

  @api
  Scenario: Ensure variant R works
    Given I am logged in as a user with the "Administrator" role
    Given I am on "admin/appearance/settings/stanford_basic"
    Then I select "Option R" from "Lockup Options"
    Then I fill in "Line 1" with "Variant R - Line 1"
    Then I fill in "Line 2" with ""
    Then I fill in "Line 3" with ""
    Then I fill in "Line 4" with ""
    Then I fill in "Line 5" with ""
    Then I press the "Save configuration" button
    Given I am on the homepage
    Then I should see "Variant R - Line 1"
    Then I should not see a ".su-lockup__line2" element
    Then I should not see a ".su-lockup__line3" element
    Then I should not see a ".su-lockup__line4" element
    Then I should not see a ".su-lockup__line5" element

  @api
  Scenario: Ensure variant S works
    Given I am logged in as a user with the "Administrator" role
    Given I am on "admin/appearance/settings/stanford_basic"
    Then I select "Option S" from "Lockup Options"
    Then I fill in "Line 1" with ""
    Then I fill in "Line 2" with "Variant S - Line 2"
    Then I fill in "Line 3" with ""
    Then I fill in "Line 4" with ""
    Then I fill in "Line 5" with "Variant S - Line 5"
    Then I press the "Save configuration" button
    Given I am on the homepage
    Then I should see "Variant S - Line 2"
    Then I should see "Variant S - Line 5"
    Then I should not see a ".su-lockup__line1" element
    Then I should not see a ".su-lockup__line3" element
    Then I should not see a ".su-lockup__line4" element

  @api
  Scenario: Ensure variant T works
    Given I am logged in as a user with the "Administrator" role
    Given I am on "admin/appearance/settings/stanford_basic"
    Then I select "Option T" from "Lockup Options"
    Then I fill in "Line 1" with "Variant T - Line 1"
    Then I fill in "Line 2" with "Variant T - Line 2"
    Then I fill in "Line 3" with "Variant T - Line 3"
    Then I fill in "Line 4" with "Variant T - Line 4"
    Then I fill in "Line 5" with ""
    Then I press the "Save configuration" button
    Given I am on the homepage
    Then I should see "Variant T - Line 1"
    Then I should see "Variant T - Line 2"
    Then I should see "Variant T - Line 3"
    Then I should see "Variant T - Line 4"
    Then I should not see a ".su-lockup__line5" element
