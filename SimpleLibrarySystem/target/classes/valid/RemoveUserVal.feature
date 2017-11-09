Feature: Remove User Valid

Scenario: Tv11 Remove User
Given I create the user "Carlos@carleton.ca,pass"
When I attempt to remove the user "Carlos@carleton.ca" 
Then I will receive the message "Success!" 



