/** Reducer to store the context of the application
 * Currently storing a flag to show or hide filter between screens
*/
const initialState = {
    filterDisplay: true,
};

export const HIDE_FILTER = 'HIDE_FILTER';
export const SHOW_FILTER = 'SHOW_FILTER';

export const showFilter = () => (dispatch) => {
    dispatch({
        type: SHOW_FILTER
    })
}

export const hideFilter = () => (dispatch) => {
    dispatch({
        type: HIDE_FILTER
    })
}

export const context = (context = initialState, action) => {
    switch(action.type) {
        case SHOW_FILTER:
            return Object.assign({}, context, { filterDisplay: true });
        case HIDE_FILTER:
            return Object.assign({}, context, { filterDisplay: false });
        default:
            return context;
    }
}