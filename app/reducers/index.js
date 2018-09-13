import {combineReducers} from 'redux'     ;
import userInfo from './userInfo';
import user from './userDate';
import newsList from './newsList';
import myTest from './myTest'

const rootReducer = combineReducers({
    userInforr: userInfo,
    userDatettt: user,
    myTest: myTest,
    newsListsd: newsList
})
export default rootReducer;