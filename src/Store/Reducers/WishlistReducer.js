import { ADD_WISHLIST_REDUCER, DELETE_WISHLIST_REDUCER, GET_WISHLIST_REDUCER, UPDATE_WISHLIST_REDUCER } from "../constants";

export default function WishlistReducer(state=[],action){
    switch(action.type){
        case ADD_WISHLIST_REDUCER:
            return [...state,action.payload]
        
        case GET_WISHLIST_REDUCER:
            return action.payload
        
        case DELETE_WISHLIST_REDUCER:
            var newState = state.filter((item)=>item.id!==action.data.id)
            return newState
    
        case UPDATE_WISHLIST_REDUCER:
            var index = state.findIndex((item)=>item.id===action.data.id)
            state[index]=action.data
            return state
        default:
            return state
    }
}