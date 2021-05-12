import { combineReducers } from 'redux'
import { ADD_MOVIES, ADD_FAVOURITE,REMOVE_FAVOURITE,SET_SHOW_FAVOURITE,ADD_MOVIE_TO_LIST,ADD_SEARCH_RESULT } from '../actions'

const initialMovieState = {
    list : [],
    favourites : [],
    showFavourites : false
}

const initialSearchState = {
    result : {},
    showSearchResult : false,
}

// const initialRootState = {
//     movies : initialMovieState,
//     search : initialSearchState
// }

// export default function rootReducer(state = initialRootState,action){
//     return{
//         movies : movies(state.movies,action),
//         search : search(state.search,action)
//     }
// }

export default combineReducers({
    movies,
    search
})

export function movies(state = initialMovieState ,action){
    // if( action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list: action.movies // movies is coming in action which is an array
    //     }
    // }
    // return state;


    switch(action.type){
        case ADD_MOVIES: 
            return{
                ... state,
                list: action.movies
            }

        case ADD_FAVOURITE:
            return{
                ...state,
                favourites: [action.movie, ...state.favourites]
            }
        
        case REMOVE_FAVOURITE:

            const filteredArray = state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            );

            return{
                 ...state,
                favourites: filteredArray
            }
        
        case SET_SHOW_FAVOURITE:
            return{
                ...state,
                showFavourites : action.val
            }
        
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list : [action.movie , ...state.list],
            }   

        default:
            return state;
    }
}

export function search(state = initialSearchState,action){

    switch(action.type){

        case ADD_SEARCH_RESULT : 
            return {
                ...state,
                result : action.movie,
                showSearchResult : true,
            }

        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                showSearchResult : false,
            }  

        default:
            return state;
    }
}
