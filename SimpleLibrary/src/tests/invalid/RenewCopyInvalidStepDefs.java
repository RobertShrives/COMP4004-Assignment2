package tests.invalid;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import server.logic.handler.InputHandler;

public class RenewCopyInvalidStepDefs {
	InputHandler i = new InputHandler();
	String result;
	
	@Given("^I create the new user \"([^\"]*)\"$")
	public void i_create_the_user(String arg1) throws Throwable {
		System.out.println( i.processInput(arg1, InputHandler.CREATEUSER).getOutput());
	}

	@Given("^I create the new title \"([^\"]*)\"$")
	public void i_create_the_title(String arg1) throws Throwable {
		System.out.println( i.processInput(arg1, InputHandler.CREATETITLE).getOutput());
	}
	
	@Given("^I create a copy \"([^\"]*)\"$")
	public void i_create_a_copy(String arg1) throws Throwable {
		System.out.println( i.processInput(arg1, InputHandler.CREATEITEM).getOutput());
	}

	@When("^I have the user borrow the copy \"([^\"]*)\"$")
	public void i_have_the_user_borrow_the_copy(String arg1) throws Throwable {
		System.out.println( i.processInput(arg1, InputHandler.BORROW).getOutput());
	}

	@When("^I have the user return the copy \"([^\"]*)\"$")
	public void i_have_the_user_return_the_copy(String arg1) throws Throwable {
		System.out.println( i.processInput(arg1, InputHandler.RETURN).getOutput());
	}

	@When("^I have the user renew the copy \"([^\"]*)\"$")
	public void i_have_the_user_renew_the_copy(String arg1) throws Throwable {
		System.out.println(result = i.processInput(arg1, InputHandler.RENEW).getOutput());
	}

	@Then("^I receive the renew message \"([^\"]*)\"$")
	public void i_receive_the_renew_message(String arg1) throws Throwable {
		assertThat(result, equalTo(arg1));
	}
}
