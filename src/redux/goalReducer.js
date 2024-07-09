const initialState = {
    goals: [],
  };
  
  const goalReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_GOAL':
        return {
          ...state,
          goals: [...state.goals, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default goalReducer;
  