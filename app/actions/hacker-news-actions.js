import * as actionTypes from '../constants/action-types'
import fetchGetJSON from '../util/fetchGetJSON'
import { hackerNewsApiUrl } from '../constants/config'

export const getHackerNewsArticlesAction = (dispatch) => {

  return (dispatch) => {
    
    dispatch({

      type: actionTypes.GET_HACKER_NEWS_ARTICLES_REQUEST
    })

    // this.setState({ isLoading: true}) // poller-related
    fetchGetJSON(`${hackerNewsApiUrl}/beststories.json`)
    .then(articleIds => {

      const promises = articleIds.splice(0,20).map(id => {

        const url = `${hackerNewsApiUrl}/item/${id}.json`
        return fetchGetJSON(url)
      })
      return Promise.all(promises)
    })
    .then(articles => {

      dispatch({
        type: actionTypes.GET_HACKER_NEWS_ARTICLES_SUCCESS,
        articles: articles
      })
    })
    .catch(error => {
      console.log(error)
      dispatch({ type: actionTypes.GET_HACKER_NEWS_ARTICLES_ERROR}) 
    })
  } // end first return-statement    
} // end getHackerNewsArticlesAction()

/*

basic use:

// action:

const action = {
  type: NAME
}

// Dispatch:
dispatch(action)

*/
