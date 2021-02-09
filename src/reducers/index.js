import { ADD_MOVIES } from '../actions'

const initialMovieState = {
    list : [],
    favourites : []
}

export default function movies(state = initialMovieState ,action){
    if( action.type === ADD_MOVIES){
        return {
            ...state,
            list: action.movies // movies is coming in action which is an array
        }
    }
    return state;
}

