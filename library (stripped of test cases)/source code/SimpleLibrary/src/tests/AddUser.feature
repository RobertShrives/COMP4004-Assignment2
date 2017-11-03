Feature: Add user 

Scenario Outline: Add Redundant User
Given that <username> already exists
When try to create <username> again
Then the creation of the <username> fails

Examples:
    | username  |
    | Zhibo@carleton.ca|
    | Yu@carleton.ca |
    | Michelle@carleton.ca |
    | Kevin@carleton.ca |
    | Sun@carleton.ca |
