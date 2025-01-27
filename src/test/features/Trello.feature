Feature: Trello functionality testing

@ui
@login
Scenario: UC-1: User can log in to Trello
    Given the User open login page
    When the User enters their valid email and password
    Then the User should be redirected to their boards page

@ui
Scenario: UC-2: User edits their user profile
    Given the User is on their profile page
    When the User updates their profile name to "new_user13"
    Then a success alert should be displayed

@ui
Scenario: UC-3: User can create a board
    Given the User is on their profile page
    When the User creates a board named "Test Board"
    Then the board title should contain "Test Board"

@ui
Scenario: UC-4: User can search for a board
    Given the User is on their profile page
    When the User searches for a board named "Test Board"
    Then the board "Test Board" should be visible

@ui
Scenario: UC-5: User can create a list
    Given the User is on their profile page
    When the User creates a list named "New List" in the board "Test Board"
    Then the list title should be "New List"

@ui
Scenario: UC-6: User can create a card in the list
    Given the User is on their profile page
    When the User creates a card named "New Card" in the list "New List" of the board "Test Board"
    Then the card title should be "New Card"

@ui
Scenario: UC-7: User can filter cards in a list
    Given the User is on their profile page
    When the User filters cards using the keyword "Filter"
    Then the filtered card with title "Filter Card" should be displayed

@ui
Scenario: UC-8: User can edit their workspace
    Given the User is on their profile page
    When the User changes the workspace name to "New Workspace Name"
    Then the workspace name should be updated to "New Workspace Name"