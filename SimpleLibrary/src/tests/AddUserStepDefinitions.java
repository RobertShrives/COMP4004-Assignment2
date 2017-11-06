package tests;

import cucumber.api.PendingException;
import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import server.logic.handler.InputHandler;
import server.logic.handler.OutputHandler;
import server.logic.handler.model.Client;
import server.logic.tables.UserTable;
import server.network.ServerThread;

public class AddUserStepDefinitions {
	InputHandler i = new InputHandler();
	String result;
	
	
	@Given("^that Mike@carleton\\.ca already exists$")
	public void that_Mike_carleton_ca_already_exists() throws Throwable {
		i.processInput("Mike@carleton.ca,pass", i.CREATEUSER).getOutput();
		
	}

	@When("^trying to create Mike@carleton\\.ca again$")
	public void trying_to_create_Mike_carleton_ca_again() throws Throwable {
		result =  i.processInput("Mike@carleton.ca,pass", i.CREATEUSER).getOutput();
	}

	@Then("^I receive the message \"([^\"]*)\"$")
	public void i_receive_the_message(String arg1) throws Throwable {
		assertThat(result, equalTo(arg1));

	}
}

