import {takeEvery,put} from "redux-saga/effects"
import { ADD_USER, ADD_USER_REDUCER, DELETE_USER, DELETE_USER_REDUCER, GET_USER, GET_USER_REDUCER, UPDATE_USER, UPDATE_USER_REDUCER } from "../constants"
import { createUserAPI, deleteUserAPI, getUserAPI, updateUserAPI } from "../dataService"
function* addUserSaga(action){    //executer
    var result = yield createUserAPI(action.payload)
    yield put({type:ADD_USER_REDUCER,result:"Done",payload:result})
}
function* getUserSaga(){    //executer
    var result = yield getUserAPI()
    yield put({type:GET_USER_REDUCER,result:"Done",payload:result})
}

function* deleteUserSaga(action){    //executer
    yield deleteUserAPI(action.payload)
    yield put({type:DELETE_USER_REDUCER,result:"Done",data:action.payload})
}

function* updateUserSaga(action){    //executer
    yield updateUserAPI(action.payload)
    yield put({type:UPDATE_USER_REDUCER,result:"Done",data:action.payload})
}

export function* userSaga(data){ //watcher
    yield takeEvery(ADD_USER,addUserSaga)
    yield takeEvery(GET_USER,getUserSaga)
    yield takeEvery(DELETE_USER,deleteUserSaga)
    yield takeEvery(UPDATE_USER,updateUserSaga)
}