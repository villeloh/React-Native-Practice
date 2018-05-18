import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ArticleDetailView from '../components/ArticleDetailView'
import dims from '../constants/dimensions'
import { saveToFavoritesAction } from '../actions/favorites-actions'
import { removeFromFavoritesAction } from '../actions/favorites-actions'

const ArticleScreen = (props) => {
  
  const { url } = props.navigation.state.params
  // OR:  const { navigation: { state: { params: { url } } } } = props

  const { favorites } = props
  const isFavorite = favorites.includes(url)

  const handlePress = () => {

    if (isFavorite) {

      const { removeFromFavoritesAction } = props
      removeFromFavoritesAction(url)

    } else {

      const { saveToFavoritesAction } = props
      saveToFavoritesAction(url)
    }
  }
  
  return (
    <ArticleDetailView handlePress={handlePress} url={url} isFavorite={isFavorite}/>
  )
} // end ArticleScreen

const mapStateToProps = (store) => {

  return {

    favUrl: store.favoritesState.favUrl,
    favorites: store.favoritesState.favorites // props.favorites exists now
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    
    // gives it as a prop to this component... I guess ?
    saveToFavoritesAction: bindActionCreators(saveToFavoritesAction, dispatch),
    removeFromFavoritesAction: bindActionCreators(removeFromFavoritesAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleScreen)
