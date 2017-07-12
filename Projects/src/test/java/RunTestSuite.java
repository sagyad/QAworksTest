import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

/**
 * Created by Owner on 11/07/2017.
 */

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src\\test\\resources",
        tags = {"@suite", "~@wip"},
        format = {"pretty", "html:target/htmlreport"}

)

public class RunTestSuite {


}
