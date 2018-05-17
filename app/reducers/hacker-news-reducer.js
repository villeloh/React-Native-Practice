import * as actionTypes from '../constants/action-types'
// import initialState from './initial-state' // the right way to do it

const initialState = {

  articles: null,
  isLoading: false
}

export default (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.GET_HACKER_NEWS_ARTICLES_REQUEST:

      return { ...state, isLoading: true }
      break

    case actionTypes.GET_HACKER_NEWS_ARTICLES_SUCCESS:

      return { articles: action.articles, isLoading: false }
      break

    case actionTypes.GET_HACKER_NEWS_ARTICLES_ERROR:

      return { ...state, isLoading: false }
      break

    default:

      return state
      break
  }

  return state // must always be there!
}