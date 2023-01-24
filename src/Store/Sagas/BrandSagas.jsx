import {takeEvery,put} from "redux-saga/effects"
import { ADD_BRAND, ADD_BRAND_REDUCER, DELETE_BRAND, DELETE_BRAND_REDUCER, GET_BRAND, GET_BRAND_REDUCER, UPDATE_BRAND, UPDATE_BRAND_REDUCER } from "../constants"
import { createBrandAPI, deleteBrandAPI, getBrandAPI, updateBrandAPI } from "../dataService"
function* addBrandSaga(action){    //executer
    var result = yield createBrandAPI(action.payload)
    yield put({type:ADD_BRAND_REDUCER,result:"Done",payload:result})
}
function* getBrandSaga(){    //executer
    var result = yield getBrandAPI()
    yield put({type:GET_BRAND_REDUCER,result:"Done",payload:result})
}

function* deleteBrandSaga(action){    //executer
    yield deleteBrandAPI(action.payload)
    yield put({type:DELETE_BRAND_REDUCER,result:"Done",data:action.payload})
}

function* updateBrandSaga(action){    //executer
    yield updateBrandAPI(action.payload)
    yield put({type:UPDATE_BRAND_REDUCER,result:"Done",data:action.payload})
}

export function* brandSaga(data){ //watcher
    yield takeEvery(ADD_BRAND,addBrandSaga)
    yield takeEvery(GET_BRAND,getBrandSaga)
    yield takeEvery(DELETE_BRAND,deleteBrandSaga)
    yield takeEvery(UPDATE_BRAND,updateBrandSaga)
}