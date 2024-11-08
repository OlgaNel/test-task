import { Faker } from '@faker-js/faker';
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('User opens Booking.com homepage', () => {
  cy.visit('https://www.booking.com');
});

When('User clicks on the {string} button', (buttonText) => {
  cy.contains(buttonText).click();
});

When('User enters a {string} email', (validness) => {
  let email;
  let isValid = validness.includes('valid') ? true : false;
  
  if (isValid) {
    email = `e2e_test_${new Date().getTime()}@gmail.com` 
  } else {
    email = new Faker().string()
  }
  cy.get('input[type="email"]').type(email);
});

When('User enters a valid password', () => {
  // generate random valid password
  let password = new Faker().internet.password()
  .internet.password({
    length: Math.random(10, 100),
    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]*$/
  })

  console.log(password, 11111111)
  // set password to context variable
  cy.task('setValue', {key: 'validPassword', value: password})
  cy.task('getValue', 'validPassword').then((val) => {
    console.log(val, 1)
  })

  cy.get('input[type="password"]').type(password);
});

When('User confirms the password {string}', (password) => {
  // get password value from context variable and type it to the field
  cy.task('getValue', 'validPassword').then((validPassword) => {
    cy.get('input[type="password"][name="confirm_password"]').type(validPassword);
  })
});

When('User clicks Create account', () => {
  cy.contains('Create account').click();
});
