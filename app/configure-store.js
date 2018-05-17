import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' // handles asynchronicity / multiple actions for one reducer
import rootReducer from './reducers' // looks for an index file first

export default () => createStore(rootReducer, applyMiddleware(thunk))
