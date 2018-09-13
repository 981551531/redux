import {combineReducers} from 'redux'     ;
import userInfo from './userInfo';
import user from './userDate';
import newsList from './newsList';

const rootReducer = combineReducers({
    userInforr: userInfo,
    userDatettt: user,
    newsList: newsList
})
export default rootReducer;