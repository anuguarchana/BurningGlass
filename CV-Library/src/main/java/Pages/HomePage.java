package Pages;

import Utils.Utils;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class HomePage extends BasePage{
    public HomePage(){
        PageFactory.initElements(driver,this);
    }

    @FindBy(id="keywords")
    WebElement keywordField;
    @FindBy(id="location")
    WebElement locationField;
    @FindBy(id="distance")
    WebElement selectDistance;
    @FindBy(css=".hp-search-more #toggle-hp-search")
    WebElement moreSearchOptions;
    @FindBy(id="salarymin")
    WebElement salaryMinField;
    @FindBy(id="salarymax")
    WebElement salaryMaxField;
    @FindBy(id="salarytype")
    WebElement selectSalaryType;
    @FindBy(id="tempperm")
    WebElement selectJobType;
    @FindBy(id="hp-search-btn")
    WebElement findJobsBtn;
    @FindBy(xpath="//*[@id=\"site-main\"]/div/div[1]/header/div[1]/h1")
    WebElement searchHeaderTitle;

    public void selectKeywordLocationAndDistance(String keyword,String location,String distance){
        keywordField.sendKeys(keyword);
        locationField.sendKeys(location);
        Utils.selectByVisibleText(selectDistance,distance);
    }

    public void moreSearchOptions(){
        Utils.waitForElementVisible(moreSearchOptions,30);
        moreSearchOptions.click();
    }

    public void findJobsWithMoreSearchOptions(String salaryMin, String salaryMax, String salaryType, String jobType){
       salaryMinField.sendKeys(salaryMin);
       salaryMaxField.sendKeys(salaryMax);
       Utils.selectByVisibleText(selectSalaryType, salaryType );
       Utils.selectByVisibleText(selectJobType, jobType);
    }
    public void findJobsBtn(){
        findJobsBtn.click();
    }
    public String searchHeaderTitle(){
        Utils.waitForElementVisible(searchHeaderTitle,30);
        return searchHeaderTitle.getText();

    }

}
