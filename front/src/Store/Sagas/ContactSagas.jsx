import {takeEvery,put} from "redux-saga/effects"
import { ADD_CONTACT, ADD_CONTACT_REDUCER, DELETE_CONTACT, DELETE_CONTACT_REDUCER, GET_CONTACT, GET_CONTACT_REDUCER, UPDATE_CONTACT, UPDATE_CONTACT_REDUCER } from "../constants"
import { createContactAPI, deleteContactAPI, getContactAPI, updateContactAPI } from "../dataService"
function* addContactSaga(action){    //executer
    var result = yield createContactAPI(action.payload)
    yield put({type:ADD_CONTACT_REDUCER,result:"Done",payload:result})
}
function* getContactSaga(){    //executer
    var result = yield getContactAPI()
    yield put({type:GET_CONTACT_REDUCER,result:"Done",payload:result})
}

function* deleteContactSaga(action){    //executer
    yield deleteContactAPI(action.payload)
    yield put({type:DELETE_CONTACT_REDUCER,result:"Done",data:action.payload})
}

function* updateContactSaga(action){    //executer
    yield updateContactAPI(action.payload)
    yield put({type:UPDATE_CONTACT_REDUCER,result:"Done",data:action.payload})
}

export function* contactSaga(data){ //watcher
    yield takeEvery(ADD_CONTACT,addContactSaga)
    yield takeEvery(GET_CONTACT,getContactSaga)
    yield takeEvery(DELETE_CONTACT,deleteContactSaga)
    yield takeEvery(UPDATE_CONTACT,updateContactSaga)
}