package tests.invalid;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import server.logic.handler.InputHandler;

public class RemoveItemInvalidStepDefs {
	String result;
	InputHandler i = new InputHandler();
	
	@Given("^I create the title \"([^\"]*)\"$")
	public void i_create_the_title(String arg1) throws Throwable {
	  System.out.println(i.processInput(arg1, InputHandler.CREATETITLE).getOutput());
	}
	
	@Given("^I create a copy with the ISBN number \"([^\"]*)\"$")
	public void i_create_a_copy_with_the_ISBN_number(String arg1) throws Throwable {
		 System.out.println(i.processInput(arg1, InputHandler.CREATEITEM).getOutput());
	}
	
	@Given("^I create the user \"([^\"]*)\"$")
	public void i_create_the_user(String arg1) throws Throwable {
		 System.out.println(i.processInput(arg1, InputHandler.CREATEUSER).getOutput());
	}

	@Given("^The user borrows the title with the information \"([^\"]*)\"$")
	public void the_user_borrows_the_title_with_the_information(String arg1) throws Throwable {
		System.out.println(i.processInput(arg1, InputHandler.BORROW).getOutput());
	}

	@When("^I try and remove \"([^\"]*)\"$")
	public void i_try_and_remove(String arg1) throws Throwable {
		 System.out.println(result = i.processInput(arg1, InputHandler.DELETEITEM).getOutput());
	}

	@Then("^I will recieve the message \"([^\"]*)\"$")
	public void i_will_recieve_the_message(String arg1) throws Throwable {
		assertThat(result, equalTo(arg1));
	}
}
