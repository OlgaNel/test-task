Feature: User Registration

  Scenario: Register a new user with valid details
    Given User opens Booking.com homepage
    When User clicks on the 'Register' button
    And User enters valid email
    And User clicks on the 'Continue with email' button
    And User enters a valid password
    And User confirms the password
    And User clicks on the 'Create account' button
    Then Booking homepage is displayed
    And User reseives confirmation email
    
  
  Scenario: Verify email field is validated if leave it empty and click to continue
    Given User opens Booking.com homepage
    When User clicks on the 'Register' button
    When User clicks on the 'Continue with email' button
    Then Email field is validated
    And 'Enter email error' error message is displayed for email field

  Scenario: Verify the field of password is validated if user enters invalid password format
    Given User opens Booking.com homepage
    When User clicks on the 'Register' button
    And User enters valid email
    And User clicks on the 'Continue with email' button
    And User enters an invalid password that doesn`t match 'lowercase' rule
    And User clicks on the 'Create account' button
    Then 'Lowercase is missed' error message is displayed for password field
    When User enters an invalid password that doesn`t match 'uppercase' rule
    Then 'Uppercase is missed' error message is displayed for password field
    When User enters an invalid password that doesn`t match 'digit' rule
    Then 'Digit is missed' error message is displayed for password field
    When User enters an invalid password that doesn`t match 'length' rule
    Then 'Length is less than 10' error message is displayed for password field
    