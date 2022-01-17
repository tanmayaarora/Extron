import { call, put, takeLatest } from 'redux-saga/effects';

import {
    FETCH_USERS_REGISTERED, fetchUsersRegisteredSuccess, fetchUsersRegisteredFailure, createUserSuccess, CREATE_USER, REMOVE_USER,
    removeUserSuccess, updateUserSuccess, UPDATE_USER, LOGIN_USER, loginUserSuccess
    
} from '../UserAction';
import api from './UserAPI'

function* getUsers() {
    console.log("Get USERS SAga");
    try {
        const data = yield call(api.users);
        console.log("Users are",data)
        yield put(fetchUsersRegisteredSuccess(data));

    } catch (error) {
        console.log("Users Fetch Error or No users registered")
        yield put(fetchUsersRegisteredFailure());
        console.error(error) // eslint-disable-line

    }
}

function* createUser(action) {
    console.log("ACtion create user is "+JSON.stringify(action))
    try {
        const {username,password} = action;
        //const passwordEncrypted = bcrypt.hashSync(password,10);
        //console.log("Action in createPRoduct is ",action);
        let {data} = yield call(api.adduser, {username,password});
        console.log("Add user Saga ",data);
        yield put(createUserSuccess(data));
    }
    catch (err) {
        console.log("Error is "+JSON.stringify(err.response.data));
        return err;
    }
}

function* removeUser(action) {
    console.log("ACtion remove user is "+JSON.stringify(action))
    try {
        const {identifier} = action;
        console.log("Action in removeUser is ",action);
        let data = yield call(api.deleteuser, {identifier});
        console.log("Delete user Saga",data);
        yield put(removeUserSuccess(data));
    }
    catch (err) {
        console.log("Error is "+JSON.stringify(err.response.data));
        return err;
    }
}

function* updateUser(action) {
    console.log("ACtion update user is "+JSON.stringify(action))
    try {
        const {identifier,username,password} = action;
        console.log("Action in updateUser is ",action);
        let data = yield call(api.edituser, {identifier,username,password});
        console.log("Update user Saga",data);
        yield put(updateUserSuccess(data));
    }
    catch (err) {
        console.log("Error is "+JSON.stringify(err.response.data));
        return err;
    }
}

function* signInUser(action) {
    console.log("ACtion signIn user is "+JSON.stringify(action))
    try {
        const {username,password} = action;
        //console.log(password.slice(0,7));
        console.log("Action in signInUser is ",action);
        let data = yield call(api.signinuser, {username,password});
        console.log("Signin user Saga",data);
        yield put(loginUserSuccess(data));
        action.onSuccess();
    }
    catch (err) {
        action.onFailure();
        console.log("Error is "+JSON.stringify(err.response.data));
        return err;
    }
}
export default function* UserSaga() {

    yield takeLatest(FETCH_USERS_REGISTERED, getUsers);
    yield takeLatest(CREATE_USER, createUser);
    yield takeLatest(REMOVE_USER, removeUser);
    yield takeLatest(UPDATE_USER, updateUser);
    yield takeLatest(LOGIN_USER, signInUser);
}
