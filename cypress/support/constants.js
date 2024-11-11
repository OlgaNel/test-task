export const ERROR_BORDER_COLOR = "rgb(212, 17, 30)";
export const EMAIL_ERROR_MESSAGES = {
  "Enter email error": "Enter your email address",
  "Check email": "Make sure the email address you entered is correct. ",
};
export const PASSWORD_ERROR_MESSAGES = {
  "Lowercase is missed": "Your password must include at least one lowercase letter",
  "Uppercase is missed": "Your password must include at least one lowercase letter",
  "Digit is missed": "Your password must include at least one number",
  "Length is less than 10": "Your password must be at least 10 characters",
};
export const INVALID_PASSWORD_REGEX = {
  lowercase: /[A-Z]{5,10}[0-9]{5,10}/,
  uppercase: /[a-z]{5,10}[0-9]{5,10}/,
  digit: /[a-z]{5,10}[A-Z]{5,10}/,
  length: /[a-z]{1,3}[A-Z]{1,3}[0-9]{1,3}/,
};

export const INVALID_EMAIL_REGEX = {
    "missed @": /[a-z]{5,20}.[a-z]{5,20}/,
    "has spaces": /[a-z]{5,10} [a-z]{2,10}@[a-z]{3,10}\.com/,
    "period is missed in domain": /[a-z]{5,20}@[a-z]{5,20}/,
    "@ at the start of email": /@[a-z]{5,20}@[a-z]{5,20}.com/,
    "@ at the end of email": /[a-z]{5,20}@[a-z]{5,20}.com@/,
    "multiple @ in email": /[a-z]{5,10}@[a-z]{2,10}@@[a-z]{3,10}.com/,
    "domain extension length is less than 2": /[a-z]{5,10}[a-z]{2,10}@[a-z]{3,10}.c/
};

export const VALID_PASSWORD_REGEX = /[a-z]{4,10}[A-Z]{4,10}[0-9]{4,10}/;

export const CREATE_ACCOUNT_BUTTON_TEXT = 'Create account';
export const SUBMIT_EMAIL_BUTTON_TEXT = 'Continue with email';

