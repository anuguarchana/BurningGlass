package StepDifinitions;

import Pages.BasePage;
import Pages.HomePage;
import Utils.BrowserFactory;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class SearchJobsUsingMoreSearchOptionSteps {

    @Before
    public void setUp() {
        BrowserFactory.startBrowser();
    }

    @After
    public void cleanUp() {
        //  BrowserFactory.stopBrowser();
    }

    public BasePage basePage;
    public HomePage homePage;

   @Given("^I navigate to Home page$")
   public void i_navigate_to_Home_page() {
       basePage=new BasePage();
       String acttitle=basePage.getTitle();
       Assert.assertEquals(acttitle,"Job Search - Find 175,000 UK jobs on CV-Library");
       //Assert.assertEquals(acttitle, "My Store");
   }
    @When("^I enter Keywords / Job Title / Job Ref as \"([^\"]*)\" , Location as \"([^\"]*)\" and Distance as \"([^\"]*)\"$")
    public void i_enter_Keywords_Job_Title_Job_Ref_as_Location_as_and_Distance_as(String kwd, String lctn, String dist) {
        homePage=new HomePage();
        homePage.selectKeywordLocationAndDistance(kwd,lctn,dist);
    }
    @When("^I click on More Search Options$")
    public void i_click_on_More_Search_Options(){
        homePage.moreSearchOptions();
    }

    @When("^I enter Salary Min as \"([^\"]*)\", Salary Max as \"([^\"]*)\", Salary Type as \"([^\"]*)\" and Job Type as \"([^\"]*)\"$")
    public void i_enter_Salary_Min_as_Salary_Max_as_Salary_Type_as_and_Job_Type_as(String minSalary, String maxSalary, String salaryType, String jobType) {
        homePage.findJobsWithMoreSearchOptions(minSalary,maxSalary,salaryType,jobType);
    }


    @When("^I click on Find jobs$")
    public void i_click_on_Find_jobs() {
        homePage.findJobsBtn();
    }

    @Then("^I should see jobs based on my search criteria as \"([^\"]*)\"\\.$")
    public void i_should_see_jobs_based_on_my_search_criteria_as(String searchTitle)  {
       Assert.assertEquals(searchTitle,homePage.searchHeaderTitle());
    }

}
