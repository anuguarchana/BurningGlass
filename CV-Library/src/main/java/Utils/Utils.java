package Utils;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

public class Utils extends BrowserFactory {
    public static WebDriverWait wait;

    public static void selectByVisibleText(WebElement element, String value) {
        Select select = new Select(element);
        select.selectByVisibleText(value);
    }
    public static void waitForElementVisible(WebElement element,int time) {
        wait = new WebDriverWait(driver,AutomationConstants.timeout);
        wait.until(ExpectedConditions.visibilityOf(element));
    }
}
