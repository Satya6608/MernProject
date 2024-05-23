import {takeEvery,put} from "redux-saga/effects"
import { ADD_PRODUCT, ADD_PRODUCT_REDUCER, DELETE_PRODUCT, DELETE_PRODUCT_REDUCER, GET_PRODUCT, GET_PRODUCT_REDUCER, GET_SINGLE_PRODUCT, GET_SINGLE_PRODUCT_REDUCER, UPDATE_PRODUCT, UPDATE_PRODUCT_REDUCER } from "../constants"
import { createProductAPI, deleteProductAPI, getProductAPI, getSingleProductAPI, updateProductAPI } from "../dataService"
function* addProductSaga(action){    //executer
    var result = yield createProductAPI(action.payload)
    yield put({type:ADD_PRODUCT_REDUCER,result:"Done",payload:result})
}
function* getProductSaga(){    //executer
    var result = yield getProductAPI()
    yield put({type:GET_PRODUCT_REDUCER,result:"Done",payload:result})
}
function* getSingleProductSaga(action){    //executer
    var result = yield getSingleProductAPI(action.payload)
    yield put({type:GET_SINGLE_PRODUCT_REDUCER,result:"Done",payload:result})
}

function* deleteProductSaga(action){    //executer
    yield deleteProductAPI(action.payload)
    yield put({type:DELETE_PRODUCT_REDUCER,result:"Done",data:action.payload})
}

function* updateProductSaga(action){    //executer
    yield updateProductAPI(action.payload)
    yield put({type:UPDATE_PRODUCT_REDUCER,result:"Done",data:action.payload})
}

export function* productSaga(data){ //watcher
    yield takeEvery(ADD_PRODUCT,addProductSaga)
    yield takeEvery(GET_PRODUCT,getProductSaga)
    yield takeEvery(DELETE_PRODUCT,deleteProductSaga)
    yield takeEvery(UPDATE_PRODUCT,updateProductSaga)
    yield takeEvery(GET_SINGLE_PRODUCT,getSingleProductSaga)
}