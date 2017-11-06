package tests;

import static org.hamcrest.MatcherAssert.assertThat;
import static org.hamcrest.core.IsEqual.equalTo;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import server.logic.handler.InputHandler;

public class AddTitleStepDefinitions {
	String result;
	InputHandler i = new InputHandler();
	
	@Given("^that the \"([^\"]*)\" and \"([^\"]*)\" already exist$")
	public void that_the_and_already_exist(String arg1, String arg2) throws Throwable {
		System.out.println(arg1);
		System.out.println(arg2);
	  System.out.println(i.processInput(""+arg2+","+arg1+"", i.CREATETITLE).getOutput());
	}

	@When("^I try to create a title with the \"([^\"]*)\" and \"([^\"]*)\" again$")
	public void i_try_to_create_a_title_with_the_and_again(String arg1, String arg2) throws Throwable {
		System.out.println(arg1);
		System.out.println(arg2);
		 System.out.println(result = i.processInput(""+arg1+","+arg2+"", i.CREATETITLE).getOutput());
	}
	
	
	@Then("^I will receive the message \"([^\"]*)\"$")
	public void i_will_receive_the_message(String arg1) throws Throwable {
		assertThat(result, equalTo(arg1));
	}

	
}
