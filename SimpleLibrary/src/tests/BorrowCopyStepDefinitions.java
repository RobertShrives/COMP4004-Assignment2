package tests;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import server.logic.handler.InputHandler;

public class BorrowCopyStepDefinitions {
	InputHandler i = new InputHandler();
	String result;

	@Given("^when I create the first user (.*) and second user (.*)$")
	public void when_I_create_the_first_user_darren_carleton_ca_and_second_user_will_carleton_ca(String arg1, String arg2) throws Throwable {
	   System.out.println( i.processInput(""+ arg1 +",pass1", i.CREATEUSER).getOutput());
	   System.out.println( i.processInput(""+ arg2 +",pass1", i.CREATEUSER).getOutput());
	}

	@Given("^I create the title with the title \"([^\"]*)\" and ISBN \"([^\"]*)\" number$")
	public void i_create_the_title_with_the_title_and_ISBN_number(String arg1, String arg2) throws Throwable {
		 System.out.println( i.processInput(""+ arg2 +","+arg1 +"", i.CREATETITLE).getOutput());
	}

	@Given("^I create a copy of the title with the ISBN \"([^\"]*)\"$")
	public void i_create_a_copy_of_the_title_with_the_ISBN(String arg1) throws Throwable {
		 System.out.println( i.processInput(""+ arg1 +"", i.CREATEITEM).getOutput());
	}

	@When("^I have the first user (.*) borrow the copy (\\d+) number with the ISBN \"([^\"]*)\" number$")
	public void i_have_the_first_user_darren_carleton_ca_borrow_the_copy_number_with_the_ISBN_number(String arg1, int arg2, String arg3) throws Throwable {
		 System.out.println( i.processInput(""+arg1+","+arg3+","+arg2+"", i.BORROW).getOutput());
	}
	
	@When("^I have the first user (.*) renew the copy (\\d+) number with the ISBN \"([^\"]*)\" number$")
	public void i_have_the_first_user_mark_carleton_ca_renew_the_copy_number_with_the_ISBN_number(String arg1, int arg2, String arg3) throws Throwable {
		 System.out.println( i.processInput(""+arg1+","+arg3+","+arg2+"", i.RENEW).getOutput());
	}

	@When("^I have the second user (.*) try to borrow the copy (\\d+) number with the ISBN \"([^\"]*)\" number$")
	public void i_have_the_second_user_will_carleton_ca_try_to_borrow_the_copy_number_with_the_ISBN_number(String arg1, int arg2, String arg3) throws Throwable {
		 result = i.processInput(""+arg1+","+arg3+","+arg2+"", i.BORROW).getOutput();
	}
	
	@When("^I have the first user (.*) return the copy number (\\d+) with the ISBN \"([^\"]*)\" number$")
	public void i_have_the_first_user_clarence_carleton_ca_return_the_copy_number_with_the_ISBN_number(String arg1, int arg2, String arg3) throws Throwable {
		 System.out.println( i.processInput(""+arg1+","+arg3+","+arg2+"", i.RETURN).getOutput());
	}

	@When("^I have the first user (.*) borrow the copy number (\\d+) with the ISBN \"([^\"]*)\" number again$")
	public void i_have_the_first_user_clarence_carleton_ca_borrow_the_copy_number_with_the_ISBN_number_again(String arg1, int arg2, String arg3) throws Throwable {
		 result = i.processInput(""+arg1+","+arg3+","+arg2+"", i.BORROW).getOutput();
	}


	@Then("^I will get the message \"([^\"]*)\"$")
	public void i_will_get_the_message(String arg1) throws Throwable {
		System.out.println(result);
		assertThat(result, equalTo(arg1));
	}

}
