Feature: Remove User Invalid


Scenario: Ti15 Remove Non-existent User
Given The user Carlos@carleton.ca has not been created
When I attempt to remove the user "Carlos@carleton.ca" 
Then I receive the message "The User Does Not Exist!" and cannot remove him



