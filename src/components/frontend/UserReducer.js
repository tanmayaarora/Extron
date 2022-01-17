let initState = { users: [], user: {}, userid: null, isLoggedin: false, loading: true, success: false }

export const UserReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_USER':
     case 'FETCH_USERS_REGISTERED':
     case 'REMOVE_USER':
     case 'UPDATE_USER':
     case 'LOGIN_USER':
             return {
         ...state,
         loading: true,
      }
     case 'FETCH_USERS_REGISTERED_SUCCESS':
       console.log("USER REGISTERED SUCCESS", action.data)
       return {
         ...state,
         users: action.data,
 
         loading: false
       }
     case 'CREATE_USER_SUCCESS':
       console.log("Create User Success action in reducer");
       return {
         ...state,
         users: action.data.users ? state.users.concat(action.data.users): state.users,
         loading: false,
         success: action.data.success
       }
     case 'REMOVE_USER_SUCCESS':
       console.log("Remove user Success action in reducer");
       return {
         ...state,
         users: action.data,
         loading: false,
         success: action.data.success
       }
     case 'UPDATE_USER_SUCCESS':
       console.log("Update user Success action in reducer");
       return {
         ...state,
         users: action.data,
         loading: false,
         success: action.data.success
       }
       case 'LOGIN_USER_SUCCESS':
        console.log("Login user Success action in reducer",action);
        return {
          ...state,
          users: action.data,
          loading: false,
          success: action.data.success,
          isLoggedin: true,
          userid: action["data"].UID
        }
     case 'FETCH_USERS_REGISTERED_FAILURE':
       case 'CREATE_USER_FAILURE':
       case 'REMOVE_USER_FAILURE':
       case 'UPDATE_USER_FAILURE':
       case 'LOGIN_USER_FAILURE':
      return {
        ...state,
        loading: false,
        success: false,
        isLoggedin: false
      }
     default:
      return state
  }
}