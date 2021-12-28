const initialState = { favourite: [], quantity: 0 };

export const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITE':
      return {
        ...state,
        favourite: [...state.favourite, action.payload],

        quantity: (state.quantity += 1),
      };
    case 'REMOVE_FROM_FAVOURITE':
      return {
        ...state,
        favourite: state.favourite.filter(
          (item) => item.id !== action.payload.id,
        ),
        quantity: (state.quantity -= 1),
      };
    default:
      return state;
  }
};
