package tests.invalid;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import server.logic.handler.InputHandler;

public class RemoveTitleInvalidStepDefs {
	String result;
	InputHandler i = new InputHandler();
	
	@Given("^I create the book title \"([^\"]*)\"$")
	public void i_create_the_book_title(String arg1) throws Throwable {
		  System.out.println(i.processInput(arg1, InputHandler.CREATETITLE).getOutput());
	}

	@Given("^I create a copy number with the ISBN number \"([^\"]*)\"$")
	public void i_create_a_copy_number_with_the_ISBN_number(String arg1) throws Throwable {
		 System.out.println(i.processInput(arg1, InputHandler.CREATEITEM).getOutput());
	}
	
	@Given("^I have the user \"([^\"]*)\" borrow$")
	public void i_have_the_user_borrow(String arg1) throws Throwable {
		System.out.println(i.processInput(arg1, InputHandler.BORROW).getOutput());
	}
	
	
	@Given("^I remove the second copy \"([^\"]*)\"$")
	public void i_remove_the_second_copy(String arg1) throws Throwable {
		System.out.println(i.processInput(arg1, InputHandler.DELETEITEM).getOutput());
	}
	
	@When("^I try and remove the title \"([^\"]*)\"$")
	public void i_try_and_remove_the_title(String arg1) throws Throwable {
		System.out.println(result = i.processInput(arg1, InputHandler.DELETETITLE).getOutput());
	}
	
	@Then("^I will recieve the message error \"([^\"]*)\"$")
	public void i_will_recieve_the_message_error(String arg1) throws Throwable {
		assertThat(result, equalTo(arg1));
	}
}
