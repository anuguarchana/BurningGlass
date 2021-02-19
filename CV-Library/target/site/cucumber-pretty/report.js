$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("SearchJobsUsingMoreSearchOption.feature");
formatter.feature({
  "line": 1,
  "name": "Find jobs by using more search options",
  "description": "As a user\r\nI need to search jobs as per my requirement\r\nso that I can find jobs",
  "id": "find-jobs-by-using-more-search-options",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "",
  "description": "",
  "id": "find-jobs-by-using-more-search-options;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@SearchJob"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I navigate to Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter Keywords / Job Title / Job Ref as \"\u003cKeywords / Job Title / Job Ref\u003e\" , Location as \"\u003cLocation\u003e\" and Distance as \"\u003cDistance\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on More Search Options",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Salary Min as \"\u003cSalary Min\u003e\", Salary Max as \"\u003cSalary Max\u003e\", Salary Type as \"\u003cSalary Type\u003e\" and Job Type as \"\u003cJob Type\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find jobs",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see jobs based on my search criteria as \"\u003cExpected search title\u003e\".",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "find-jobs-by-using-more-search-options;;",
  "rows": [
    {
      "cells": [
        "Keywords / Job Title / Job Ref",
        "Location",
        "Distance",
        "Salary Min",
        "Salary Max",
        "Salary Type",
        "Job Type",
        "Expected search title"
      ],
      "line": 16,
      "id": "find-jobs-by-using-more-search-options;;;1"
    },
    {
      "cells": [
        "Automation Test Engineer",
        "Reading",
        "up to 15 miles",
        "30k",
        "50k",
        "Per annum",
        "Permanent",
        "Permanent Automation Test Engineer jobs in Reading"
      ],
      "line": 17,
      "id": "find-jobs-by-using-more-search-options;;;2"
    },
    {
      "cells": [
        "Test Analyst",
        "London",
        "up to 5 miles",
        "300",
        "600",
        "Per month",
        "Contract",
        "Contract Test Analyst jobs in London"
      ],
      "line": 18,
      "id": "find-jobs-by-using-more-search-options;;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 20600372100,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "",
  "description": "",
  "id": "find-jobs-by-using-more-search-options;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@SearchJob"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I navigate to Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter Keywords / Job Title / Job Ref as \"Automation Test Engineer\" , Location as \"Reading\" and Distance as \"up to 15 miles\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on More Search Options",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Salary Min as \"30k\", Salary Max as \"50k\", Salary Type as \"Per annum\" and Job Type as \"Permanent\"",
  "matchedColumns": [
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find jobs",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see jobs based on my search criteria as \"Permanent Automation Test Engineer jobs in Reading\".",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchJobsUsingMoreSearchOptionSteps.i_navigate_to_Home_page()"
});
formatter.result({
  "duration": 1617245800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Automation Test Engineer",
      "offset": 43
    },
    {
      "val": "Reading",
      "offset": 84
    },
    {
      "val": "up to 15 miles",
      "offset": 110
    }
  ],
  "location": "SearchJobsUsingMoreSearchOptionSteps.i_enter_Keywords_Job_Title_Job_Ref_as_Location_as_and_Distance_as(String,String,String)"
});
formatter.result({
  "duration": 991813400,
  "status": "passed"
});
formatter.match({
  "location": "SearchJobsUsingMoreSearchOptionSteps.i_click_on_More_Search_Options()"
});
formatter.result({
  "duration": 401767000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "30k",
      "offset": 23
    },
    {
      "val": "50k",
      "offset": 44
    },
    {
      "val": "Per annum",
      "offset": 66
    },
    {
      "val": "Permanent",
      "offset": 94
    }
  ],
  "location": "SearchJobsUsingMoreSearchOptionSteps.i_enter_Salary_Min_as_Salary_Max_as_Salary_Type_as_and_Job_Type_as(String,String,String,String)"
});
formatter.result({
  "duration": 1012114800,
  "status": "passed"
});
formatter.match({
  "location": "SearchJobsUsingMoreSearchOptionSteps.i_click_on_Find_jobs()"
});
formatter.result({
  "duration": 232372100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Permanent Automation Test Engineer jobs in Reading",
      "offset": 50
    }
  ],
  "location": "SearchJobsUsingMoreSearchOptionSteps.i_should_see_jobs_based_on_my_search_criteria_as(String)"
});
formatter.result({
  "duration": 2995573600,
  "status": "passed"
});
formatter.after({
  "duration": 44500,
  "status": "passed"
});
formatter.before({
  "duration": 17085288200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "",
  "description": "",
  "id": "find-jobs-by-using-more-search-options;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 6,
      "name": "@SearchJob"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "I navigate to Home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter Keywords / Job Title / Job Ref as \"Test Analyst\" , Location as \"London\" and Distance as \"up to 5 miles\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on More Search Options",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter Salary Min as \"300\", Salary Max as \"600\", Salary Type as \"Per month\" and Job Type as \"Contract\"",
  "matchedColumns": [
    3,
    4,
    5,
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on Find jobs",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I should see jobs based on my search criteria as \"Contract Test Analyst jobs in London\".",
  "matchedColumns": [
    7
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SearchJobsUsingMoreSearchOptionSteps.i_navigate_to_Home_page()"
});
formatter.result({
  "duration": 16975900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Test Analyst",
      "offset": 43
    },
    {
      "val": "London",
      "offset": 72
    },
    {
      "val": "up to 5 miles",
      "offset": 97
    }
  ],
  "location": "SearchJobsUsingMoreSearchOptionSteps.i_enter_Keywords_Job_Title_Job_Ref_as_Location_as_and_Distance_as(String,String,String)"
});
formatter.result({
  "duration": 766468200,
  "status": "passed"
});
formatter.match({
  "location": "SearchJobsUsingMoreSearchOptionSteps.i_click_on_More_Search_Options()"
});
formatter.result({
  "duration": 317813800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "300",
      "offset": 23
    },
    {
      "val": "600",
      "offset": 44
    },
    {
      "val": "Per month",
      "offset": 66
    },
    {
      "val": "Contract",
      "offset": 94
    }
  ],
  "location": "SearchJobsUsingMoreSearchOptionSteps.i_enter_Salary_Min_as_Salary_Max_as_Salary_Type_as_and_Job_Type_as(String,String,String,String)"
});
formatter.result({
  "duration": 1065767100,
  "status": "passed"
});
formatter.match({
  "location": "SearchJobsUsingMoreSearchOptionSteps.i_click_on_Find_jobs()"
});
formatter.result({
  "duration": 252868100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contract Test Analyst jobs in London",
      "offset": 50
    }
  ],
  "location": "SearchJobsUsingMoreSearchOptionSteps.i_should_see_jobs_based_on_my_search_criteria_as(String)"
});
formatter.result({
  "duration": 4383225800,
  "status": "passed"
});
formatter.after({
  "duration": 31900,
  "status": "passed"
});
});