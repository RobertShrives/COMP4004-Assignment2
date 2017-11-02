$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumberTests/myfeature.feature");
formatter.feature({
  "line": 1,
  "name": "Proof of concept",
  "description": "",
  "id": "proof-of-concept",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "My first test",
  "description": "",
  "id": "proof-of-concept;my-first-test",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "this is my first step",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "this is my second step",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "this is my third step",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});