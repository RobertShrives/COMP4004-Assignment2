package tests.valid;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import server.logic.handler.InputHandler;

public class AddTitleValidStepDefs {
	String result;
	InputHandler i = new InputHandler();
	@Given("^that the title does not exist$")
	public void that_the_title_does_not_exist() throws Throwable {

	}

	@When("^trying to create title \"([^\"]*)\"$")
	public void trying_to_create_title(String arg1) throws Throwable {
		System.out.println(result = i.processInput(arg1, InputHandler.CREATETITLE).getOutput());
	}
	
	@Then("^The message -\"([^\"]*)\" is displayed$")
	public void the_message_is_displayed(String arg1) throws Throwable {
		assertThat(result, equalTo(arg1));
	}



}
