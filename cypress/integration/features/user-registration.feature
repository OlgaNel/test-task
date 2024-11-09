Feature: User Registration

  Scenario: Register a new user with valid details
    Given User opens Booking.com homepage
    When User clicks on the 'Register' button
    And User enters a 'valid' email
    And User clicks on the 'Continue with email' button
    And User enters a valid password
    And User confirms the password
    And User clicks on the 'Create account' button
    # Then Booking homepage is displayed
    # And User reseives confirmation email
    

  Scenario: Verify the field of email is validated if user enters invalid email format
    Given User opens Booking.com homepage
    When User clicks on the 'Register' button
    #TODO: check if table data can be used to provide the list of emails and how it will work in cypress + empty table data for valid password
    And User enters 'invalid' email
    |lowercase|
    |uppercase|
    |digit|
    |length|
    