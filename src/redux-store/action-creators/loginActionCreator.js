import axios from 'axios'
import Swal from 'sweetalert2'
import jwt from 'jwt-decode'

import { LOGIN_REQUEST, LOGIN_FAILURE, LOGIN_SUCCESS,
         LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE, REGISTER_FAILURE,REGISTER_SUCCESS } from '../action-types/loginActionType'

export const loginRequestAction = () => {
    return {
        type: LOGIN_REQUEST
    }
}

export const loginFailureAction = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Invalid username or password!',
        confirmButtonColor: '#db3d44',
        confirmButtonText: 'OK'
    })
    return {
        type: LOGIN_FAILURE
    }
}

export const loginSuccessAction = user => {
    return {
        type: LOGIN_SUCCESS,
        user:user
    }
}

export const loginActionCreator = (username, password, redirectOnSuccess) => {
    return dispatch => {
        dispatch(loginRequestAction())
        return axios
            .post("http://localhost:8080/login",
                {
                    username: username,
                    password: password
                })
            .then(res => {
                const token = res.data
                localStorage.setItem('token', token)
                const decodedToken = jwt(token)
                dispatch(loginSuccessAction(decodedToken))
                redirectOnSuccess()
            })
            .catch((err) => dispatch(loginFailureAction()))
    }
}

export const logoutRequest = () => {
    return {
        type: LOGOUT_REQUEST
    }
}

export const logoutSuccess = () => {
    localStorage.clear()
    return {
        type: LOGOUT_SUCCESS
    }
}

export const logoutFailure = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Could not logout!',
        confirmButtonColor: '#db3d44',
        confirmButtonText: 'OK'
    })
    return {
        type: LOGOUT_FAILURE
    }
}

export const logoutUser = () => {
    let data = {}
    let token = localStorage.getItem('token')
    let config = {
        headers: {
            authorization: token.userToken
        }
    }
    return dispatch => {
        dispatch(logoutSuccess())
    }
}

export const registerSuccessAction = ()=>{
    return {
        type:REGISTER_SUCCESS
    }
}

export const registerFailureAction = ()=>{
    return{
        type:REGISTER_FAILURE
    }
}

export const registerActionCreator = (username, password, email, redirectOnSuccess, actionOnFail) =>{
    return dispatch => {
        return axios
            .post("http://localhost:8080/register",
                {
                    username: username,
                    password: password,
                    email: email,
                })
            .then(res => {
                dispatch(registerSuccessAction())
                redirectOnSuccess()
            })
            .catch((error) =>{ 
                // dispatch(loginFailureAction())
                if (error.response) {
                    if(error.response.status === 412){
                        actionOnFail();
                    }
                  }
                else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong. Please try again.',
                        confirmButtonColor: '#db3d44',
                        confirmButtonText: 'OK'
                    })
                }
            })
    }
}