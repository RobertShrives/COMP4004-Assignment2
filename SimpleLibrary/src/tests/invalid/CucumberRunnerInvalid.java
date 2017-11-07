package tests.invalid;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin={ "pretty", "html:output/cucumber.html"},
		glue = {"/SimpleLibrary/src/tests"}
		)
public class CucumberRunnerInvalid {

}
