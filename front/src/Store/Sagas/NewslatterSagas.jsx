import {takeEvery,put} from "redux-saga/effects"
import { ADD_NEWSLATTER, ADD_NEWSLATTER_REDUCER, DELETE_NEWSLATTER, DELETE_NEWSLATTER_REDUCER, GET_NEWSLATTER, GET_NEWSLATTER_REDUCER, UPDATE_NEWSLATTER, UPDATE_NEWSLATTER_REDUCER } from "../constants"
import { createNewslatterAPI, deleteNewslatterAPI, getNewslatterAPI, updateNewslatterAPI } from "../dataService"
function* addNewslatterSaga(action){    //executer
    var result = yield createNewslatterAPI(action.payload)
    yield put({type:ADD_NEWSLATTER_REDUCER,result:"Done",payload:result})
}
function* getNewslatterSaga(){    //executer
    var result = yield getNewslatterAPI()
    yield put({type:GET_NEWSLATTER_REDUCER,result:"Done",payload:result})
}

function* deleteNewslatterSaga(action){    //executer
    yield deleteNewslatterAPI(action.payload)
    yield put({type:DELETE_NEWSLATTER_REDUCER,result:"Done",data:action.payload})
}

function* updateNewslatterSaga(action){    //executer
    yield updateNewslatterAPI(action.payload)
    yield put({type:UPDATE_NEWSLATTER_REDUCER,result:"Done",data:action.payload})
}

export function* newslatterSaga(data){ //watcher
    yield takeEvery(ADD_NEWSLATTER,addNewslatterSaga)
    yield takeEvery(GET_NEWSLATTER,getNewslatterSaga)
    yield takeEvery(DELETE_NEWSLATTER,deleteNewslatterSaga)
    yield takeEvery(UPDATE_NEWSLATTER,updateNewslatterSaga)
}