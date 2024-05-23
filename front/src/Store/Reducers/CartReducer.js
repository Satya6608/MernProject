import { ADD_CART_REDUCER, DELETE_CART_REDUCER, GET_CART_REDUCER, UPDATE_CART_REDUCER } from "../constants";

export default function CartReducer(state=[],action){
    switch(action.type){
        case ADD_CART_REDUCER:
            return [...state,action.payload]
        
        case GET_CART_REDUCER:
            return action.payload
        
        case DELETE_CART_REDUCER:
            var newState = state.filter((item)=>item.id!==action.data.id)
            return newState
    
        case UPDATE_CART_REDUCER:
            var index = state.findIndex((item)=>item.id===action.data.id)
            state[index]=action.data
            return state
        default:
            return state
    }
}