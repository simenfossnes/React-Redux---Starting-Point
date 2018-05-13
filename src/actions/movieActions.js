import * as types from './actionTypes';

function addMovie(movie) {
  return {
    type: types.ADD_MOVIE,
    movie
  }
}
