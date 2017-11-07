Feature: Borrow Copy Invalid


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
    
   
Scenario Outline: Ti7 Borrow over max limit
Given when I create the user <user> 
And I create the title with the title <title> and ISBN <isbn> number
And I create the title with the title <title1> and ISBN <isbn1> number
And I create the title with the title <title2> and ISBN <isbn2> number
And I create a copy of the title with the ISBN <isbn>
And I create a copy of the title with the ISBN <isbn1>
And I create a copy of the title with the ISBN <isbn2>
When I have the first user <user> borrow the copy <copy> number with the ISBN <isbn> number
And I have the first user <user> borrow the copy <copy> number with the ISBN <isbn1> number
And I have the first user <user> borrow the copy number <copy> with the ISBN <isbn2> number again
Then I will get the message "The Maximun Number of Items is Reached!"

Examples:
    | user 						 |title 			|isbn 					|	title1							|isbn1 						|title2							|isbn2 						|copy |
    | Joan@carleton.ca |"old booker"|"2224567899432"| "oldER book"				|	"2221567890432"	|	"oldest book"			|	"2221567890499"	|	1	  |   
 

Scenario Outline: Ti8 Borrow over max	limit after return
Given when I create the user <user> 
And I create the title with the title <title> and ISBN <isbn> number
And I create the title with the title <title1> and ISBN <isbn1> number
And I create the title with the title <title2> and ISBN <isbn2> number
And I create a copy of the title with the ISBN <isbn>
And I create a copy of the title with the ISBN <isbn1>
And I create a copy of the title with the ISBN <isbn1>
And I create a copy of the title with the ISBN <isbn2>
When I have the first user <user> borrow the copy <copy> number with the ISBN <isbn> number
And I have the first user <user> borrow the copy <copy> number with the ISBN <isbn1> number
And I have the first user <user> return the copy number <copy> with the ISBN <isbn1> number
And I have the first user <user> borrow the copy <copy> number with the ISBN <isbn2> number
And I have the first user <user> borrow the copy number <copy> with the ISBN <isbn1> number again
Then I will get the message "The Maximun Number of Items is Reached!"

Examples:
    | user 						 	 |title 			|isbn 					|	title1							|isbn1 						|title2						|isbn2 						|copy |
    | Joanne@carleton.ca |"t1"				|"2224564829432"|"t2"								|"2124564829432"	|	"t3"							|	"2221564289099"	|	1	  |   
       
