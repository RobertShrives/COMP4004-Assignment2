package tests.invalid;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import server.logic.handler.InputHandler;

public class AddUserInvaildStepDefs {
	InputHandler i = new InputHandler();
	String result;
	
	@Given("^that \"([^\"]*)\" already exists$")
	public void that_already_exists(String arg1) throws Throwable {
		i.processInput(arg1, InputHandler.CREATEUSER).getOutput();
	}

	@When("^trying to create \"([^\"]*)\" again$")
	public void trying_to_create_again(String arg1) throws Throwable {
		result =  i.processInput(arg1, InputHandler.CREATEUSER).getOutput();
	}


	@Then("^I receive the message \"([^\"]*)\"$")
	public void i_receive_the_message(String arg1) throws Throwable {
		assertThat(result, equalTo(arg1));

	}
}
