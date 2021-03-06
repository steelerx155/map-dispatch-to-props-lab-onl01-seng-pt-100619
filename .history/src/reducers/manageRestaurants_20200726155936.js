export default function manageRestaurants(state = {
  restaurants: []
}, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':
      return {
        ...state,
        restaurants: [...state.restaurants, action.restaurant]
      }

    default:
      return state;

  }
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: () => {
      dispatch(addRestaurant())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);