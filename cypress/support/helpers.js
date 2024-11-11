import { faker } from "@faker-js/faker";
import { EMAIL_ERROR_MESSAGES, INVALID_PASSWORD_REGEX, PASSWORD_ERROR_MESSAGES, VALID_PASSWORD_REGEX } from "./constants";

export const getRegistrationErrorMessageEmail = (label) => {
    const errorMessage = EMAIL_ERROR_MESSAGES[label];

    if (errorMessage) {
        return errorMessage;
    } else {
        throw new Error(`${label} error type does not exist.`);
    }
};

export const getRegistrationErrorMessagePassword = (label) => {
    const errorMessage = PASSWORD_ERROR_MESSAGES[label];

    if (!errorMessage) throw new Error(`${label} error type does not exist`);

    return errorMessage;
};

// FIXME: https://github.com/faker-js/faker/issues/768
// faker.internet.password has problem with generating password by RegEx. 'maximum call stack size exceeded' error is returned
export const generateValidPassword = () => faker.helpers.fromRegExp(VALID_PASSWORD_REGEX);

export const generateInvalidPassword = (rule) => {
    let regex = INVALID_PASSWORD_REGEX[rule];
    
    if (!regex) throw new Error(`Invalid password type does not exist.`);

    return faker.helpers.fromRegExp(regex);
};

export const generateEmail = (isValid, regex) => isValid? faker.internet.email() : faker.helpers.fromRegExp(regex);
