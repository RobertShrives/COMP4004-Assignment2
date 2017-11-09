Feature: Add user Valid

Scenario: Tv1 Add	User
Given that the user "Joe@carleton.ca" does not exist
When I create the user "Joe@carleton.ca,pass" 
Then  I will receive the message "Success!"

Scenario: Tv2 Add	User
Given I create the user "Toe@carleton.ca,pass"
When I attempt to remove the user "Toe@carleton.ca" 
And trying to create "Toe@carleton.ca,pass" again
Then I will receive the message "Success!"
