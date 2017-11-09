
Feature: Add Item Invalid

Scenario: Ti2	Add	Item to	non-existent	title
Given that the title and ISBN does not exist
When I create a copy "1234567890123" 
Then I will receive the message "The Title Does Not Exists!" 

