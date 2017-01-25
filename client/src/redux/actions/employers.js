export const SET_EMPLOYERS = "SET_EMPLOYERS"
export const SET_SELECTED_EMPLOYER_ID = "SET_SELECTED_EMPLOYER_ID"

export function setEmployers( employers ) {
  return {
    type: SET_EMPLOYERS,
    employers
  }
}

export function setSelectedEmployerId( id ) {
  return {
    type: SET_SELECTED_EMPLOYER_ID,
    id
  }
}
