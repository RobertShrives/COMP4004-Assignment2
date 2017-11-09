
Feature: Removing Item Valid

Scenario: Ti9 Remove Item
Given I create the title "5534567890765,book1"
And I create the title "5934567890765,book2"
And I create a copy "5534567890765"
And I create a copy "5534567890765"
And I create a copy "5534567890765"
And I create a copy "5934567890765"
And I create a copy "5934567890765"
And I create a copy "5934567890765"
When I try and remove "5534567890765,2"
And I try and remove "5934567890765,1"
And I try and remove "5934567890765,3"
Then I will receive the message "Success!"
