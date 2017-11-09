Feature: Borrow Copy Invalid


Scenario: Ti4	Borrow same	copy
Given  I create the user "darren@carleton.ca,pass"
And I create the user "will@carleton.ca,pass"
And  I create the title "1234567890432,The stinky cheese man"
And I create a copy "1234567890432"
When I have the user borrow the copy "darren@carleton.ca,1234567890432,1"
And I have the user borrow the copy "will@carleton.ca,1234567890432,1"
Then I will receive the message "The Item is Not Available!"


Scenario: Ti5 Borrow	renewed	copy
Given  I create the user "mark@carleton.ca,pass"
And I create the user "vincent@carleton.ca,pass"
And  I create the title "1114567890432,new book"
And I create a copy "1114567890432"
When I have the user borrow the copy "mark@carleton.ca,1114567890432,1"
And I have the user renew the copy "mark@carleton.ca,1114567890432,1"
And I have the user borrow the copy "vincent@carleton.ca,1114567890432,1"
Then I will receive the message "The Item is Not Available!"
  

Scenario: Ti6 Borrow	returned copy	taken	by other	user
Given  I create the user "clarence@carleton.ca,pass"
And I create the user "george@carleton.ca,pass"
And  I create the title "2224567890432,old book"
And I create a copy "2224567890432"
When I have the user borrow the copy "clarence@carleton.ca,2224567890432,1"
And I have the user return the copy "clarence@carleton.ca,2224567890432,1"
And I have the user borrow the copy "george@carleton.ca,2224567890432,1"
And I have the user borrow the copy "clarence@carleton.ca,2224567890432,1"
Then I will receive the message "The Item is Not Available!"

   
Scenario: Ti7 Borrow over max limit
Given I create the user "Joan@carleton.ca,pass" 
And  I create the title "2224567899432,old booker"
And  I create the title "2221567890432,b"
And  I create the title "2221567890499, book"
And I create a copy "2224567899432"
And I create a copy "2221567890432"
And I create a copy "2221567890499"
When I have the user borrow the copy "Joan@carleton.ca,2224567899432,1"
And I have the user borrow the copy "Joan@carleton.ca,2221567890432,1"
And I have the user borrow the copy "Joan@carleton.ca,2221567890499,1"
Then I will receive the message "The Maximun Number of Items is Reached!"
 

Scenario: Ti8 Borrow over max	limit after return
Given I create the user "Joanne@carleton.ca,pass" 
And  I create the title "2224564829432,old booker"
And  I create the title "2124564829432,b"
And  I create the title "2221564289099, book"
And I create a copy "2224564829432"
And I create a copy "2124564829432"
And I create a copy "2124564829432"
And I create a copy "2221564289099"
When I have the user borrow the copy "Joanne@carleton.ca,2224564829432,1"
And I have the user borrow the copy "Joanne@carleton.ca,2124564829432,1"
And I have the user return the copy "Joanne@carleton.ca,2124564829432,1"
And I have the user borrow the copy "Joanne@carleton.ca,2221564289099,1"
And I have the user borrow the copy "Joanne@carleton.ca,2124564829432,1"
Then I will receive the message "The Maximun Number of Items is Reached!"

Scenario: Ti17 Borrow Outstanding Fees
Given I am logged in as user Zhibo@carleton.ca
And I have outstanding fees
And  I create the title "1234567890753,old booker"
And I create a copy "1234567890753"
When I have the user borrow the copy "Zhibo@carleton.ca,1234567890753,1"
Then I will receive the message "Outstanding Fee Exists!"

