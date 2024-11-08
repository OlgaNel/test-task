Feature: User Registration

  Scenario: Register a new user with valid details
    Given User opens Booking.com homepage
    When User clicks on the 'Register' button
    And User enters a 'valid' email
    And User clicks on the 'Continue with email' button
    And User enters a valid password
    And User confirms the password
    And User clicks on the 'Create account' button
    