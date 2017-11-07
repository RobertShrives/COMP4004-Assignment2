
Feature: Add Item Invalid

Scenario: Ti2	Add	Item to	non-existent	title
Given that the title and ISBN does not exist
When I create a copy with the ISBN "1234567890123" 
Then creation of the copy for the title fails and the message "The Title Does Not Exists!" is displayed

