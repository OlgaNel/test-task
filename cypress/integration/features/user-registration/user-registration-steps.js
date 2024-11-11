import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import {
  ERROR_BORDER_COLOR, INVALID_EMAIL_REGEX,
} from "../../../support/constants";
import { 
  generateInvalidPassword, 
  generateEmail, 
  generateValidPassword, 
  getRegistrationErrorMessageEmail, 
  getRegistrationErrorMessagePassword 
} from "../../../support/helpers";
import registrationPage from "../../pages/registrationPage";

Given("User opens Booking.com homepage", () => {
  cy.visit("/");
});

When('User closes modal window', () => {
  registrationPage.elements.modalSignInDiscount().should('be.visible');
  registrationPage.clickCloseMidalSignInButton();
})

//For clicking on button can be used general approach, but I prefer more defined
//
// When("User clicks on the {string} button", (buttonText) => {
//   cy.contains(buttonText).click();
// });
//
// For consistency I will not change the values that can be put to {string} variable, so you can check both step definitions

When("User clicks on the {string} button", (button) => {
  registrationPage.clickButtonByType(button);
});

When("User enters valid email", () => {
  const email = generateEmail(true);

  registrationPage.typeEmail(email);
});

When("User enters a valid password", () => {
  let password = generateValidPassword();

  // set password to context variable
  cy.task("setValue", { key: "validPassword", value: password });
  registrationPage.typePassword(password);
});

When("User confirms the password", () => {
  // get password value from context variable and type it to the field
  cy.task("getValue", "validPassword").then((validPassword) => registrationPage.typeConfirmPassword(validPassword))
});

Then("Email field is validated", () => {
  registrationPage.elements.emailInput()
    .siblings('div')
    .should("have.css", "border-color", ERROR_BORDER_COLOR);
});

Then("{string} error message is displayed for email field", (fieldErrorLabel) => {
  const errorMessage = getRegistrationErrorMessageEmail(fieldErrorLabel);

  registrationPage.elements.emailErrorMessage()
    .should("have.text", errorMessage);
});

When("User enters an invalid password that doesn`t match {string} rule", (rule) => {
  registrationPage.typePassword(generateInvalidPassword(rule))
});

Then("{string} error message is displayed for password field", (fieldErrorType) => {
  const errorMessage = getRegistrationErrorMessagePassword(fieldErrorType);

  registrationPage.elements.passwordErrorMessage()
    .should("have.text", errorMessage);
});

When('User enters invalid email that doesn`t match {string}', (rule) => {
  const email = generateEmail(false, INVALID_EMAIL_REGEX[rule]);
  registrationPage.typeEmail(email);
})
