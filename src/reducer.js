import {TOGGLE_MESSAGE, GET_MOVIES} from './actions'
const initialState = {
    messageVisibility:false,
    movies:[],
}

export default function(state = initialState, action){
    const {type,data} = action//type = action.type
    switch(type){
        case TOGGLE_MESSAGE://replace the string 'TOGGLE_MESSAGE'
         return {
             ...state, 
             messageVisibility:!state.messageVisibility,
         };
         case GET_MOVIES://replace the string 'TOGGLE_MESSAGE'
         return {
             ...state,
             movies:data,

         }
        default:
         return state
    }


}