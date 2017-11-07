package tests.valid;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import server.logic.handler.InputHandler;

public class AddUserValidStepDefs {
	String result;
	InputHandler i = new InputHandler();
	
	@Given("^that Joe@carleton\\.ca,pass does not exist$")
	public void that_Mike_carleton_ca_pass_does_not_exist() throws Throwable {
	    
	}

	@When("^trying to create \"([^\"]*)\"$")
	public void trying_to_create(String arg1) throws Throwable {
		 System.out.println(result = i.processInput(arg1, InputHandler.CREATEUSER).getOutput());
	}
	
	@When("^I remove the new user \"([^\"]*)\"$")
	public void i_remove_the_new_user(String arg1) throws Throwable {
		 System.out.println(result = i.processInput(arg1, InputHandler.DELETEUSER).getOutput());
	}
	
	@Then("^The message \"([^\"]*)\" is displayed$")
	public void the_message_is_displayed(String arg1) throws Throwable {
		assertThat(result, equalTo(arg1));
	}
	
}
