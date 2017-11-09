Feature: Paying Fine Valid

Scenario: Ti26 Pay Fine Loan Exists
Given The user Sun@carleton.ca has outstanding fees
When I try and pay fine for "Sun@carleton.ca"
Then I will receive the message "Success!"