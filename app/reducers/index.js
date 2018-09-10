import {combineReducers} from 'redux'     ;
import userInfo from './userInfo';
import user  from './userDate';

const rootReducer = combineReducers({
    userInforr: userInfo,
    userDatettt:user
})
export default rootReducer;