import {takeEvery,put} from "redux-saga/effects"
import { ADD_SUBCATEGORY, ADD_SUBCATEGORY_REDUCER, DELETE_SUBCATEGORY, DELETE_SUBCATEGORY_REDUCER, GET_SUBCATEGORY, GET_SUBCATEGORY_REDUCER, UPDATE_SUBCATEGORY, UPDATE_SUBCATEGORY_REDUCER } from "../constants"
import { createSubcategoryAPI, deleteSubcategoryAPI, getSubcategoryAPI, updateSubcategoryAPI } from "../dataService"
function* addSubcategorySaga(action){    //executer
    var result = yield createSubcategoryAPI(action.payload)
    yield put({type:ADD_SUBCATEGORY_REDUCER,result:"Done",payload:result})
}
function* getSubcategorySaga(){    //executer
    var result = yield getSubcategoryAPI()
    yield put({type:GET_SUBCATEGORY_REDUCER,result:"Done",payload:result})
}

function* deleteSubcategorySaga(action){    //executer
    yield deleteSubcategoryAPI(action.payload)
    yield put({type:DELETE_SUBCATEGORY_REDUCER,result:"Done",data:action.payload})
}

function* updateSubcategorySaga(action){    //executer
    yield updateSubcategoryAPI(action.payload)
    yield put({type:UPDATE_SUBCATEGORY_REDUCER,result:"Done",data:action.payload})
}

export function* subcategorySaga(data){ //watcher
    yield takeEvery(ADD_SUBCATEGORY,addSubcategorySaga)
    yield takeEvery(GET_SUBCATEGORY,getSubcategorySaga)
    yield takeEvery(DELETE_SUBCATEGORY,deleteSubcategorySaga)
    yield takeEvery(UPDATE_SUBCATEGORY,updateSubcategorySaga)
}