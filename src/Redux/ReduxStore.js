import {combineReducers, createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import cartPageReducer from './Reducers/CartPageReducer';
import createSagaMiddleware from 'redux-saga';
import {watchGetItems} from '../Sagas/pollingSaga';



const sagaMiddleware = createSagaMiddleware();
const reducers = combineReducers({
    cartPage: cartPageReducer,
});
const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(sagaMiddleware),
));

sagaMiddleware.run(watchGetItems);

window.store = store;

export default store;
