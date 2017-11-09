Feature: Add user Invalid

Scenario: Ti1	Add	Redundant	User
Given that "Mike@carleton.ca,pass" already exists
When trying to create "Mike@carleton.ca,pass" again
Then I will receive the message "The User Already Exists!"

