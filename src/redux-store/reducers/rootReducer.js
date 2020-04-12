import {combineReducers} from 'redux';
import loginReducer from './loginReducer'
import statisticsReducer from './statisticsReducer'

export default combineReducers({
    loginReducer,
    statisticsReducer,
});