export const setFavorite = payload => ({
  type: 'SET_FAVORITE',
  payload,
});

export const deliteFavorite = payload => ({
  type: 'DELITE_FAVORITE',
  payload,
});

export const loginRequest = payload => ({
  type: 'LOGIN_REQUEST',
  payload,
});
/* green Hacemos el bautizo de nuestra action, ahora pasa al reducer */
export const logoutRequest = payload => ({
  type: 'LOGOUT_REQUEST',
  payload,
})