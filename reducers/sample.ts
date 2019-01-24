import {actionTypes} from '../actions/sample'
import { fromJS, List, Map } from 'immutable'
import Cookies from 'js-cookie';

export const initialState = Map({
    sample_api: Map({
        status: 0,
        loading: false,
        loaded: false,
        data: Map({

        })
    }),
})

function reducer (state = initialState, action) {
    switch (action.type) {
        case actionTypes.SAMPLE_API_REQUEST:
            return state
                .setIn(["sample_api", "loading"], true)
                .setIn(["sample_api", "loaded"], false);
        case actionTypes.SAMPLE_API_SUCCESS:
            return state
                .setIn(["sample_api", "status"], action.data.code)
                .setIn(["sample_api", "loading"], false)
                .setIn(["sample_api", "loaded"], true)
                .setIn(["sample_api", "data"], fromJS(action.data.data));
        case actionTypes.SAMPLE_API_FAILURE:
            return state
                .setIn(["sample_api", "status"], action.err.status)
                .setIn(["sample_api", "loading"], false)
                .setIn(["sample_api", "loaded"], true)
                .setIn(["sample_api", "error"], fromJS(action.err))
        default:
            return state
    }
}

export default reducer