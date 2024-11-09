class RegistrationPage {
    elements = {
        emailInput: () => cy.get('input[id="username"]'),
        passwordInput: () => cy.get('input[id="new_password"]'),
        confirmPasswordInput: () => cy.get('input[id="confirmed_password"]')
    }

    typeEmail = (text) => {
        this.elements.emailInput.type(text);
    }

    typePassword = (text) => {
        this.elements.passwordInput.type(text);
    };
}

export default new RegistrationPage();
