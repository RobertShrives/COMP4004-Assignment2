
Feature: Remove Title Invalid

Scenario: Ti12 Remove Title That Still Has A Copy
Given I create the book title "1435547890456,book"
And I create a copy number with the ISBN number "1435547890456"
When I try and remove the title "1435547890456"
Then I will recieve the message error "Success!"

Scenario: Ti13 Remove Title That Has Borrowed Copy
Given I create the user "alex@carleton.ca,book"
And I create the book title "1435547999456,book"
And I create a copy number with the ISBN number "1435547999456"
And I have the user "alex@carleton.ca,1435547999456,1" borrow 
When I try and remove the title "1435547999456"
Then I will recieve the message error "Active Loan Exists!"

Scenario: Ti14 Remove Title That Has Borrowed Copy
Given I create the user "todd@carleton.ca,book"
And I create the book title "9435587999456,book"
And I create a copy number with the ISBN number "9435587999456"
And I create a copy number with the ISBN number "9435587999456"
And I remove the second copy "9435587999456,2"  
When I try and remove the title "9435587999456"
Then I will recieve the message error "Success!"