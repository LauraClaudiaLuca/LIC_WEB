import { STATISTICS_SUCCESS, STATISTICS_FAILURE } from "../action-types/statisticsActionTypes"

const initialState = {
    statistics: undefined,
}

const statisticsReducer = (state = initialState, action) => {
    const newState = { ...state };
    switch (action.type) {
        case STATISTICS_SUCCESS:
                newState.statistics = action.data
                break;
        case STATISTICS_FAILURE:
            newState.statistics = action.data
            break;
        default:
            break;
    }
    return newState;
}

export default statisticsReducer