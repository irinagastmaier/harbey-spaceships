const initialState = { favourite: [], quantity: 0 };

export const favouriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVOURITE':
      return {
        ...state,
        favourite: [...state.cart, action.payload],

        quantity: (state.quantity += 1),
      };
    case 'REMOVE_FAVOURITE_ITEM':
      return {
        ...state,
        favourite: state.favourite.filter(
          (item) => item.id !== action.payload.id,
        ),
        quantity: (state.quantity -= 1),
      };
    case 'DELETE_ALL_FAVOURITES':
      return {
        initialState,
      };
    default:
      return state;
  }
};
