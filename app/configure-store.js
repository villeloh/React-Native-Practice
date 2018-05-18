import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk' // handles asynchronicity / multiple actions for one reducer
import rootReducer from './reducers' // looks for an index file first
// import logger from 'redux-logger'

// typeof __DEV__ = boolean;

/*
// NOTE: not necessary anymore (apparently) (can just use import and it's dropped automatically in production mode for dev-mode-only packages)
let middleWare = [thunk]
if (__DEV__) {
  const reduxLogger = require('redux-logger') // import doesn't work here
  const logger = reduxLogger.createLogger({})
  middleWare = [...middleWare, logger] // note: logger has to be last!
}
*/

export default () => { return createStore(rootReducer, applyMiddleware(thunk)) }
