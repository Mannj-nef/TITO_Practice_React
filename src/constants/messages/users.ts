const USER_MESSAGE = {
  NAME_INVALID: 'Name is Invalid',
  EMAIL_INVALID: 'Invalid email address',
  LOG_OUT_SUCCESS: 'Log out success',
  PASSWORD_INVALID: 'Password min 8 chars, at least 1 uppercase, 1 lowercase',
  PASSWORD_MUST_MATCH: 'Passwords must match',
  UPDATE_USER_SUCCESS: 'Update user success',
  UPDATE_USER_ERROR: 'Update user failed',
  EMAIL_OR_PASSWORD_INCORRECT: 'email or password, incorrect'
} as const

export default USER_MESSAGE
