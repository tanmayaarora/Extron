import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { UserReducer } from "./UserReducer";
import createSagaMiddleware from 'redux-saga';
import UserSaga from "./Saga/UserSaga";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
    UserReducer
})
const Store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(UserSaga);

export default Store;