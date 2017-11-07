package tests.invalid;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import server.logic.handler.InputHandler;

public class RemoveUserInvaildStepDefs {

	String result;
	InputHandler i = new InputHandler();
	
	@Given("^The user Carlos@carleton\\.ca has not been created$")
	public void the_user_Carlos_carleton_ca_has_not_been_created() throws Throwable {
	}

	@When("^I attempt to remove the user \"([^\"]*)\"$")
	public void i_attempt_to_remove_the_user(String arg1) throws Throwable {
		System.out.println(result = i.processInput(arg1, InputHandler.DELETEUSER).getOutput());
	}

	@Then("^I receive the message \"([^\"]*)\" and cannot remove him$")
	public void i_receive_the_message_and_cannot_remove_him(String arg1) throws Throwable {
		assertThat(result, equalTo(arg1));
	}
}
