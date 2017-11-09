Feature: Add Item Valid

Scenario: Tv5 Add Item
Given I create the title "1234567890147,book"
When I create a copy "1234567890147"                     
Then I will receive the message "Success!"

Scenario: Tv6 Add Item
Given I create the title "2234567890147,book"
When I create a copy "2234567890147"
And I create a copy "2234567890147" 
And I create a copy "2234567890147"                         
Then I will receive the message "Success!"

Scenario: Tv7 Add Item
Given I create the title "3234567890147,book"
And I create a copy "3234567890147" 
And I create a copy "3234567890147" 
And I create a copy "3234567890147" 
And I try and remove "3234567890147,2" 
When I create a copy "3234567890147"
And I create a copy "3234567890147"                        
Then I will receive the message "Success!"