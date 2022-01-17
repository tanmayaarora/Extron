// import { useLocation } from "react-router";
// import { useNavigate } from "react-router";
// import Swal from "sweetalert2";

const bcrypt = require('bcryptjs');

// const location = useLocation();
// const navigate = useNavigate();

// const onSuccess = () => {
//     console.log("Location is ",location);
//     if(location.pathname=="/login"){
//         navigate("/");
//     }
//     else{
//         navigate(location.pathname);
//     }
// }
// const onFailure = () => {
//     Swal.fire({
//         icon:'error',
//         title:'Oops...',
//         text:'Incorrect username or Password'
//     })
// }
export const FETCH_USERS_REGISTERED = "FETCH_USERS_REGISTERED";
export const FETCH_USERS_REGISTERED_FAILURE = "FETCH_USERS_REGISTERED_FAILURE";
export const FETCH_USERS_REGISTERED_SUCCESS = "FETCH_USERS_REGISTERED_SUCCESS";
export const CREATE_USER = "CREATE_USER";
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS";
export const CREATE_USER_FAILURE = "CREATE_USER_FAILURE";
export const REMOVE_USER = "REMOVE_USER";
export const REMOVE_USER_SUCCESS = "REMOVE_USER_SUCCESS";
export const REMOVE_USER_FAILURE = "REMOVE_USER_FAILURE";
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";
export const LOGIN_USER = "LOGIN_USER";
export const LOGIN_USER_SUCCESS = "LOGIN_USER_SUCCESS";
export const LOGIN_USER_FAILURE = "LOGIN_USER_FAILURE";

// export const REGISTER_USER = "REGISTER_USER";
// export const REGISTER_USER_FAILURE = " REGISTER_USER_FAILURE";
// export const REGISTER_USER_SUCCESS = " REGISTER_USER_SUCCESS";

export const fetchUsersRegistered = () => {
    return {
        type: FETCH_USERS_REGISTERED,

    }
}

export const fetchUsersRegisteredSuccess = data => ({ type: FETCH_USERS_REGISTERED_SUCCESS, data });

export const fetchUsersRegisteredFailure = () => ({ type: FETCH_USERS_REGISTERED_FAILURE });

export const createUser = ({ username, password }) => {
    console.log(`In UserAction file, username:${username}, password:${password}`);
    return {
        type: CREATE_USER,
        username,
        password:bcrypt.hashSync(password,10)
    };
}

export const createUserSuccess = data => ({ type: CREATE_USER_SUCCESS, data });

export const createUserFailure = () => ({ type: CREATE_USER_FAILURE });

export const removeUser = ({ identifier }) => {
    console.log(`In USerAction file, identifier:${identifier}`);
    return {
        type: REMOVE_USER,
        identifier
    };
}

export const removeUserSuccess = data => ({ type: REMOVE_USER_SUCCESS, data });

export const removeUserFailure = () => ({ type: REMOVE_USER_FAILURE });

export const updateUser = ({ identifier,username,password }) => {
    console.log(`In USerAction file, identifier:${identifier}, username:${username}, password:${password}`);
    return {
        type: UPDATE_USER,
        identifier,
        username,
        password:bcrypt.hashSync(password,10)
    };
}

export const updateUserSuccess = data => ({ type: UPDATE_USER_SUCCESS, data });

export const updateUserFailure = () => ({ type: UPDATE_USER_FAILURE });

// export const registerUser = data => ({ type: REGISTER_USER, data });

// export const registerUserSuccess = data => ({ type: REGISTER_USER_SUCCESS, data });

// export const registerUserFailure = () => ({ type: REGISTER_USER_FAILURE });

export const loginUser = ({ username,password }, onSuccess, onFailure) => {
    console.log(`In USerAction file, username:${username}, password:${password}`);
    return {
        type: LOGIN_USER,
        username,
        password:bcrypt.hashSync(password,10),
        onSuccess,
        onFailure
    };
}

export const loginUserSuccess = data => ({ type: LOGIN_USER_SUCCESS, data });

export const loginUserFailure = () => ({ type: LOGIN_USER_FAILURE });