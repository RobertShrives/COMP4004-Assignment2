Feature: Renew Copy Invalid


Scenario: Ti16 Renew Returned Item
Given I create the user "ChuckD@carleton.ca,pass"
And I create the title "1234567891456,stank city"
And I create a copy "1234567891456"
When I have the user borrow the copy "ChuckD@carleton.ca,1234567891456,1"
And I have the user return the copy "ChuckD@carleton.ca,1234567891456,1"
And I have the user renew the copy "ChuckD@carleton.ca,1234567891456,1"
Then I will receive the message "The loan does not exist!" 

Scenario: Ti21 Renew Oustanding Fees
Given The user Zhibo@carleton.ca has outstanding fees
When I have the user renew the copy "Zhibo@carleton.ca,9781442668584,1"
Then I will receive the message "Outstanding Fee Exists!" 

Scenario: Ti22 Renew Item More Than Twice
Given I create the user "Chuck1@carleton.ca,pass"
And I create the title "1999567891456,stank city"
And I create a copy "1999567891456"
When I have the user borrow the copy "Chuck1@carleton.ca,1999567891456,1"
And I have the user renew the copy "Chuck1@carleton.ca,1999567891456,1"
And I have the user renew the copy "Chuck1@carleton.ca,1999567891456,1"
Then I will receive the message "Renewed Item More Than Once for the Same Loan!" 

Scenario: Ti23 Renew Max Items Reached
Given I create the user "alison1@carleton.ca,pass"
And I create the title "1834544491456,1 city"
And I create the title "1834576591456,2 city"
And I create a copy "1834544491456"
And I create a copy "1834544491456"
And I create a copy "1834576591456"
And I create a copy "1834576591456"
When I have the user borrow the copy "alison1@carleton.ca,1834544491456,1"
And I have the user borrow the copy "alison1@carleton.ca,1834576591456,2"
And I have the user renew the copy "alison1@carleton.ca,1834544491456,1"
Then I will receive the message "The Maximun Number of Items is Reached!"