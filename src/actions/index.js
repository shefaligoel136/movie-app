// actions are plain JS object where you have to specify the type property or any other data eg movie- arr, user info-obj etc

// {
//     type : 'ADD_MOVIES'
// }
// {
//     type : 'DECREASE_COUNT'
// }

// action types -> for variables
export const ADD_MOVIES = 'ADD_MOVIES';


// action creators -> for functions ,obj
export function addMovies(movies){
    return{
        type: ADD_MOVIES,
        movies
    }
}