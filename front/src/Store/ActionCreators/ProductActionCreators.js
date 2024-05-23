import { ADD_PRODUCT, DELETE_PRODUCT, GET_PRODUCT, GET_SINGLE_PRODUCT, UPDATE_PRODUCT } from "../constants";

export function addProduct(data){
    return{
        type:ADD_PRODUCT,
        payload:data
    }
}

export function getProduct(){
    return{
        type:GET_PRODUCT
    }
}

export function getSingleProduct(data){
    return{
        type:GET_SINGLE_PRODUCT,
        payload:data
    }
}

export function deleteProduct(data){
    return{
        type:DELETE_PRODUCT,
        payload:data
    }
}

export function updateProduct(data){
    return{
        type:UPDATE_PRODUCT,
        payload:data
    }
}