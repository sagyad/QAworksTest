package LLI.Pages;

import LLI.Utility.Browsers;
import org.openqa.selenium.WebDriver;

import java.awt.image.DirectColorModel;
import java.util.concurrent.TimeUnit;

/**
 * Created by Owner on 11/07/2017.
 */
public class Base {

    WebDriver Driver =  Browsers.driver(Browsers.BrowserType.CHROME);

    public static String URL = "http://www.lloydslistintelligence.com/llint/index.htm";

    public void launch_URL(){
        Driver.manage().window().maximize();
        Driver.get(URL);
    }

    public void implicitWaitForFewSeconds(int sec){
        Driver.manage().timeouts().implicitlyWait(sec, TimeUnit.SECONDS);
    }
}
