Feature: Github Cards

Scenario: Render issue openend
  Given An event of type IssuesEvent
  Given A repository named awesome/work
  When I render the card
  Then The card title should be Opened issue
  And The card subtitle should be awesome/work

Scenario: Render issue comment created
  Given An event of type IssueCommentEvent
  Given A repository named cool/stuff
  When I render the card
  Then The card title should be Created comment
  And The card subtitle should be cool/stuff

Scenario: Render pull request opened
  Given An event of type PullRequestEvent
  Given A repository named code/rocks
  When I render the card
  Then The card title should be Opened pull request
  And The card subtitle should be code/rocks
