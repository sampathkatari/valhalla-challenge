import { combineReducers } from 'redux';
import { cards } from './cards';
import { context } from './context';

export * from './cards';
export * from './context';

const appReducer = combineReducers({
    cards,
    context
})

// Application reducer configuration
const reducer = (state, action) => {
    return appReducer(state, action);
}

export default reducer;