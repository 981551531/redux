import {combineReducers} from 'redux'     ;
import userInfo from './userInfo';
import user from './userDate';
import newsList from './newsList';
import myTest from './myTest'
import newsDetail from './newsDetail'

const rootReducer = combineReducers({
    userInforr: userInfo,
    userDatettt: user,
    myTest: myTest,
    newsList: newsList,
    newsDetail: newsDetail
})
export default rootReducer;