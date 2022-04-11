Feature: Sample scenarios for testing TS functionality

  Scenario: Say hello
    When the greeter says hello
    Then I should have heard "hello"

 Scenario: Googling remarkablemark.
    Given I am on the Google homepage
    When I search for "remarkablemark"
    Then the page title is "remarkablemark - Google Search"
