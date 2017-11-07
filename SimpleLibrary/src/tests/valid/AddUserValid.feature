Feature: Add user Valid

Scenario: Tv1 Add	User
Given that Joe@carleton.ca,pass does not exist
When trying to create "Joe@carleton.ca,pass" 
Then The message "Success!" is displayed

Scenario: Tv2 Add	User
Given I create the new user "Toe@carleton.ca,pass"
When I remove the new user "Toe@carleton.ca" 
And trying to create "Toe@carleton.ca,pass" again
Then The message "Success!" is displayed
