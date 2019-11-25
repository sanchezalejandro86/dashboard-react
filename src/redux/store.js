import { createStore, combineReducers } from 'redux';
import movements from './reducers/movements';

const reducer = combineReducers({
    movements,
});

const store = createStore(reducer);

export default store;
