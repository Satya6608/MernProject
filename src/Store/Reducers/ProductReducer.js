import { ADD_PRODUCT_REDUCER, DELETE_PRODUCT_REDUCER, GET_PRODUCT_REDUCER, GET_SINGLE_PRODUCT_REDUCER, UPDATE_PRODUCT_REDUCER } from "../constants";

export default function ProductReducer(state=[],action){
    switch(action.type){
        case ADD_PRODUCT_REDUCER:
            return [...state,action.payload]
        
        case GET_PRODUCT_REDUCER:
            return action.payload

        case GET_SINGLE_PRODUCT_REDUCER:
                return action.payload
        
        case DELETE_PRODUCT_REDUCER:
            var newState = state.filter((item)=>item.id!==action.data.id)
            return newState
    
        case UPDATE_PRODUCT_REDUCER:
            var index = state.findIndex((item)=>item.id===action.data.id)
            state[index]=action.data.name 
            return state
        default:
            return state
    }
}