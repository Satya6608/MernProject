import { ADD_SUBCATEGORY_REDUCER, DELETE_SUBCATEGORY_REDUCER, GET_SUBCATEGORY_REDUCER, UPDATE_SUBCATEGORY_REDUCER } from "../constants";

export default function SubcategoryReducer(state=[],action){
    switch(action.type){
        case ADD_SUBCATEGORY_REDUCER:
            return [...state,action.payload]
        
        case GET_SUBCATEGORY_REDUCER:
            return action.payload
        
        case DELETE_SUBCATEGORY_REDUCER:
            var newState = state.filter((item)=>item.id!==action.data.id)
            return newState
    
        case UPDATE_SUBCATEGORY_REDUCER:
            var index = state.findIndex((item)=>item.id===action.data.id)
            state[index]=action.data
            return state
        default:
            return state
    }
}