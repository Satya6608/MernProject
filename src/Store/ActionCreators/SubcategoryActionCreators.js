import { ADD_SUBCATEGORY, DELETE_SUBCATEGORY, GET_SUBCATEGORY, UPDATE_SUBCATEGORY } from "../constants";

export function addSubcategory(data){
    return{
        type:ADD_SUBCATEGORY,
        payload:data
    }
}

export function getSubcategory(){
    return{
        type:GET_SUBCATEGORY
    }
}

export function deleteSubcategory(data){
    return{
        type:DELETE_SUBCATEGORY,
        payload:data
    }
}

export function updateSubcategory(data){
    return{
        type:UPDATE_SUBCATEGORY,
        payload:data
    }
}