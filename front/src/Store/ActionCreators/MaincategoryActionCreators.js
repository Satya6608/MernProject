import { ADD_MAINCATEGORY, DELETE_MAINCATEGORY, GET_MAINCATEGORY, UPDATE_MAINCATEGORY } from "../constants";

export function addMaincategory(data){
    return{
        type:ADD_MAINCATEGORY,
        payload:data
    }
}

export function getMaincategory(){
    return{
        type:GET_MAINCATEGORY
    }
}

export function deleteMaincategory(data){
    return{
        type:DELETE_MAINCATEGORY,
        payload:data
    }
}

export function updateMaincategory(data){
    return{
        type:UPDATE_MAINCATEGORY,
        payload:data
    }
}