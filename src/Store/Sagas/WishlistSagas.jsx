import {takeEvery,put} from "redux-saga/effects"
import { ADD_WISHLIST, ADD_WISHLIST_REDUCER, DELETE_WISHLIST, DELETE_WISHLIST_REDUCER, GET_WISHLIST, GET_WISHLIST_REDUCER, UPDATE_WISHLIST, UPDATE_WISHLIST_REDUCER } from "../constants"
import { createWishlistAPI, deleteWishlistAPI, getWishlistAPI, updateWishlistAPI } from "../dataService"
function* addWishlistSaga(action){    //executer
    var result = yield createWishlistAPI(action.payload)
    yield put({type:ADD_WISHLIST_REDUCER,result:"Done",payload:result})
}
function* getWishlistSaga(){    //executer
    var result = yield getWishlistAPI()
    yield put({type:GET_WISHLIST_REDUCER,result:"Done",payload:result})
}

function* deleteWishlistSaga(action){    //executer
    yield deleteWishlistAPI(action.payload)
    yield put({type:DELETE_WISHLIST_REDUCER,result:"Done",data:action.payload})
}

function* updateWishlistSaga(action){    //executer
    yield updateWishlistAPI(action.payload)
    yield put({type:UPDATE_WISHLIST_REDUCER,result:"Done",data:action.payload})
}

export function* wishlistSaga(data){ //watcher
    yield takeEvery(ADD_WISHLIST,addWishlistSaga)
    yield takeEvery(GET_WISHLIST,getWishlistSaga)
    yield takeEvery(DELETE_WISHLIST,deleteWishlistSaga)
    yield takeEvery(UPDATE_WISHLIST,updateWishlistSaga)
}