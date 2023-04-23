import {takeEvery,put} from "redux-saga/effects"
import { ADD_CART, ADD_CART_REDUCER, DELETE_CART, DELETE_CART_REDUCER, GET_CART, GET_CART_REDUCER, UPDATE_CART, UPDATE_CART_REDUCER } from "../constants"
import { createCartAPI, deleteCartAPI, getCartAPI, updateCartAPI } from "../dataService"
function* addCartSaga(action){    //executer
    var result = yield createCartAPI(action.payload)
    yield put({type:ADD_CART_REDUCER,result:"Done",payload:result})
}
function* getCartSaga(){    //executer
    var result = yield getCartAPI()
    yield put({type:GET_CART_REDUCER,result:"Done",payload:result})
}

function* deleteCartSaga(action){    //executer
    yield deleteCartAPI(action.payload)
    yield put({type:DELETE_CART_REDUCER,result:"Done",data:action.payload})
}

function* updateCartSaga(action){    //executer
    yield updateCartAPI(action.payload)
    yield put({type:UPDATE_CART_REDUCER,result:"Done",data:action.payload})
}

export function* cartSaga(data){ //watcher
    yield takeEvery(ADD_CART,addCartSaga)
    yield takeEvery(GET_CART,getCartSaga)
    yield takeEvery(DELETE_CART,deleteCartSaga)
    yield takeEvery(UPDATE_CART,updateCartSaga)
}