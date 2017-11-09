
Feature: Removing an Item Invalid


Scenario: Ti9 Remove	Non-existent	Item
Given I create the title "1234567890765,book"
And I create a copy "1234567890765"
When I try and remove "1234567890765,2"
Then I will receive the message "The Item Does Not Exist!"

Scenario: Ti10 Remove Borrowed Item
Given I create the user "warren@carleton.ca,password"
And I create the title "1234547890765,book"
And I create a copy "1234547890765"
And  I have the user borrow the copy "warren@carleton.ca,1234547890765,1"
When I try and remove "1234547890765,1"
Then I will receive the message "Active Loan Exists!"

Scenario: Ti11 Remove Borrowed/Renewed Item
Given I create the user "plies@carleton.ca,password"
And I create the title "1234547890456,book"
And I create a copy "1234547890456"
And  I have the user borrow the copy "plies@carleton.ca,1234547890456,1"
And I have the user renew the copy "plies@carleton.ca,1234547890456,1"
When I try and remove "1234547890456,1"
Then I will receive the message "Active Loan Exists!"
