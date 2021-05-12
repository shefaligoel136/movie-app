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
export const SET_SHOW_FAVOURITE = 'SET_SHOW_FAVOURITE';
export const ADD_MOVIE_TO_LIST = 'ADD_MOVIE_TO_LIST';
export const ADD_SEARCH_RESULT = 'ADD_SEARCH_RESULT';


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

export function addMovieToList(movie){
    return{
        type: ADD_MOVIE_TO_LIST,
        movie
    }
}

export function handleMovieSearch(movie){
    // get api url

    const url = `http://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`;

    return function(dispatch){
        fetch(url)
        // .then(response => console.log(response));
        .then(response => response.json())
        .then(movie => {
            console.log('movie',movie)

            // dispatch an action to add movie to the store
            dispatch(addMovieSearchResult(movie));
        })
    }

}

export function addMovieSearchResult(movie){
     return{
         type: ADD_SEARCH_RESULT,
         movie
     }
}