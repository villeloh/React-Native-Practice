import * as actionTypes from '../constants/action-types'
import { removeFromArray } from '../util/formatting'

const initialState = {

  favorites: []
}

export default (state = initialState, action) => {

  switch (action.type) {

    case actionTypes.SAVE_TO_FAVORITES:

      const newFavorites = [...state.favorites, action.favUrl]
      return { ...state, favorites: newFavorites }
      break

    case actionTypes.REMOVE_FROM_FAVORITES:

      const newFavorites2 = removeFromArray(state.favorites, action.removeUrl)
      console.log(newFavorites2)
      return { ...state, favorites: newFavorites2 }
      break

    default:

      return state
      break
  }

  return state // must always be there!
}