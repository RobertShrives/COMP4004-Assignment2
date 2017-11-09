package Assignment2.SimpleLibrarySystem;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import server.logic.handler.InputHandler;
import utilities.Config;

public class StepDefinitions {
	InputHandler i = new InputHandler();
	String result;
	@Given("^that the user \"([^\"]*)\" does not exist$")
	public void that_the_user_does_not_exist(String arg1) throws Throwable {
	
	}

	@Given("^I create a copy \"([^\"]*)\"$")
	public void i_create_a_copy(String arg1) throws Throwable {
		System.out.println( result=i.processInput(arg1, InputHandler.CREATEITEM).getOutput());
	}
	
	@Given("^that \"([^\"]*)\" already exists$")
	public void that_already_exists(String arg1) throws Throwable {
		i.processInput(arg1, InputHandler.CREATEUSER).getOutput();
	}

	@When("^trying to create \"([^\"]*)\" again$")
	public void trying_to_create_again(String arg1) throws Throwable {
		result =  i.processInput(arg1, InputHandler.CREATEUSER).getOutput();
	}
	@Given("^that the title and ISBN does not exist$")
	public void that_the_title_and_ISBN_does_not_exist() throws Throwable {
		System.out.print("Does not exist");
	}

	@Given("^I create the title \"([^\"]*)\"$")
	public void i_create_the_title(String arg1) throws Throwable {
	  System.out.println(result =i.processInput(arg1, InputHandler.CREATETITLE).getOutput());
	}
	
	@Given("^The user Zhibo@carleton\\.ca has outstanding fees$")
	public void the_user_Zhibo_carleton_ca_has_outstanding_fees() throws Throwable {

	}
	
	@When("^I try and pay fine for \"([^\"]*)\"$")
	public void i_try_and_pay_fine_for(String arg1) throws Throwable {
		System.out.println(result = i.processInput(arg1, InputHandler.PAYFINE).getOutput());
	}
	
	@Given("^The user Sun@carleton\\.ca has outstanding fees$")
	public void the_user_Sun_carleton_ca_has_outstanding_fees() throws Throwable {
	  
	}

	
	
	@Given("^The loan to Yu@carleton\\.ca exists$")
	public void the_loan_to_Yu_carleton_ca_exists() throws Throwable {
	
	}


	
	@Given("^The user Carlos@carleton\\.ca has not been created$")
	public void the_user_Carlos_carleton_ca_has_not_been_created() throws Throwable {
	}

	@When("^I attempt to remove the user \"([^\"]*)\"$")
	public void i_attempt_to_remove_the_user(String arg1) throws Throwable {
		System.out.println(result = i.processInput(arg1, InputHandler.DELETEUSER).getOutput());
	}

	@Given("^The user Yu@carleton\\.ca has an outstanding loan$")
	public void the_user_Yu_carleton_ca_has_an_outstanding_loan() throws Throwable {
	
	}
	@Given("^I remove the copy \"([^\"]*)\"$")
	public void i_remove_the_second_copy(String arg1) throws Throwable {
		System.out.println(i.processInput(arg1, InputHandler.DELETEITEM).getOutput());
	}
	
	@Given("^the title does not exist$")
	public void the_title_does_not_exist() throws Throwable {
	  
	}
	
	@When("^I try and remove \"([^\"]*)\"$")
	public void i_try_and_remove(String arg1) throws Throwable {
		 System.out.println(result = i.processInput(arg1, InputHandler.DELETEITEM).getOutput());
	}
	
	@When("^I try and remove the title \"([^\"]*)\"$")
	public void i_try_and_remove_the_title(String arg1) throws Throwable {
		System.out.println(result = i.processInput(arg1, InputHandler.DELETETITLE).getOutput());
	}
	@Given("^that the title \"([^\"]*)\" already exist$")
	public void that_the_title_already_exist(String arg1) throws Throwable {
		System.out.println(result = i.processInput(arg1, InputHandler.CREATETITLE).getOutput());
	}
	@Given("^I create the user \"([^\"]*)\"$")
	public void i_create_the_user(String arg1) throws Throwable {
		 System.out.println(result = i.processInput(arg1, InputHandler.CREATEUSER).getOutput());
	}
	
	@Given("^I am logged in as user Zhibo@carleton\\.ca$")
	public void i_am_logged_in_as_user_Zhibo_carleton_ca() throws Throwable {

	}
	
	@Given("^The loan to Zhibo@carleton\\.ca does not exist$")
	public void the_loan_to_Zhibo_carleton_ca_does_not_exist() throws Throwable {

	}


	@Given("^I have outstanding fees$")
	public void i_have_outstanding_fees() throws Throwable {

	}

	@When("^I try to create a title \"([^\"]*)\" again$")
	public void i_try_to_create_a_title_again(String arg1) throws Throwable {
		System.out.println(result =i.processInput(arg1, InputHandler.CREATETITLE).getOutput());
	}
	@When("^I have the user borrow the copy \"([^\"]*)\"$")
	public void i_have_the_user_borrow_the_copy(String arg1) throws Throwable {
		System.out.println(result = i.processInput(arg1, InputHandler.BORROW).getOutput());
	}

	@When("^I have the user return the copy \"([^\"]*)\"$")
	public void i_have_the_user_return_the_copy(String arg1) throws Throwable {
		System.out.println(result = i.processInput(arg1, InputHandler.RETURN).getOutput());
	}

	@When("^I have the user renew the copy \"([^\"]*)\"$")
	public void i_have_the_user_renew_the_copy(String arg1) throws Throwable {
		System.out.println(result = i.processInput(arg1, InputHandler.RENEW).getOutput());
	}
	@Then("^I will receive the message \"([^\"]*)\"$")
	public void i_will_receive_the_message(String arg1) throws Throwable {
		assertThat(result, equalTo(arg1));
	}
	
	
}
