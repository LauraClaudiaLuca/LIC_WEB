import { axiosInstance } from "../../axios/axiosinstance"
import { STATISTICS_SUCCESS } from "../action-types/statisticsActionTypes"
import Swal from 'sweetalert2'


export const statisticsSuccessful = (data) => {
    return {
        type: STATISTICS_SUCCESS,
        data: data,
    }
}
export const statisticsFailure = () => {
    return {
        type: STATISTICS_SUCCESS,
        data: undefined,
    }
}
export const statisticsActionCreator = (productCode, dateFrom, dateTo) => {
    console.log("--------", productCode, dateFrom, dateTo)
    return dispatch => {
        return axiosInstance
            .get("http://localhost:8080/tenant/statistics", {
                params: {
                    productCode: productCode,
                    dateFrom: dateFrom,
                    dateTo: dateTo,
                }
            },
            )
            .then((response) => {
                dispatch(statisticsSuccessful(response.data))
                // redirectOnSuccess()
            })
            .catch((error) => {
                if (error.response) {
                    if (error.response.status === 404) {
                        dispatch(statisticsFailure())
                    }
                    else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Something went wrong. Please try again.',
                            confirmButtonColor: '#db3d44',
                            confirmButtonText: 'OK'
                        })
                        dispatch(statisticsFailure())
                    }
                }
            })
    }
}