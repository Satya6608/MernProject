import { ADD_CONTACT_REDUCER, DELETE_CONTACT_REDUCER, GET_CONTACT_REDUCER, UPDATE_CONTACT_REDUCER } from "../constants";

export default function ContactReducer(state=[],action){
    switch(action.type){
        case ADD_CONTACT_REDUCER:
            return [...state,action.payload]
        
        case GET_CONTACT_REDUCER:
            return action.payload
        
        case DELETE_CONTACT_REDUCER:
            var newState = state.filter((item)=>item.id!==action.data.id)
            return newState
    
        case UPDATE_CONTACT_REDUCER:
            var index = state.findIndex((item)=>item.id===action.data.id)
            state[index]=action.data
            return state
        default:
            return state
    }
}