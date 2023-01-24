import { ADD_USER_REDUCER, DELETE_USER_REDUCER, GET_USER_REDUCER, UPDATE_USER_REDUCER } from "../constants";

export default function UserReducer(state=[],action){
    switch(action.type){
        case ADD_USER_REDUCER:
            return [...state,action.payload]
        
        case GET_USER_REDUCER:
            return action.payload
        
        case DELETE_USER_REDUCER:
            var newState = state.filter((item)=>item.id!==action.data.id)
            return newState
    
        case UPDATE_USER_REDUCER:
            var index = state.findIndex((item)=>item.id===action.data.id)
            state[index]=action.data.name 
            return state
        default:
            return state
    }
}