const initialState = {
    workout: [],
  };
  
  const workoutReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_WORKOUT':
        return {
          ...state,
          workout: [...state.workout, action.payload],
        };
      default:
        return state;
    }
  };
  
  export default workoutReducer;
  