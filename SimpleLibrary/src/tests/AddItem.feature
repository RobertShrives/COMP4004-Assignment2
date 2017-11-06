
Feature: Add Item



Scenario Outline: Ti2	Add	Item to	non-existent	title
Given that the title and ISBN doesn't exist
When I create a copy with the ISBN <isbn>
Then creation of the copy for the title fails and the message "The Title Does Not Exists!" is displayed

Examples:
    | isbn  | 
    | "1234567890123" | 