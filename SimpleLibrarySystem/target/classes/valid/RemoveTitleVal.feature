
Feature: Remove Title Valid

Scenario: Tv10 Remove	Title
Given I create the title "1435547890456,book"
When I try and remove the title "1435547890456"
Then I will receive the message "Success!"

Scenario: Tv12 Remove	title
Given  I create the user "Tge@carleton.ca,pass"
And I create the title "1435587890456,book"
And I create a copy "1435587890456"
When I have the user borrow the copy "Tge@carleton.ca,1435587890456,1"
And I have the user return the copy "Tge@carleton.ca,1435587890456,1"
And I try and remove "1435587890456,1"
And I try and remove the title "1435587890456"
Then I will receive the message "Success!"



