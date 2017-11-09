Feature: Remove User Invalid


Scenario: Ti15 Remove Non-existent User
Given The user Carlos@carleton.ca has not been created
When I attempt to remove the user "Carlos@carleton.ca" 
Then I will receive the message "The User Does Not Exist!" 

Scenario: Ti19 Remove Outstanding Fees
Given The user Zhibo@carleton.ca has outstanding fees
When I attempt to remove the user "Zhibo@carleton.ca" 
Then I will receive the message "Outstanding Fee Exists!" 

Scenario: Ti20 Remove Active Loan Exists
Given The user Yu@carleton.ca has an outstanding loan
When I attempt to remove the user "Yu@carleton.ca" 
Then I will receive the message "Active Loan Exists!" 


