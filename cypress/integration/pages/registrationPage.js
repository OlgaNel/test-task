import { CREATE_ACCOUNT_BUTTON_TEXT, SUBMIT_EMAIL_BUTTON_TEXT } from "../../support/constants";

class RegistrationPage {
    elements = {
        emailInput: () => cy.get('input[id="username"]'),
        passwordInput: () => cy.get('input[id="new_password"]'),
        confirmPasswordInput: () => cy.get('input[id="confirmed_password"]'),
        emailErrorMessage: () => cy.get('[id="username-note"][role="alert"]'),
        passwordErrorMessage: () => cy.get('[id="new_password-note"][role="alert"]'),
        modalSignInDiscount: () => cy.get('[role="dialog"][aria-modal="true"]'),
        closeModalSignInDiscount: () => cy.get('[role="dialog"][aria-modal="true"]').find('button'),
        signUpButton: () => cy.get('[data-testid="header-sign-up-button"]'),
        submitButtonByText: (text) => cy.contains('button[type="submit"]', text),
    }

    typeEmail = (text) => {
        this.elements.emailInput().clear().type(text).blur();
    }

    typePassword = (text) => {
        this.elements.passwordInput().type(text);
    };

    typeConfirmPassword = (text) => {
        this.elements.confirmPasswordInput().type(text)
    }

    clickButtonByType(buttonType) {
        switch (buttonType) {
            case 'Register':
                this.elements.signUpButton().click();
                break;
            case 'Continue with email':
                this.elements.submitButtonByText(SUBMIT_EMAIL_BUTTON_TEXT).click();
                break;
            case 'Create account':
                this.elements.submitButtonByText(CREATE_ACCOUNT_BUTTON_TEXT).click();
                break;
            default:
                throw new Error(`Button type ${buttonType} is not defined`);
        }
    };

    clickCloseMidalSignInButton(){
        this.elements.closeModalSignInDiscount().click();
    }
}

export default new RegistrationPage();
