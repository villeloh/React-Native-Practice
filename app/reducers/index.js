import { combineReducers } from 'redux'
import hackerNewsReducer from './hacker-news-reducer'
import favoritesReducer from './favorites-reducer'

export default combineReducers({

    // partOfTheStore: reducerThatIsResponsibleForIt
    hackerNewsState: hackerNewsReducer,
    favoritesState: favoritesReducer
})