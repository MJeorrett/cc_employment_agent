export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const SET_USER_EMAIL = 'SET_USER_EMAIL'
export const SET_USER_PASSWORD = 'SET_USER_PASSWORD'

export function setCurrentUser( currentUser ) {
  return {
    type: SET_CURRENT_USER,
    currentUser
  }
}

export function setUserEmail( email ) {
  return {
    type: SET_USER_EMAIL,
    email
  }
}

export function setUserPassword( password ) {
  return {
    type: SET_USER_PASSWORD,
    password
  }
}
