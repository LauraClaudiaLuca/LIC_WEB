import {axiosInstance} from "../../axios/axiosinstance"
import { STATISTICS_SUCCESS } from "../action-types/statisticsActionTypes"
import Swal from 'sweetalert2'


export const statisticsSuccessful = (data) => {
    return {
        type: STATISTICS_SUCCESS,
        data: data,
    }
}
export const statisticsFailure = () => {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Please try again.',
        confirmButtonColor: '#db3d44',
        confirmButtonText: 'OK'
    })
    return {
        type: STATISTICS_SUCCESS,
        data: undefined,
    }
}
export const statisticsActionCreator = (productCode, dateFrom, dateTo) =>{
    return dispatch => {
        return axiosInstance
            .get("http://localhost:8080/statistics",
                {
                    productCode: productCode,
                    dateFrom: dateFrom,
                    dateTo: dateTo,
                })
            .then((response) => {
                dispatch(statisticsSuccessful(response))
                // redirectOnSuccess()
            })
            .catch((error) =>{ 
                dispatch(statisticsFailure())
                // if (error.response) {
                //     if(error.response.status === 412){
                //         actionOnFail();
                //     }
                //   }
                // else{
                //     Swal.fire({
                //         icon: 'error',
                //         title: 'Oops...',
                //         text: 'Something went wrong. Please try again.',
                //         confirmButtonColor: '#db3d44',
                //         confirmButtonText: 'OK'
                //     })
                // }
            })
    }
}