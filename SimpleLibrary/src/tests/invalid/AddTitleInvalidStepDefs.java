package tests.invalid;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import server.logic.handler.InputHandler;

public class AddTitleInvalidStepDefs {
	String result;
	InputHandler i = new InputHandler();
	
	@Given("^that the title \"([^\"]*)\" already exist$")
	public void that_the_title_already_exist(String arg1) throws Throwable {
		System.out.println(i.processInput(arg1, InputHandler.CREATETITLE).getOutput());
	}

	@When("^I try to create a title \"([^\"]*)\" again$")
	public void i_try_to_create_a_title_again(String arg1) throws Throwable {
		System.out.println(result = i.processInput(arg1, InputHandler.CREATETITLE).getOutput());
	}
		
	@Then("^I will receive the message \"([^\"]*)\"$")
	public void i_will_receive_the_message(String arg1) throws Throwable {
		assertThat(result, equalTo(arg1));
	}
}
