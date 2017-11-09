
Feature: Add Title Invalid

Scenario: Ti3	Add	Redundant	Title
Given that the title "1234567890321,Dune" already exist
When I try to create a title "1234567890321,Dune" again
Then I will receive the message "The Title Already Exists!"

