package tests.invalid;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import server.logic.handler.InputHandler;
import server.logic.handler.OutputHandler;

public class AddItemInvalidStepDefs {
	String result;
	InputHandler i = new InputHandler();
	OutputHandler o = new OutputHandler();
	
	@Given("^that the title and ISBN does not exist$")
	public void that_the_title_and_ISBN_does_not_exist() throws Throwable {
		System.out.print("Does not exist");
	}

	@When("^I create a copy with the ISBN \"([^\"]*)\"$")
	public void i_create_a_copy_with_the_ISBN(String arg1) throws Throwable {
		result = i.processInput(arg1, InputHandler.CREATEITEM).getOutput();
	}

	@Then("^creation of the copy for the title fails and the message \"([^\"]*)\" is displayed$")
	public void creation_of_the_copy_for_the_title_fails_and_the_message_is_displayed(String arg1) throws Throwable {
		assertThat(result, equalTo(arg1));
	}
}
