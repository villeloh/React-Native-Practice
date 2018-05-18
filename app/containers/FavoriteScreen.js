import React from 'react'
import FavoriteList from '../components/FavoriteList'

const FavoriteScreen = (props) => {

  const { favorites } = props.navigation.state.params

  return <FavoriteList favorites={favorites}/>
}

export default FavoriteScreen