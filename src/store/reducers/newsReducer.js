import {ACTION_SETTER} from "../actions/actionConst";
import {getStorage} from "../utils/getStorage";

const initState = {
    items: [],
    count: 0,
    isLoadingNews: false,
    filter: ''
}

export const newsReducer = (state = getStorage().getInitStorage('newsReducer', initState), action) => {

    let newState = Object.assign({}, state);

    if (action.reducer === 'newsReducer') {
        if (action.type === ACTION_SETTER) {
            newState = Object.assign(newState, action.payload);
        }
    }

    return newState;

}