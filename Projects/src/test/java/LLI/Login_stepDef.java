

package LLI;

import LLI.Pages.Base;
import LLI.Pages.LoginPage;
import cucumber.api.java.en.*;
import cucumber.api.PendingException;
import org.openqa.jetty.html.Page;


/**
 * Created by Owner on 11/07/2017.
 */
public class Login_stepDef {
    Base base = new Base();
    LoginPage loginPage = new LoginPage();

    @Given("^I am on lloydslist site$")

    public void i_am_on_lloydslist_site() throws Throwable {
        base.launch_URL();
        base.implicitWaitForFewSeconds(5);
        loginPage.clickOnLoginLink();
    }

    @Given("^I enter username as \"([^\"]*)\" and password as \"([^\"]*)\"$")
    public void i_enter_username_as_and_password_as(String uname, String pass) throws Throwable {
        loginPage.enterUserNameAndPassword(uname,pass);
    }

    @When("^I click on Login button$")
    public void i_click_on_Login_button() throws Throwable {
        loginPage.clickOnLoginButton();
    }

    @Then("^I should get message Logged in as \"([^\"]*)\"$")
    public void i_should_get_message_Logged_in_as(String username) throws Throwable {
        loginPage.verifyLoggedInUser(username);
    }
}
