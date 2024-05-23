import {takeEvery,put} from "redux-saga/effects"
import { ADD_CHECKOUT, ADD_CHECKOUT_REDUCER, DELETE_CHECKOUT, DELETE_CHECKOUT_REDUCER, GET_CHECKOUT, GET_CHECKOUT_REDUCER, UPDATE_CHECKOUT, UPDATE_CHECKOUT_REDUCER } from "../constants"
import { createCheckoutAPI, deleteCheckoutAPI, getCheckoutAPI, updateCheckoutAPI } from "../dataService"
function* addCheckoutSaga(action){    //executer
    var result = yield createCheckoutAPI(action.payload)
    yield put({type:ADD_CHECKOUT_REDUCER,result:"Done",payload:result})
}
function* getCheckoutSaga(){    //executer
    var result = yield getCheckoutAPI()
    yield put({type:GET_CHECKOUT_REDUCER,result:"Done",payload:result})
}

function* deleteCheckoutSaga(action){    //executer
    yield deleteCheckoutAPI(action.payload)
    yield put({type:DELETE_CHECKOUT_REDUCER,result:"Done",data:action.payload})
}

function* updateCheckoutSaga(action){    //executer
    yield updateCheckoutAPI(action.payload)
    yield put({type:UPDATE_CHECKOUT_REDUCER,result:"Done",data:action.payload})
}

export function* checkoutSaga(data){ //watcher
    yield takeEvery(ADD_CHECKOUT,addCheckoutSaga)
    yield takeEvery(GET_CHECKOUT,getCheckoutSaga)
    yield takeEvery(DELETE_CHECKOUT,deleteCheckoutSaga)
    yield takeEvery(UPDATE_CHECKOUT,updateCheckoutSaga)
}