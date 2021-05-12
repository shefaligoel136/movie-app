// actions are plain JS object where you have to specify the type property or any other data eg movie- arr, user info-obj etc

// {
//     type : 'ADD_MOVIES'
// }
// {
//     type : 'DECREASE_COUNT'
// }

// action types -> for variables
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITE = 'ADD_FAVOURITE';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const SET_SHOW_FAVOURITE = 'SET_SHOW_FAVOURITE'


// action creators -> for functions ,obj
export function addMovies(movies){
    return{
        type: ADD_MOVIES,
        movies
    }
}

export function addFavourite(movie){
    return{
        type: ADD_FAVOURITE,
        movie
    }
}

export function removeFavourite(movie){
    return{
        type: REMOVE_FAVOURITE,
        movie
    }
}

export function setShowFavourites(val){
    return{
        type: SET_SHOW_FAVOURITE,
        val // true or false
    }
}