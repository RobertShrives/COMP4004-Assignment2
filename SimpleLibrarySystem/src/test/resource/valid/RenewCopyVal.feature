Feature: Renew Copy Valid

Scenario: Tv13 Renew Loan
Given I create the user "Chuckt@carleton.ca,pass"
And I create the title "1234562291456,stank city"
And I create a copy "1234562291456"
When I have the user borrow the copy "Chuckt@carleton.ca,1234562291456,1"
And I have the user renew the copy "Chuckt@carleton.ca,1234562291456,1"
Then I will receive the message "Success!" 

Scenario: Tv14 Renew Loan Max Times
Given I create the user "Chuck3@carleton.ca,pass"
And I create the title "1834562291456,stank city"
And I create a copy "1834562291456"
When I have the user borrow the copy "Chuck3@carleton.ca,1834562291456,1"
And I have the user renew the copy "Chuck3@carleton.ca,1834562291456,1"
#And I have the user renew the copy "Chuck3@carleton.ca,1834562291456,1"
Then I will receive the message "Success!" 

Scenario: Tv16 Renew when full
Given I create the user "alison@carleton.ca,pass"
And I create the title "1834544491456,1 city"
And I create the title "1834576591456,2 city"
And I create a copy "1834544491456"
And I create a copy "1834544491456"
And I create a copy "1834576591456"
And I create a copy "1834576591456"
When I have the user borrow the copy "alison@carleton.ca,1834544491456,1"
And I have the user borrow the copy "alison@carleton.ca,1834576591456,2"
#And I have the user renew the copy "alison@carleton.ca,1834544491456,1"
#And I have the user renew the copy "alison@carleton.ca,1834576591456,2"
#Then I will receive the message "Success!" 