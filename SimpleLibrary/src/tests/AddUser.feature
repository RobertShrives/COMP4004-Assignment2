Feature: Add user 

Scenario Outline: Ti1	Add	Redundant	User
Given that Mike@carleton.ca already exists
When trying to create Mike@carleton.ca again
Then I receive the message "The User Already Exists!"

Examples:
    | username  |
    |Mike@carleton.ca|

