Feature: Return Copy Valid

Scenario: Ti27 Return Copy That Does Not Exist
Given The loan to Yu@carleton.ca exists
When I have the user return the copy "Yu@carleton.ca,9781442667181,1"
Then I will receive the message "Success!"