import { ADD_MAINCATEGORY_REDUCER, DELETE_MAINCATEGORY_REDUCER, GET_MAINCATEGORY_REDUCER, UPDATE_MAINCATEGORY_REDUCER } from "../constants";

export default function MaincategoryReducer(state=[],action){
    switch(action.type){
        case ADD_MAINCATEGORY_REDUCER:
            return [...state,action.payload]
        
        case GET_MAINCATEGORY_REDUCER:
            return action.payload
        
        case DELETE_MAINCATEGORY_REDUCER:
            var newState = state.filter((item)=>item.id!==action.data.id)
            return newState
    
        case UPDATE_MAINCATEGORY_REDUCER:
            var index = state.findIndex((item)=>item.id===action.data.id)
            state[index]=action.data.name 
            return state
        default:
            return state
    }
}