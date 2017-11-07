
Feature: Removing an Item Invalid


Scenario: Ti9 Remove	Non-existent	Item
Given I create the title "1234567890765,book"
And I create a copy with the ISBN number "1234567890765"
When I try and remove "1234567890765,2"
Then I will recieve the message "The Item Does Not Exist!"

Scenario: Ti10 Remove Borrowed Item
Given I create the user "warren@carleton.ca,password"
And I create the title "1234547890765,book"
And I create a copy with the ISBN number "1234547890765"
And The user borrows the title with the information "warren@carleton.ca,1234547890765,1"
When I try and remove "1234547890765,1"
Then I will recieve the message "Active Loan Exists!"

Scenario: Ti11 Remove Borrowed/Renewed Item
Given I create the user "plies@carleton.ca,password"
And I create the title "1234547890456,book"
And I create a copy with the ISBN number "1234547890456"
And The user borrows the title with the information "plies@carleton.ca,1234547890456,1"
And The user renews the title with the information "plies@carleton.ca,1234547890456,1"
When I try and remove "1234547890456,1"
Then I will recieve the message "Active Loan Exists!"
