
Feature: Remove Title Invalid

Scenario: Ti12 Remove Title That Still Has A Copy
Given I create the title "1435547890456,book"
And I create a copy "1435547890456"
When I try and remove the title "1435547890456"
Then I will receive the message "Success!"

Scenario: Ti13 Remove Title That Has Borrowed Copy
Given I create the user "alex@carleton.ca,book"
And I create the title "1435547999456,book"
And I create a copy "1435547999456"
And I have the user borrow the copy "alex@carleton.ca,1435547999456,1" 
When I try and remove the title "1435547999456"
Then I will receive the message "Active Loan Exists!"

Scenario: Ti14 Remove Title That Has Copy
Given I create the user "todd@carleton.ca,book"
And I create the title "9435587999456,book"
And I create a copy "9435587999456"
And I create a copy "9435587999456"
And I remove the copy "9435587999456,2"  
When I try and remove the title "9435587999456"
Then I will receive the message "Success!"

Scenario: Ti18 Remove Title That Does Not Exist
Given the title does not exist
When I try and remove the title "9435587994444"
Then I will receive the message "The Title Does Not Exist!"