import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import RootSaga from "./Sagas/RootSaga";
import RootReducer from "./Reducers/RootReducer";

const sagaMiddleWare = createSagaMiddleware()
const store = configureStore({
    reducer:RootReducer,
    middleware:()=>[sagaMiddleWare] 
})
sagaMiddleWare.run(RootSaga)

export {store}