Feature: Renew Copy Invalid


Scenario: Ti16 Renew Returned Item
Given I create the user "ChuckD@carleton.ca,pass"
And I create the title "1234567891456,stank city"
And I create a copy "1234567891456"
When I have the user borrow the copy "ChuckD@carleton.ca,1234567891456,1"
And I have the user return the copy "ChuckD@carleton.ca,1234567891456,1"
And I have the user renew the copy "ChuckD@carleton.ca,1234567891456,1"
Then I receive the renew message "The loan does not exist!" 

