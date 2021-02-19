Feature: Find jobs by using more search options
  As a user
  I need to search jobs as per my requirement
  so that I can find jobs

@SearchJob
  Scenario Outline:
    Given I navigate to Home page
    When I enter Keywords / Job Title / Job Ref as "<Keywords / Job Title / Job Ref>" , Location as "<Location>" and Distance as "<Distance>"
    And  I click on More Search Options
    And I enter Salary Min as "<Salary Min>", Salary Max as "<Salary Max>", Salary Type as "<Salary Type>" and Job Type as "<Job Type>"
    And I click on Find jobs
    Then I should see jobs based on my search criteria as "<Expected search title>".

  Examples:
  | Keywords / Job Title / Job Ref | Location | Distance       | Salary Min | Salary Max | Salary Type | Job Type  | Expected search title                              |
  |   Automation Test Engineer     |  Reading | up to 15 miles |    30k     |     50k    | Per annum   | Permanent | Permanent Automation Test Engineer jobs in Reading |
  |   Test Analyst                 |  London  | up to 5 miles  |    300     |     600    | Per month   | Contract  | Contract Test Analyst jobs in London |


