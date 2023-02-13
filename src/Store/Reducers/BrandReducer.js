import { ADD_BRAND_REDUCER, DELETE_BRAND_REDUCER, GET_BRAND_REDUCER, UPDATE_BRAND_REDUCER } from "../constants";

export default function BrandReducer(state=[],action){
    switch(action.type){
        case ADD_BRAND_REDUCER:
            return [...state,action.payload]
        
        case GET_BRAND_REDUCER:
            return action.payload
        
        case DELETE_BRAND_REDUCER:
            var newState = state.filter((item)=>item.id!==action.data.id)
            return newState
    
        case UPDATE_BRAND_REDUCER:
            var index = state.findIndex((item)=>item.id===action.data.id)
            state[index]=action.data
            return state
        default:
            return state
    }
}