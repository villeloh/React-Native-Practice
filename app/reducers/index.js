import { combineReducers } from 'redux'
import hackerNewsReducer from './hacker-news-reducer'

export default combineReducers({

    // partOfTheStore: reducerThatIsResponsibleForIt
    hackerNewsState: hackerNewsReducer
})