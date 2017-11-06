
Feature: Add Title

Scenario Outline: Ti3	Add	Redundant	Title
Given that the <title> and <isbn> already exist
When I try to create a title with the <isbn> and <title> again
Then I will receive the message "The Title Already Exists!"

Examples:
 		| isbn | title|
   | "1234567890321" | "Dune" |