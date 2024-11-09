import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import {
  ERROR_BORDER_COLOR,
} from "../../../support/constants";
import { 
  generateInvalidPassword, 
  generateValidEmail, 
  generateValidPassword, 
  getRegistrationErrorMessageEmail, 
  getRegistrationErrorMessagePassword 
} from "../../../support/helpers";
import registrationPage from "../../pages/registrationPage";

Given("User opens Booking.com homepage", () => {
  cy.visit("/");
});

When("User clicks on the {string} button", (buttonText) => {
  cy.get('button').contains(buttonText).click();
});

When("User enters valid email", () => {
  const email = generateValidEmail();

  cy.get('input[type="email"]').type(email);
});

When("User enters a valid password", () => {
  let password = generateValidPassword();

  // set password to context variable
  cy.task("setValue", { key: "validPassword", value: password });
  registrationPage.typePassword(password);
  //cy.get('input[type="password"]').type(password);
});

When("User confirms the password", () => {
  // get password value from context variable and type it to the field
  cy.task("getValue", "validPassword").then((validPassword) => {
    cy.get('input[type="password"][name="confirm_password"]').type(
      validPassword
    );
  });
});

Then("Email field is validated", () => {
  // For such cases I would better use custom attributes
  //TODO: check if sibling works, rewrite it so everything will be hidden in method
  cy.get('input[id="username"]')
    .siblings('div')
    .should("have.css", "border-color", ERROR_BORDER_COLOR);
});

Then("{string} page is displayed", (pageText) => {
  cy.get(".page-header").should("have.text", pageText).and.should("be.visible");
});

Then("{string} error message is displayed for email field", (fieldErrorLabel) => {
  const errorMessage = getRegistrationErrorMessageEmail(fieldErrorLabel);

  cy.get('[id="username-note"]')
    .should("have.text", errorMessage);
});

When("User enters an invalid password that doesn`t match {string} rule", (rule) => {
  cy.get('input[type="password"]').type(generateInvalidPassword(rule));
});

Then("{string} error message is displayed for password field", (fieldErrorType) => {
  const errorMessage = getRegistrationErrorMessagePassword(fieldErrorType);

  cy.get('[id="new_password-note"]').should("have.text", errorMessage);
});
