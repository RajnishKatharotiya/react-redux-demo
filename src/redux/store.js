import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import state from './reducers'



export default createStore(
    combineReducers({ state }),
    {},
    applyMiddleware(thunk)
)