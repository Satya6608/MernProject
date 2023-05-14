import { ADD_NEWSLATTER_REDUCER, DELETE_NEWSLATTER_REDUCER, GET_NEWSLATTER_REDUCER, UPDATE_NEWSLATTER_REDUCER } from "../constants";

export default function NewslatterReducer(state=[],action){
    switch(action.type){
        case ADD_NEWSLATTER_REDUCER:
            return [...state,action.payload]
        
        case GET_NEWSLATTER_REDUCER:
            return action.payload
        
        case DELETE_NEWSLATTER_REDUCER:
            var newState = state.filter((item)=>item.id!==action.data.id)
            return newState
    
        case UPDATE_NEWSLATTER_REDUCER:
            var index = state.findIndex((item)=>item.id===action.data.id)
            state[index]=action.data
            return state
        default:
            return state
    }
}