import { ADD_NEWSLATTER, DELETE_NEWSLATTER, GET_NEWSLATTER, UPDATE_NEWSLATTER } from "../constants";

export function addNewslatter(data){
    return{
        type:ADD_NEWSLATTER,
        payload:data
    }
}

export function getNewslatter(){
    return{
        type:GET_NEWSLATTER
    }
}

export function deleteNewslatter(data){
    return{
        type:DELETE_NEWSLATTER,
        payload:data
    }
}

export function updateNewslatter(data){
    return{
        type:UPDATE_NEWSLATTER,
        payload:data
    }
}