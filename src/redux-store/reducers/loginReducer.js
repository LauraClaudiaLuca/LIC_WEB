import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS,
    LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from "../action-types/loginActionType";

const initialState = {
    user:{}
}

const authReducer = (state = initialState, action) => {
switch (action.type) {
   case LOGIN_REQUEST:
       return {
           ...state,
           loginError: false,
           isFetching: true
       }
   case LOGIN_SUCCESS:
       return {
           user:{}
       }
   case LOGIN_FAILURE:
       return {
           isLoggedIn: false,
           loginError: true,
           isFetching: false,
           message: action.message
       }
   case LOGOUT_REQUEST:
       return {
           isLoggedIn: true,
           loginError: false,
           isFetching: true,
           message: ''
       }
   case LOGOUT_SUCCESS: 
       return {
           isLoggedIn: false,
           loginError: false,
           isFetching: false,
           message: ''
       }
   case LOGOUT_FAILURE:
       return {
           isLoggedIn: true,
           loginError: true,
           isFetching: false,
           message: 'Error! Could not logout'
       }
   default:
       break;
}
return state;
}

export default authReducer