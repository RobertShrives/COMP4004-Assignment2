Feature: Borrow Copy 
	I want to use this template for my feature file


Scenario Outline: Ti4	Borrow same	copy
Given when I create the first user <user1> and second user <user2> 
And I create the title with the title <title> and ISBN <isbn> number
And I create a copy of the title with the ISBN <isbn>
When I have the first user <user1> borrow the copy <copy> number with the ISBN <isbn> number
And I have the second user <user2> try to borrow the copy <copy> number with the ISBN <isbn> number
Then I will get the message "The Item is Not Available!"

Examples:
    | user1 						 |user2 							 |title 								 |isbn 					 |copy |
    | darren@carleton.ca |  will@carleton.ca   |"The stinky cheese man"|"1234567890432"| 1	 |
  
    
 Scenario Outline: Ti5 Borrow	renewed	copy
Given when I create the first user <user1> and second user <user2> 
And I create the title with the title <title> and ISBN <isbn> number
And I create a copy of the title with the ISBN <isbn>
When I have the first user <user1> borrow the copy <copy> number with the ISBN <isbn> number
And I have the first user <user1> renew the copy <copy> number with the ISBN <isbn> number
And I have the second user <user2> try to borrow the copy <copy> number with the ISBN <isbn> number
Then I will get the message "The Item is Not Available!"

Examples:
    | user1 						 |user2 							 |title 		 |isbn 					 |copy |
    | mark@carleton.ca |  vincent@carleton.ca   |"new book"|"1114567890432"| 1	 |
  
 Scenario Outline: Ti6 Borrow	returned copy	taken	by other	user
Given when I create the first user <user1> and second user <user2> 
And I create the title with the title <title> and ISBN <isbn> number
And I create a copy of the title with the ISBN <isbn>
When I have the first user <user1> borrow the copy <copy> number with the ISBN <isbn> number
And I have the first user <user1> return the copy number <copy> with the ISBN <isbn> number
And I have the second user <user2> try to borrow the copy <copy> number with the ISBN <isbn> number
And I have the first user <user1> borrow the copy number <copy> with the ISBN <isbn> number again
Then I will get the message "The Item is Not Available!"

Examples:
    | user1 						 	 |user2 							 	 |title 		|isbn 					|copy |
    | clarence@carleton.ca |  george@carleton.ca   |"old book"|"2224567890432"| 1	  |   
