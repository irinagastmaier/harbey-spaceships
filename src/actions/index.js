export const addToFavourite = (value) => {
  return {
    type: 'ADD_TO_FAVOURITE',
    payload: value,
  };
};

//CART

export const deleteAllFavourites = (value) => {
  return {
    type: 'DELETE_ALL_FAVOURITES',
    payload: value,
  };
};
