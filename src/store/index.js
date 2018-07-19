// Application redux store configuration
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../redux/modules';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const configureStore = (initialState = {}) => {
    if (process.env.NODE_ENV !== 'production') {
       console.log('Looks like we are in development mode!');
    }
    return createStore(
        reducer,
        initialState,
        composeEnhancers(applyMiddleware(thunk))
    );
};
