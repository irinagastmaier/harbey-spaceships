import { ADD_TO_FAVOURITE } from './types';

//HeartIcon.js

export function addToFavourite(value) {
  return {
    type: ADD_TO_FAVOURITE,
    payload: value,
  };
}
