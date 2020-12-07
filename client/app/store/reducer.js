const initialState = {
    schedule: [],
  }
  
  const reducer = (state = initialState,action)=>{
    switch (action.type) {
      case "GET_SCHEDULE":
        return{...state, schedule: action.payload.scheduleList};
      default:
        return state
    }
  }
  
  export default reducer