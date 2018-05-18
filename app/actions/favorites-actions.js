import * as actionTypes from '../constants/action-types'

export const saveToFavoritesAction = (url) => {

  return (dispatch) => {

    dispatch({

      type: actionTypes.SAVE_TO_FAVORITES,
      favUrl: url
    })
  }
}

export const removeFromFavoritesAction = (url) => {

  return (dispatch) => {

    dispatch({

      type: actionTypes.REMOVE_FROM_FAVORITES,
      removeUrl: url
    })
  }
}