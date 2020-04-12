import { STATISTICS_SUCCESS, STATISTICS_FAILURE } from "../action-types/statisticsActionTypes"

const initialState = {
    statistics: undefined,
}

const statisticsReducer = (state = initialState, action) => {
    switch (action.type) {
        case STATISTICS_SUCCESS:
            return {
                ...state,
                statistics: action.data
            }
        case STATISTICS_FAILURE:
            return {
                statistics: undefined
            }
        default:
            break;
    }
    return state;
}

export default statisticsReducer