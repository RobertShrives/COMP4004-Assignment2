Feature: Paying Fine Invalid

Scenario: Ti24 Pay Fine Loan Exists
Given The user Yu@carleton.ca has an outstanding loan
When I attempt to remove the user "Yu@carleton.ca" 
Then I will receive the message "Active Loan Exists!" 

