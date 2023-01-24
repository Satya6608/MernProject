import {takeEvery,put} from "redux-saga/effects"
import { ADD_MAINCATEGORY, ADD_MAINCATEGORY_REDUCER, DELETE_MAINCATEGORY, DELETE_MAINCATEGORY_REDUCER, GET_MAINCATEGORY, GET_MAINCATEGORY_REDUCER, UPDATE_MAINCATEGORY, UPDATE_MAINCATEGORY_REDUCER } from "../constants"
import { createMaincategoryAPI, deleteMaincategoryAPI, getMaincategoryAPI, updateMaincategoryAPI } from "../dataService"
function* addMaincategorySaga(action){    //executer
    var result = yield createMaincategoryAPI(action.payload)
    yield put({type:ADD_MAINCATEGORY_REDUCER,result:"Done",payload:result})
}
function* getMaincategorySaga(){    //executer
    var result = yield getMaincategoryAPI()
    yield put({type:GET_MAINCATEGORY_REDUCER,result:"Done",payload:result})
}

function* deleteMaincategorySaga(action){    //executer
    yield deleteMaincategoryAPI(action.payload)
    yield put({type:DELETE_MAINCATEGORY_REDUCER,result:"Done",data:action.payload})
}

function* updateMaincategorySaga(action){    //executer
    yield updateMaincategoryAPI(action.payload)
    yield put({type:UPDATE_MAINCATEGORY_REDUCER,result:"Done",data:action.payload})
}

export function* maincategorySaga(data){ //watcher
    yield takeEvery(ADD_MAINCATEGORY,addMaincategorySaga)
    yield takeEvery(GET_MAINCATEGORY,getMaincategorySaga)
    yield takeEvery(DELETE_MAINCATEGORY,deleteMaincategorySaga)
    yield takeEvery(UPDATE_MAINCATEGORY,updateMaincategorySaga)
}