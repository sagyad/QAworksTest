package LLI.Pages;

import LLI.Elements.LoginPage_Elements;
import org.openqa.selenium.By;

import static org.junit.Assert.assertEquals;

/**
 * Created by Owner on 12/07/2017.
 */
public class LoginPage extends Base {
    LoginPage_Elements loginPage_elements = new LoginPage_Elements();

    public void enterUserNameAndPassword(String username, String password){
        implicitWaitForFewSeconds(5);
        Driver.findElement(By.id(loginPage_elements.username_ByID)).sendKeys(username);
        Driver.findElement(By.id(loginPage_elements.password_ByID)).sendKeys(password);
    }

    public void clickOnLoginLink(){
        implicitWaitForFewSeconds(10);
        Driver.findElement(By.linkText(loginPage_elements.homePageloginlink_ByHREF)).click();

    }

    public void clickOnLoginButton(){
        Driver.findElement(By.id(loginPage_elements.login_ByClass)).click();
    }

    public void verifyLoggedInUser(String username){
        implicitWaitForFewSeconds(60);
        implicitWaitForFewSeconds(30);
        String checkUserName = Driver.findElement(By.cssSelector("strong")).getText();
        assertEquals(username,checkUserName);
    }

}
