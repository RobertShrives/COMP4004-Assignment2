Feature: Add Title Valid

Scenario: Tv3 Add Title
Given that the title and ISBN does not exist
When I create the title "7894561230147,item book" 
Then I will receive the message "Success!"

Scenario: Tv4 Add Title
Given I create the title "1234567890147,book"
When I try and remove the title "1234567890147"
And I create the title "1234567890147,book"                       
Then I will receive the message "Success!"