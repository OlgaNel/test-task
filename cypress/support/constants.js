export const ERROR_BORDER_COLOR = "rgb(212, 17, 30)";
export const EMAIL_ERROR_MESSAGES = {
  "Empty field": "Enter your email address",
  "Invalid format": "Make sure the email address you entered is correct. ",
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

export const VALID_PASSWORD_REGEX = /[a-z]{4,10}[A-Z]{4,10}[0-9]{4,10}/;


