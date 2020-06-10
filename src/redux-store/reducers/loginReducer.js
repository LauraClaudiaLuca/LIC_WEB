import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS,
    LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE, GET_USER_SUCCESS } from "../action-types/loginActionType";

const initialState = {
    user:{}
}

const loginReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case LOGIN_SUCCESS:
                newState.user = action.data
                break;
        case GET_USER_SUCCESS:
            newState.user = action.data
            break;
        default:
            break;
    }
    console.log(newState)
    return newState;
}
export default loginReducer