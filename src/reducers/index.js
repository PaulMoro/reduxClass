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
    default: 
      return state;
  }
}

export default reducer;