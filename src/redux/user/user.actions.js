// This set user action receives user data and passes it as the payload
// to then be used within a reducer

export const setCurrentUser = user => ({
  type: 'SET_CURRENT_USER',
  payload: user
});