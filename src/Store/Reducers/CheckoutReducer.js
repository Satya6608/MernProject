import { ADD_CHECKOUT_REDUCER, DELETE_CHECKOUT_REDUCER, GET_CHECKOUT_REDUCER, UPDATE_CHECKOUT_REDUCER } from "../constants";

export default function CheckoutReducer(state=[],action){
    switch(action.type){
        case ADD_CHECKOUT_REDUCER:
            return [...state,action.payload]
        
        case GET_CHECKOUT_REDUCER:
            return action.payload
        
        case DELETE_CHECKOUT_REDUCER:
            var newState = state.filter((item)=>item.id!==action.data.id)
            return newState
    
        case UPDATE_CHECKOUT_REDUCER:
            var index = state.findIndex((item)=>item.id===action.data.id)
            state[index]=action.data
            return state
        default:
            return state
    }
}