$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddItemIn.feature");
formatter.feature({
  "line": 2,
  "name": "Add Item Invalid",
  "description": "",
  "id": "add-item-invalid",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Ti2\tAdd\tItem to\tnon-existent\ttitle",
  "description": "",
  "id": "add-item-invalid;ti2-add-item-to-non-existent-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "that the title and ISBN does not exist",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I create a copy \"1234567890123\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I will receive the message \"The Title Does Not Exists!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_the_title_and_ISBN_does_not_exist()"
});
formatter.result({
  "duration": 94040316,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890123",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 6966572,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Title Does Not Exists!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 1351950,
  "status": "passed"
});
formatter.uri("AddTitleIn.feature");
formatter.feature({
  "line": 2,
  "name": "Add Title Invalid",
  "description": "",
  "id": "add-title-invalid",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Ti3\tAdd\tRedundant\tTitle",
  "description": "",
  "id": "add-title-invalid;ti3-add-redundant-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "that the title \"1234567890321,Dune\" already exist",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I try to create a title \"1234567890321,Dune\" again",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I will receive the message \"The Title Already Exists!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890321,Dune",
      "offset": 16
    }
  ],
  "location": "StepDefinitions.that_the_title_already_exist(String)"
});
formatter.result({
  "duration": 134356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890321,Dune",
      "offset": 25
    }
  ],
  "location": "StepDefinitions.i_try_to_create_a_title_again(String)"
});
formatter.result({
  "duration": 144619,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Title Already Exists!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 37321,
  "status": "passed"
});
formatter.uri("AddUserIn.feature");
formatter.feature({
  "line": 1,
  "name": "Add user Invalid",
  "description": "",
  "id": "add-user-invalid",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Ti1\tAdd\tRedundant\tUser",
  "description": "",
  "id": "add-user-invalid;ti1-add-redundant-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "that \"Mike@carleton.ca,pass\" already exists",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "trying to create \"Mike@carleton.ca,pass\" again",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I will receive the message \"The User Already Exists!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mike@carleton.ca,pass",
      "offset": 6
    }
  ],
  "location": "StepDefinitions.that_already_exists(String)"
});
formatter.result({
  "duration": 2602823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Mike@carleton.ca,pass",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.trying_to_create_again(String)"
});
formatter.result({
  "duration": 68732,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The User Already Exists!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 33278,
  "status": "passed"
});
formatter.uri("BorrowCopyIn.feature");
formatter.feature({
  "line": 1,
  "name": "Borrow Copy Invalid",
  "description": "",
  "id": "borrow-copy-invalid",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Ti4\tBorrow same\tcopy",
  "description": "",
  "id": "borrow-copy-invalid;ti4-borrow-same-copy",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I create the user \"darren@carleton.ca,pass\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I create the user \"will@carleton.ca,pass\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I create the title \"1234567890432,The stinky cheese man\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I create a copy \"1234567890432\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I have the user borrow the copy \"darren@carleton.ca,1234567890432,1\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I have the user borrow the copy \"will@carleton.ca,1234567890432,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will receive the message \"The Item is Not Available!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "darren@carleton.ca,pass",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_create_the_user(String)"
});
formatter.result({
  "duration": 95480,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "will@carleton.ca,pass",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_create_the_user(String)"
});
formatter.result({
  "duration": 62512,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890432,The stinky cheese man",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 73398,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890432",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 90815,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "darren@carleton.ca,1234567890432,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 4453630,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "will@carleton.ca,1234567890432,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 156437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Item is Not Available!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 32967,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Ti5 Borrow\trenewed\tcopy",
  "description": "",
  "id": "borrow-copy-invalid;ti5-borrow-renewed-copy",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I create the user \"mark@carleton.ca,pass\"",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I create the user \"vincent@carleton.ca,pass\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I create the title \"1114567890432,new book\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I create a copy \"1114567890432\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I have the user borrow the copy \"mark@carleton.ca,1114567890432,1\"",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I have the user renew the copy \"mark@carleton.ca,1114567890432,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I have the user borrow the copy \"vincent@carleton.ca,1114567890432,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I will receive the message \"The Item is Not Available!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "mark@carleton.ca,pass",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_create_the_user(String)"
});
formatter.result({
  "duration": 96101,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vincent@carleton.ca,pass",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_create_the_user(String)"
});
formatter.result({
  "duration": 54426,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1114567890432,new book",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 97346,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1114567890432",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 58159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mark@carleton.ca,1114567890432,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 161724,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "mark@carleton.ca,1114567890432,1",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_have_the_user_renew_the_copy(String)"
});
formatter.result({
  "duration": 780318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "vincent@carleton.ca,1114567890432,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 148973,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Item is Not Available!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 32656,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Ti6 Borrow\treturned copy\ttaken\tby other\tuser",
  "description": "",
  "id": "borrow-copy-invalid;ti6-borrow-returned-copy-taken-by-other-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I create the user \"clarence@carleton.ca,pass\"",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I create the user \"george@carleton.ca,pass\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I create the title \"2224567890432,old book\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I create a copy \"2224567890432\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I have the user borrow the copy \"clarence@carleton.ca,2224567890432,1\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I have the user return the copy \"clarence@carleton.ca,2224567890432,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I have the user borrow the copy \"george@carleton.ca,2224567890432,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I have the user borrow the copy \"clarence@carleton.ca,2224567890432,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I will receive the message \"The Item is Not Available!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "clarence@carleton.ca,pass",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_create_the_user(String)"
});
formatter.result({
  "duration": 88949,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "george@carleton.ca,pass",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_create_the_user(String)"
});
formatter.result({
  "duration": 79618,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2224567890432,old book",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 80240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2224567890432",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 60958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clarence@carleton.ca,2224567890432,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 184738,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clarence@carleton.ca,2224567890432,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_return_the_copy(String)"
});
formatter.result({
  "duration": 108542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "george@carleton.ca,2224567890432,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 158303,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "clarence@carleton.ca,2224567890432,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 116317,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Item is Not Available!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 32656,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Ti7 Borrow over max limit",
  "description": "",
  "id": "borrow-copy-invalid;ti7-borrow-over-max-limit",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 38,
  "name": "I create the user \"Joan@carleton.ca,pass\"",
  "keyword": "Given "
});
formatter.step({
  "line": 39,
  "name": "I create the title \"2224567899432,old booker\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I create the title \"2221567890432,b\"",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I create the title \"2221567890499, book\"",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I create a copy \"2224567899432\"",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "I create a copy \"2221567890432\"",
  "keyword": "And "
});
formatter.step({
  "line": 44,
  "name": "I create a copy \"2221567890499\"",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I have the user borrow the copy \"Joan@carleton.ca,2224567899432,1\"",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "I have the user borrow the copy \"Joan@carleton.ca,2221567890432,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "I have the user borrow the copy \"Joan@carleton.ca,2221567890499,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "I will receive the message \"The Maximun Number of Items is Reached!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Joan@carleton.ca,pass",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_create_the_user(String)"
});
formatter.result({
  "duration": 192825,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2224567899432,old booker",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 65312,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2221567890432,b",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 65933,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2221567890499, book",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 59402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2224567899432",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 55982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2221567890432",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 55670,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2221567890499",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 56292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joan@carleton.ca,2224567899432,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 167322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joan@carleton.ca,2221567890432,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 222681,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joan@carleton.ca,2221567890499,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 137465,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Maximun Number of Items is Reached!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 49450,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Ti8 Borrow over max\tlimit after return",
  "description": "",
  "id": "borrow-copy-invalid;ti8-borrow-over-max-limit-after-return",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 52,
  "name": "I create the user \"Joanne@carleton.ca,pass\"",
  "keyword": "Given "
});
formatter.step({
  "line": 53,
  "name": "I create the title \"2224564829432,old booker\"",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "I create the title \"2124564829432,b\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "I create the title \"2221564289099, book\"",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "I create a copy \"2224564829432\"",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "I create a copy \"2124564829432\"",
  "keyword": "And "
});
formatter.step({
  "line": 58,
  "name": "I create a copy \"2124564829432\"",
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "I create a copy \"2221564289099\"",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "I have the user borrow the copy \"Joanne@carleton.ca,2224564829432,1\"",
  "keyword": "When "
});
formatter.step({
  "line": 61,
  "name": "I have the user borrow the copy \"Joanne@carleton.ca,2124564829432,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 62,
  "name": "I have the user return the copy \"Joanne@carleton.ca,2124564829432,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "I have the user borrow the copy \"Joanne@carleton.ca,2221564289099,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 64,
  "name": "I have the user borrow the copy \"Joanne@carleton.ca,2124564829432,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "I will receive the message \"The Maximun Number of Items is Reached!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Joanne@carleton.ca,pass",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_create_the_user(String)"
});
formatter.result({
  "duration": 131556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2224564829432,old booker",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 122226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2124564829432,b",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 70910,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2221564289099, book",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 60647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2224564829432",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 78063,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2124564829432",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 60647,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2124564829432",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 54737,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2221564289099",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 68421,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joanne@carleton.ca,2224564829432,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 177896,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joanne@carleton.ca,2124564829432,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 210552,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joanne@carleton.ca,2124564829432,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_return_the_copy(String)"
});
formatter.result({
  "duration": 62513,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joanne@carleton.ca,2221564289099,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 170432,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joanne@carleton.ca,2124564829432,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 130623,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Maximun Number of Items is Reached!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 170432,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Ti17 Borrow Outstanding Fees",
  "description": "",
  "id": "borrow-copy-invalid;ti17-borrow-outstanding-fees",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 68,
  "name": "I am logged in as user Zhibo@carleton.ca",
  "keyword": "Given "
});
formatter.step({
  "line": 69,
  "name": "I have outstanding fees",
  "keyword": "And "
});
formatter.step({
  "line": 70,
  "name": "I create the title \"1234567890753,old booker\"",
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "I create a copy \"1234567890753\"",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "I have the user borrow the copy \"Zhibo@carleton.ca,1234567890753,1\"",
  "keyword": "When "
});
formatter.step({
  "line": 73,
  "name": "I will receive the message \"Outstanding Fee Exists!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.i_am_logged_in_as_user_Zhibo_carleton_ca()"
});
formatter.result({
  "duration": 48828,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinitions.i_have_outstanding_fees()"
});
formatter.result({
  "duration": 12440,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890753,old booker",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 173542,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890753",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 89570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zhibo@carleton.ca,1234567890753,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 212418,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Outstanding Fee Exists!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 40120,
  "status": "passed"
});
formatter.uri("PayFineIn.feature");
formatter.feature({
  "line": 1,
  "name": "Paying Fine Invalid",
  "description": "",
  "id": "paying-fine-invalid",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Ti24 Pay Fine Loan Exists",
  "description": "",
  "id": "paying-fine-invalid;ti24-pay-fine-loan-exists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "The user Yu@carleton.ca has an outstanding loan",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I attempt to remove the user \"Yu@carleton.ca\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I will receive the message \"Active Loan Exists!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_user_Yu_carleton_ca_has_an_outstanding_loan()"
});
formatter.result({
  "duration": 35455,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yu@carleton.ca",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.i_attempt_to_remove_the_user(String)"
});
formatter.result({
  "duration": 157370,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Active Loan Exists!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 47273,
  "status": "passed"
});
formatter.uri("RemoveItemIn.feature");
formatter.feature({
  "line": 2,
  "name": "Removing an Item Invalid",
  "description": "",
  "id": "removing-an-item-invalid",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 5,
  "name": "Ti9 Remove\tNon-existent\tItem",
  "description": "",
  "id": "removing-an-item-invalid;ti9-remove-non-existent-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 6,
  "name": "I create the title \"1234567890765,book\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I create a copy \"1234567890765\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I try and remove \"1234567890765,2\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I will receive the message \"The Item Does Not Exist!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890765,book",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 185050,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890765",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 147107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890765,2",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.i_try_and_remove(String)"
});
formatter.result({
  "duration": 139953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Item Does Not Exist!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 50072,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Ti10 Remove Borrowed Item",
  "description": "",
  "id": "removing-an-item-invalid;ti10-remove-borrowed-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I create the user \"warren@carleton.ca,password\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I create the title \"1234547890765,book\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I create a copy \"1234547890765\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I have the user borrow the copy \"warren@carleton.ca,1234547890765,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I try and remove \"1234547890765,1\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I will receive the message \"Active Loan Exists!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "warren@carleton.ca,password",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_create_the_user(String)"
});
formatter.result({
  "duration": 111029,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234547890765,book",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 117872,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234547890765",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 204021,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "warren@carleton.ca,1234547890765,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 690437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234547890765,1",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.i_try_and_remove(String)"
});
formatter.result({
  "duration": 161724,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Active Loan Exists!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 57847,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Ti11 Remove Borrowed/Renewed Item",
  "description": "",
  "id": "removing-an-item-invalid;ti11-remove-borrowed/renewed-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I create the user \"plies@carleton.ca,password\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I create the title \"1234547890456,book\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I create a copy \"1234547890456\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I have the user borrow the copy \"plies@carleton.ca,1234547890456,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I have the user renew the copy \"plies@carleton.ca,1234547890456,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I try and remove \"1234547890456,1\"",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I will receive the message \"Active Loan Exists!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "plies@carleton.ca,password",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_create_the_user(String)"
});
formatter.result({
  "duration": 196245,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234547890456,book",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 192202,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234547890456",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 241342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "plies@carleton.ca,1234547890456,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 316606,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "plies@carleton.ca,1234547890456,1",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_have_the_user_renew_the_copy(String)"
});
formatter.result({
  "duration": 492326,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234547890456,1",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.i_try_and_remove(String)"
});
formatter.result({
  "duration": 80240,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Active Loan Exists!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 545508,
  "status": "passed"
});
formatter.uri("RemoveTitleIn.feature");
formatter.feature({
  "line": 2,
  "name": "Remove Title Invalid",
  "description": "",
  "id": "remove-title-invalid",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Ti12 Remove Title That Still Has A Copy",
  "description": "",
  "id": "remove-title-invalid;ti12-remove-title-that-still-has-a-copy",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I create the title \"1435547890456,book\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I create a copy \"1435547890456\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I try and remove the title \"1435547890456\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I will receive the message \"Success!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1435547890456,book",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 108853,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1435547890456",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 356415,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1435547890456",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_try_and_remove_the_title(String)"
});
formatter.result({
  "duration": 184427,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 33900,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Ti13 Remove Title That Has Borrowed Copy",
  "description": "",
  "id": "remove-title-invalid;ti13-remove-title-that-has-borrowed-copy",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "I create the user \"alex@carleton.ca,book\"",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "I create the title \"1435547999456,book\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I create a copy \"1435547999456\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I have the user borrow the copy \"alex@carleton.ca,1435547999456,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I try and remove the title \"1435547999456\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I will receive the message \"Active Loan Exists!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "alex@carleton.ca,book",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_create_the_user(String)"
});
formatter.result({
  "duration": 170121,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1435547999456,book",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 247562,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1435547999456",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 183806,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alex@carleton.ca,1435547999456,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 229213,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1435547999456",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_try_and_remove_the_title(String)"
});
formatter.result({
  "duration": 207442,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Active Loan Exists!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 37010,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Ti14 Remove Title That Has Copy",
  "description": "",
  "id": "remove-title-invalid;ti14-remove-title-that-has-copy",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I create the user \"todd@carleton.ca,book\"",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I create the title \"9435587999456,book\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I create a copy \"9435587999456\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I create a copy \"9435587999456\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I remove the copy \"9435587999456,2\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I try and remove the title \"9435587999456\"",
  "keyword": "When "
});
formatter.step({
  "line": 25,
  "name": "I will receive the message \"Success!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "todd@carleton.ca,book",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_create_the_user(String)"
});
formatter.result({
  "duration": 397157,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9435587999456,book",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 388760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9435587999456",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 62824,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9435587999456",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 46340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9435587999456,2",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_remove_the_second_copy(String)"
});
formatter.result({
  "duration": 89570,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9435587999456",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_try_and_remove_the_title(String)"
});
formatter.result({
  "duration": 187226,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 354859,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Ti18 Remove Title That Does Not Exist",
  "description": "",
  "id": "remove-title-invalid;ti18-remove-title-that-does-not-exist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "the title does not exist",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I try and remove the title \"9435587994444\"",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "I will receive the message \"The Title Does Not Exist!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_title_does_not_exist()"
});
formatter.result({
  "duration": 47585,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9435587994444",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_try_and_remove_the_title(String)"
});
formatter.result({
  "duration": 123159,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Title Does Not Exist!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 46651,
  "status": "passed"
});
formatter.uri("RemoveUserIn.feature");
formatter.feature({
  "line": 1,
  "name": "Remove User Invalid",
  "description": "",
  "id": "remove-user-invalid",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Ti15 Remove Non-existent User",
  "description": "",
  "id": "remove-user-invalid;ti15-remove-non-existent-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "The user Carlos@carleton.ca has not been created",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I attempt to remove the user \"Carlos@carleton.ca\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I will receive the message \"The User Does Not Exist!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_user_Carlos_carleton_ca_has_not_been_created()"
});
formatter.result({
  "duration": 34210,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carlos@carleton.ca",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.i_attempt_to_remove_the_user(String)"
});
formatter.result({
  "duration": 164834,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The User Does Not Exist!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 31723,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Ti19 Remove Outstanding Fees",
  "description": "",
  "id": "remove-user-invalid;ti19-remove-outstanding-fees",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "The user Zhibo@carleton.ca has outstanding fees",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I attempt to remove the user \"Zhibo@carleton.ca\"",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I will receive the message \"Outstanding Fee Exists!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_user_Zhibo_carleton_ca_has_outstanding_fees()"
});
formatter.result({
  "duration": 39187,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zhibo@carleton.ca",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.i_attempt_to_remove_the_user(String)"
});
formatter.result({
  "duration": 140887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Outstanding Fee Exists!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 54737,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Ti20 Remove Active Loan Exists",
  "description": "",
  "id": "remove-user-invalid;ti20-remove-active-loan-exists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "The user Yu@carleton.ca has an outstanding loan",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I attempt to remove the user \"Yu@carleton.ca\"",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I will receive the message \"Active Loan Exists!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_user_Yu_carleton_ca_has_an_outstanding_loan()"
});
formatter.result({
  "duration": 34522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yu@carleton.ca",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.i_attempt_to_remove_the_user(String)"
});
formatter.result({
  "duration": 97656,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Active Loan Exists!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 34833,
  "status": "passed"
});
formatter.uri("RenewCopyIn.feature");
formatter.feature({
  "line": 1,
  "name": "Renew Copy Invalid",
  "description": "",
  "id": "renew-copy-invalid",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Ti16 Renew Returned Item",
  "description": "",
  "id": "renew-copy-invalid;ti16-renew-returned-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I create the user \"ChuckD@carleton.ca,pass\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I create the title \"1234567891456,stank city\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I create a copy \"1234567891456\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I have the user borrow the copy \"ChuckD@carleton.ca,1234567891456,1\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I have the user return the copy \"ChuckD@carleton.ca,1234567891456,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I have the user renew the copy \"ChuckD@carleton.ca,1234567891456,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I will receive the message \"The loan does not exist!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ChuckD@carleton.ca,pass",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_create_the_user(String)"
});
formatter.result({
  "duration": 1084173,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567891456,stank city",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 109786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567891456",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 169810,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ChuckD@carleton.ca,1234567891456,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 283639,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ChuckD@carleton.ca,1234567891456,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_return_the_copy(String)"
});
formatter.result({
  "duration": 102010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ChuckD@carleton.ca,1234567891456,1",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_have_the_user_renew_the_copy(String)"
});
formatter.result({
  "duration": 668977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The loan does not exist!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 37943,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Ti21 Renew Oustanding Fees",
  "description": "",
  "id": "renew-copy-invalid;ti21-renew-oustanding-fees",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "The user Zhibo@carleton.ca has outstanding fees",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I have the user renew the copy \"Zhibo@carleton.ca,9781442668584,1\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I will receive the message \"Outstanding Fee Exists!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_user_Zhibo_carleton_ca_has_outstanding_fees()"
});
formatter.result({
  "duration": 27680,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zhibo@carleton.ca,9781442668584,1",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_have_the_user_renew_the_copy(String)"
});
formatter.result({
  "duration": 3009621,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Outstanding Fee Exists!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 49762,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Ti22 Renew Item More Than Twice",
  "description": "",
  "id": "renew-copy-invalid;ti22-renew-item-more-than-twice",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 19,
  "name": "I create the user \"Chuck1@carleton.ca,pass\"",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "I create the title \"1999567891456,stank city\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I create a copy \"1999567891456\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I have the user borrow the copy \"Chuck1@carleton.ca,1999567891456,1\"",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "I have the user renew the copy \"Chuck1@carleton.ca,1999567891456,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I have the user renew the copy \"Chuck1@carleton.ca,1999567891456,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I will receive the message \"Renewed Item More Than Once for the Same Loan!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Chuck1@carleton.ca,pass",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_create_the_user(String)"
});
formatter.result({
  "duration": 270887,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1999567891456,stank city",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 88637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1999567891456",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 66867,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chuck1@carleton.ca,1999567891456,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 184427,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chuck1@carleton.ca,1999567891456,1",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_have_the_user_renew_the_copy(String)"
});
formatter.result({
  "duration": 1023837,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chuck1@carleton.ca,1999567891456,1",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_have_the_user_renew_the_copy(String)"
});
formatter.result({
  "duration": 2842299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Renewed Item More Than Once for the Same Loan!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 50694,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Ti23 Renew Max Items Reached",
  "description": "",
  "id": "renew-copy-invalid;ti23-renew-max-items-reached",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 28,
  "name": "I create the user \"alison1@carleton.ca,pass\"",
  "keyword": "Given "
});
formatter.step({
  "line": 29,
  "name": "I create the title \"1834544491456,1 city\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I create the title \"1834576591456,2 city\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I create a copy \"1834544491456\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I create a copy \"1834544491456\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I create a copy \"1834576591456\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I create a copy \"1834576591456\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I have the user borrow the copy \"alison1@carleton.ca,1834544491456,1\"",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "I have the user borrow the copy \"alison1@carleton.ca,1834576591456,2\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I have the user renew the copy \"alison1@carleton.ca,1834544491456,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I will receive the message \"The Maximun Number of Items is Reached!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "alison1@carleton.ca,pass",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_create_the_user(String)"
});
formatter.result({
  "duration": 299189,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1834544491456,1 city",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 320960,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1834576591456,2 city",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 235743,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1834544491456",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 174786,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1834544491456",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 4470113,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1834576591456",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 258448,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1834576591456",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 741754,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alison1@carleton.ca,1834544491456,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 468067,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alison1@carleton.ca,1834576591456,2",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 522804,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alison1@carleton.ca,1834544491456,1",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_have_the_user_renew_the_copy(String)"
});
formatter.result({
  "duration": 10023154,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Maximun Number of Items is Reached!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 53804,
  "status": "passed"
});
formatter.uri("ReturnCopyIn.feature");
formatter.feature({
  "line": 1,
  "name": "Return Copy Invalid",
  "description": "",
  "id": "return-copy-invalid",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Ti25 Return Copy That Does Not Exist",
  "description": "",
  "id": "return-copy-invalid;ti25-return-copy-that-does-not-exist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "The loan to Zhibo@carleton.ca does not exist",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I have the user return the copy \"Zhibo@carleton.ca,1999567891456,1\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I will receive the message \"The Loan Does Not Exist!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_loan_to_Zhibo_carleton_ca_does_not_exist()"
});
formatter.result({
  "duration": 38254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zhibo@carleton.ca,1999567891456,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_return_the_copy(String)"
});
formatter.result({
  "duration": 131556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The Loan Does Not Exist!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 35455,
  "status": "passed"
});
formatter.uri("valid/AddItemVal.feature");
formatter.feature({
  "line": 1,
  "name": "Add Item Valid",
  "description": "",
  "id": "add-item-valid",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Tv5 Add Item",
  "description": "",
  "id": "add-item-valid;tv5-add-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I create the title \"1234567890147,book\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I create a copy \"1234567890147\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I will receive the message \"Success!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890147,book",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 92058,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890147",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 93613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 29545,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Tv6 Add Item",
  "description": "",
  "id": "add-item-valid;tv6-add-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I create the title \"2234567890147,book\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I create a copy \"2234567890147\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I create a copy \"2234567890147\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I create a copy \"2234567890147\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I will receive the message \"Success!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "2234567890147,book",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 96723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2234567890147",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 196557,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2234567890147",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 120049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2234567890147",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 57225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 29857,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Tv7 Add Item",
  "description": "",
  "id": "add-item-valid;tv7-add-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 16,
  "name": "I create the title \"3234567890147,book\"",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "I create a copy \"3234567890147\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I create a copy \"3234567890147\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I create a copy \"3234567890147\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I try and remove \"3234567890147,2\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I create a copy \"3234567890147\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "I create a copy \"3234567890147\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I will receive the message \"Success!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "3234567890147,book",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 153016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3234567890147",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 122537,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3234567890147",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 96723,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3234567890147",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 57225,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3234567890147,2",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.i_try_and_remove(String)"
});
formatter.result({
  "duration": 89259,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3234567890147",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 74019,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3234567890147",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 69977,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 43541,
  "status": "passed"
});
formatter.uri("valid/AddTitleVal.feature");
formatter.feature({
  "line": 1,
  "name": "Add Title Valid",
  "description": "",
  "id": "add-title-valid",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Tv3 Add Title",
  "description": "",
  "id": "add-title-valid;tv3-add-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "that the title and ISBN does not exist",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I create the title \"7894561230147,item book\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I will receive the message \"Success!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.that_the_title_and_ISBN_does_not_exist()"
});
formatter.result({
  "duration": 156748,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7894561230147,item book",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 90192,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 27369,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Tv4 Add Title",
  "description": "",
  "id": "add-title-valid;tv4-add-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I create the title \"1234567890147,book\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I try and remove the title \"1234567890147\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I create the title \"1234567890147,book\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I will receive the message \"Success!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890147,book",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 103254,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890147",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_try_and_remove_the_title(String)"
});
formatter.result({
  "duration": 212729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890147,book",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 112273,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 31723,
  "status": "passed"
});
formatter.uri("valid/AddUserVal.feature");
formatter.feature({
  "line": 1,
  "name": "Add user Valid",
  "description": "",
  "id": "add-user-valid",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Tv1 Add\tUser",
  "description": "",
  "id": "add-user-valid;tv1-add-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "that the user \"Joe@carleton.ca\" does not exist",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I create the user \"Joe@carleton.ca,pass\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I will receive the message \"Success!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Joe@carleton.ca",
      "offset": 15
    }
  ],
  "location": "StepDefinitions.that_the_user_does_not_exist(String)"
});
formatter.result({
  "duration": 69043,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Joe@carleton.ca,pass",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_create_the_user(String)"
});
formatter.result({
  "duration": 562302,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 37321,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Tv2 Add\tUser",
  "description": "",
  "id": "add-user-valid;tv2-add-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I create the user \"Toe@carleton.ca,pass\"",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I attempt to remove the user \"Toe@carleton.ca\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "trying to create \"Toe@carleton.ca,pass\" again",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I will receive the message \"Success!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Toe@carleton.ca,pass",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_create_the_user(String)"
});
formatter.result({
  "duration": 497924,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Toe@carleton.ca",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.i_attempt_to_remove_the_user(String)"
});
formatter.result({
  "duration": 128135,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Toe@carleton.ca,pass",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.trying_to_create_again(String)"
});
formatter.result({
  "duration": 41675,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 215528,
  "status": "passed"
});
formatter.uri("valid/BorrowCopyVal.feature");
formatter.feature({
  "line": 1,
  "name": "Borrow Copy Valid",
  "description": "",
  "id": "borrow-copy-valid",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Tv8\tBorrow",
  "description": "",
  "id": "borrow-copy-valid;tv8-borrow",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I create the user \"dirk@carleton.ca,pass\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I create the user \"thom@carleton.ca,pass\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I create the title \"5234567890432,The stanky cheese man\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I create the title \"1234567892432,The man\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I create a copy \"5234567890432\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I create a copy \"5234567890432\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I create a copy \"5234567890432\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I create a copy \"1234567892432\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I create a copy \"1234567892432\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I create a copy \"1234567892432\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I have the user borrow the copy \"dirk@carleton.ca,1234567892432,3\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I have the user borrow the copy \"thom@carleton.ca,1234567892432,2\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I will receive the message \"Success!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "dirk@carleton.ca,pass",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_create_the_user(String)"
});
formatter.result({
  "duration": 145551,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thom@carleton.ca,pass",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_create_the_user(String)"
});
formatter.result({
  "duration": 63445,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5234567890432,The stanky cheese man",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 159236,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567892432,The man",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 197801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5234567890432",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 152393,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5234567890432",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 99522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5234567890432",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 93613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567892432",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 92369,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567892432",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 88637,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567892432",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 85527,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dirk@carleton.ca,1234567892432,3",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 252849,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thom@carleton.ca,1234567892432,2",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 222992,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 32656,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Tv15\tBorrow",
  "description": "",
  "id": "borrow-copy-valid;tv15-borrow",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "I create the user \"dirkyl@carleton.ca,pass\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "I create the user \"thomas@carleton.ca,pass\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I create the title \"9934567890432,The stanky cheese man\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I create the title \"8734567892432,The man\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I create a copy \"9934567890432\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I create a copy \"9934567890432\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I create a copy \"9934567890432\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I create a copy \"8734567892432\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I create a copy \"8734567892432\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I create a copy \"8734567892432\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I have the user borrow the copy \"dirkyl@carleton.ca,9934567890432,1\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I have the user borrow the copy \"dirkyl@carleton.ca,8734567892432,3\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I have the user borrow the copy \"thomas@carleton.ca,9934567890432,2\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I have the user borrow the copy \"thomas@carleton.ca,8734567892432,2\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I have the user return the copy \"dirkyl@carleton.ca,9934567890432,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I have the user return the copy \"dirkyl@carleton.ca,8734567892432,3\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I have the user return the copy \"thomas@carleton.ca,9934567890432,2\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I have the user return the copy \"thomas@carleton.ca,8734567892432,2\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I have the user borrow the copy \"thomas@carleton.ca,9934567890432,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I have the user borrow the copy \"thomas@carleton.ca,8734567892432,3\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I will receive the message \"Success!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "dirkyl@carleton.ca,pass",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_create_the_user(String)"
});
formatter.result({
  "duration": 195935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thomas@carleton.ca,pass",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_create_the_user(String)"
});
formatter.result({
  "duration": 109475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9934567890432,The stanky cheese man",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 11195654,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8734567892432,The man",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 264668,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9934567890432",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 332156,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9934567890432",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 157991,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9934567890432",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 592470,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8734567892432",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 924937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8734567892432",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 215217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8734567892432",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 241964,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dirkyl@carleton.ca,9934567890432,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 429501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dirkyl@carleton.ca,8734567892432,3",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 660891,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thomas@carleton.ca,9934567890432,2",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 358280,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thomas@carleton.ca,8734567892432,2",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 647207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dirkyl@carleton.ca,9934567890432,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_return_the_copy(String)"
});
formatter.result({
  "duration": 231700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "dirkyl@carleton.ca,8734567892432,3",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_return_the_copy(String)"
});
formatter.result({
  "duration": 736155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thomas@carleton.ca,9934567890432,2",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_return_the_copy(String)"
});
formatter.result({
  "duration": 234188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thomas@carleton.ca,8734567892432,2",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_return_the_copy(String)"
});
formatter.result({
  "duration": 359525,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thomas@carleton.ca,9934567890432,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 2800935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "thomas@carleton.ca,8734567892432,3",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 541153,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 45096,
  "status": "passed"
});
formatter.uri("valid/PayFineVal.feature");
formatter.feature({
  "line": 1,
  "name": "Paying Fine Valid",
  "description": "",
  "id": "paying-fine-valid",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Ti26 Pay Fine Loan Exists",
  "description": "",
  "id": "paying-fine-valid;ti26-pay-fine-loan-exists",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "The user Sun@carleton.ca has outstanding fees",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I try and pay fine for \"Sun@carleton.ca\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I will receive the message \"Success!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_user_Sun_carleton_ca_has_outstanding_fees()"
});
formatter.result({
  "duration": 37010,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sun@carleton.ca",
      "offset": 24
    }
  ],
  "location": "StepDefinitions.i_try_and_pay_fine_for(String)"
});
formatter.result({
  "duration": 110408,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 29546,
  "status": "passed"
});
formatter.uri("valid/RemoveItemVal.feature");
formatter.feature({
  "line": 2,
  "name": "Removing Item Valid",
  "description": "",
  "id": "removing-item-valid",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Ti9 Remove Item",
  "description": "",
  "id": "removing-item-valid;ti9-remove-item",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I create the title \"5534567890765,book1\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I create the title \"5934567890765,book2\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I create a copy \"5534567890765\"",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I create a copy \"5534567890765\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I create a copy \"5534567890765\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I create a copy \"5934567890765\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I create a copy \"5934567890765\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I create a copy \"5934567890765\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I try and remove \"5534567890765,2\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I try and remove \"5934567890765,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I try and remove \"5934567890765,3\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I will receive the message \"Success!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "5534567890765,book1",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 249739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5934567890765,book2",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 680796,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5534567890765",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 93613,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5534567890765",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 310074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5534567890765",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 69666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5934567890765",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 54115,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5934567890765",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 137155,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5934567890765",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 60958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5534567890765,2",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.i_try_and_remove(String)"
});
formatter.result({
  "duration": 268399,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5934567890765,1",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.i_try_and_remove(String)"
});
formatter.result({
  "duration": 294835,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5934567890765,3",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.i_try_and_remove(String)"
});
formatter.result({
  "duration": 185049,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 46029,
  "status": "passed"
});
formatter.uri("valid/RemoveTitleVal.feature");
formatter.feature({
  "line": 2,
  "name": "Remove Title Valid",
  "description": "",
  "id": "remove-title-valid",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Tv10 Remove\tTitle",
  "description": "",
  "id": "remove-title-valid;tv10-remove-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I create the title \"1435547890456,book\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I try and remove the title \"1435547890456\"",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I will receive the message \"Success!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1435547890456,book",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 245074,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1435547890456",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_try_and_remove_the_title(String)"
});
formatter.result({
  "duration": 341487,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 34832,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Tv12 Remove\ttitle",
  "description": "",
  "id": "remove-title-valid;tv12-remove-title",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I create the user \"Tge@carleton.ca,pass\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I create the title \"1435587890456,book\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I create a copy \"1435587890456\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I have the user borrow the copy \"Tge@carleton.ca,1435587890456,1\"",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I have the user return the copy \"Tge@carleton.ca,1435587890456,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I try and remove \"1435587890456,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I try and remove the title \"1435587890456\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I will receive the message \"Success!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Tge@carleton.ca,pass",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_create_the_user(String)"
});
formatter.result({
  "duration": 329980,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1435587890456,book",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 1166279,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1435587890456",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 287682,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tge@carleton.ca,1435587890456,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 402755,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Tge@carleton.ca,1435587890456,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_return_the_copy(String)"
});
formatter.result({
  "duration": 179141,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1435587890456,1",
      "offset": 18
    }
  ],
  "location": "StepDefinitions.i_try_and_remove(String)"
});
formatter.result({
  "duration": 147107,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1435587890456",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_try_and_remove_the_title(String)"
});
formatter.result({
  "duration": 311008,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 30790,
  "status": "passed"
});
formatter.uri("valid/RemoveUserVal.feature");
formatter.feature({
  "line": 1,
  "name": "Remove User Valid",
  "description": "",
  "id": "remove-user-valid",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Tv11 Remove User",
  "description": "",
  "id": "remove-user-valid;tv11-remove-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I create the user \"Carlos@carleton.ca,pass\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I attempt to remove the user \"Carlos@carleton.ca\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I will receive the message \"Success!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Carlos@carleton.ca,pass",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_create_the_user(String)"
});
formatter.result({
  "duration": 153016,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Carlos@carleton.ca",
      "offset": 30
    }
  ],
  "location": "StepDefinitions.i_attempt_to_remove_the_user(String)"
});
formatter.result({
  "duration": 73087,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 26747,
  "status": "passed"
});
formatter.uri("valid/RenewCopyVal.feature");
formatter.feature({
  "line": 1,
  "name": "Renew Copy Valid",
  "description": "",
  "id": "renew-copy-valid",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Tv13 Renew Loan",
  "description": "",
  "id": "renew-copy-valid;tv13-renew-loan",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I create the user \"Chuckt@carleton.ca,pass\"",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I create the title \"1234562291456,stank city\"",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "I create a copy \"1234562291456\"",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I have the user borrow the copy \"Chuckt@carleton.ca,1234562291456,1\"",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I have the user renew the copy \"Chuckt@carleton.ca,1234562291456,1\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I will receive the message \"Success!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Chuckt@carleton.ca,pass",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_create_the_user(String)"
});
formatter.result({
  "duration": 171054,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234562291456,stank city",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 74953,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234562291456",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 55981,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chuckt@carleton.ca,1234562291456,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 188782,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chuckt@carleton.ca,1234562291456,1",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_have_the_user_renew_the_copy(String)"
});
formatter.result({
  "duration": 1833701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 49450,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Tv14 Renew Loan Max Times",
  "description": "",
  "id": "renew-copy-valid;tv14-renew-loan-max-times",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I create the user \"Chuck3@carleton.ca,pass\"",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I create the title \"1834562291456,stank city\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I create a copy \"1834562291456\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I have the user borrow the copy \"Chuck3@carleton.ca,1834562291456,1\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I have the user renew the copy \"Chuck3@carleton.ca,1834562291456,1\"",
  "keyword": "And "
});
formatter.step({
  "comments": [
    {
      "line": 17,
      "value": "#And I have the user renew the copy \"Chuck3@carleton.ca,1834562291456,1\""
    }
  ],
  "line": 18,
  "name": "I will receive the message \"Success!\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Chuck3@carleton.ca,pass",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_create_the_user(String)"
});
formatter.result({
  "duration": 208686,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1834562291456,stank city",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 142753,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1834562291456",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 609575,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chuck3@carleton.ca,1834562291456,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 1184939,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Chuck3@carleton.ca,1834562291456,1",
      "offset": 32
    }
  ],
  "location": "StepDefinitions.i_have_the_user_renew_the_copy(String)"
});
formatter.result({
  "duration": 1761859,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 299812,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Tv16 Renew when full",
  "description": "",
  "id": "renew-copy-valid;tv16-renew-when-full",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "I create the user \"alison@carleton.ca,pass\"",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I create the title \"1834544491456,1 city\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I create the title \"1834576591456,2 city\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I create a copy \"1834544491456\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I create a copy \"1834544491456\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I create a copy \"1834576591456\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I create a copy \"1834576591456\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I have the user borrow the copy \"alison@carleton.ca,1834544491456,1\"",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "I have the user borrow the copy \"alison@carleton.ca,1834576591456,2\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "alison@carleton.ca,pass",
      "offset": 19
    }
  ],
  "location": "StepDefinitions.i_create_the_user(String)"
});
formatter.result({
  "duration": 540531,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1834544491456,1 city",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 167322,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1834576591456,2 city",
      "offset": 20
    }
  ],
  "location": "StepDefinitions.i_create_the_title(String)"
});
formatter.result({
  "duration": 124092,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1834544491456",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 138709,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1834544491456",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 156437,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1834576591456",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 2335979,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1834576591456",
      "offset": 17
    }
  ],
  "location": "StepDefinitions.i_create_a_copy(String)"
});
formatter.result({
  "duration": 260935,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alison@carleton.ca,1834544491456,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 179452,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "alison@carleton.ca,1834576591456,2",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_borrow_the_copy(String)"
});
formatter.result({
  "duration": 167944,
  "status": "passed"
});
formatter.uri("valid/ReturnCopyVal.feature");
formatter.feature({
  "line": 1,
  "name": "Return Copy Valid",
  "description": "",
  "id": "return-copy-valid",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Ti27 Return Copy That Does Not Exist",
  "description": "",
  "id": "return-copy-valid;ti27-return-copy-that-does-not-exist",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "The loan to Yu@carleton.ca exists",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I have the user return the copy \"Yu@carleton.ca,9781442667181,1\"",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I will receive the message \"Success!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitions.the_loan_to_Yu_carleton_ca_exists()"
});
formatter.result({
  "duration": 36077,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Yu@carleton.ca,9781442667181,1",
      "offset": 33
    }
  ],
  "location": "StepDefinitions.i_have_the_user_return_the_copy(String)"
});
formatter.result({
  "duration": 259069,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Success!",
      "offset": 28
    }
  ],
  "location": "StepDefinitions.i_will_receive_the_message(String)"
});
formatter.result({
  "duration": 50384,
  "status": "passed"
});
});