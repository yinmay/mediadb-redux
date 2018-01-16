import {GET_MOVIES} from './actions'

const initialState = {
    movies:[],
}

export default function(state = initialState, action){
    const {type,data} = action//type = action.type
    switch(type){
         case GET_MOVIES://replace the string 'TOGGLE_MESSAGE'
         return {
             ...state,
             movies:data,

         }
        default:
         return state
    }


}