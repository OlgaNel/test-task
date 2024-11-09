import faker from '../../../support/faker';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

//TODO: get env variable and use baseUrl
Given('User opens Booking.com homepage', () => {
  cy.visit('https://www.booking.com');
});

//TODO: add to common? check if it works in common
When('User clicks on the {string} button', (buttonText) => {
  cy.contains(buttonText).click();
});

When('User enters a {string} email', (validness) => {
  let email;
  let isValid = validness.includes('valid') ? true : false;
  
  if (isValid) {
    email = `e2e_test_${new Date().getTime()}@gmail.com` 
  } else {
    email = faker.string()
  }
  cy.get('input[type="email"]').type(email);
});

//TODO: check one more time generating password
When('User enters a valid password', () => {
  // generate random valid password
  let password = faker.internet.password({
    length: Math.random(10, 100),
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]*$/
  })

  // set password to context variable
  cy.task('setValue', {key: 'validPassword', value: password})
  cy.get('input[type="password"]').type(password);
});

When('User confirms the password', () => {
  // get password value from context variable and type it to the field
  cy.task('getValue', 'validPassword').then((validPassword) => {
    cy.get('input[type="password"][name="confirm_password"]').type(validPassword);
  })
});
