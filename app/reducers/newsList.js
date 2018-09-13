import * as actionTypes from '../constants/newsList'

const initialState = {}
export default function newsList(state = initialState, action) {
    switch (action.type) {

        case actionTypes.ADD_NEWSLIST:

            return action.data;
            break;
        default:
            return state;
            break;
    }

}