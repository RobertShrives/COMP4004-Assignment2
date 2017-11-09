Feature: Return Copy Invalid

Scenario: Ti25 Return Copy That Does Not Exist
Given The loan to Zhibo@carleton.ca does not exist
When I have the user return the copy "Zhibo@carleton.ca,1999567891456,1"
Then I will receive the message "The Loan Does Not Exist!"