const reducer = (state, action) => {
  
  switch (action.type) {
    case 'SET_FAVORITE':
        return{
          ...state,
          myList: [...state.myList, action.payload]
        }
    case 'DELITE_FAVORITE':
      return {
        ...state,
        myList: state.myList.filter(items => items.id !== action.payload)
      }
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      }
      /* green Aqui llamamos el caso de nuestr accion que fue activada en 
      el componente, aqui le decimos que va a modeficar, llamando primero a 
      todo el estado y direccionando el dato que vamos a modificar */
    case 'LOGOUT_REQUEST':
      return{
        ...state,
        user: action.payload,
      }
    default: 
      return state;
  }
}

export default reducer;