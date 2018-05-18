import React from 'react'
import { FlatList, StyleSheet, Text } from 'react-native'
import dims from '../constants/dimensions'
import colors from '../constants/colors'

export default FavoriteList = (props) => {

  const { favorites } = props

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={favorites}
      renderItem={({ item }) => {
        return <Text>{item}</Text>
      }}
      keyExtractor={(favoriteUrl) => favoriteUrl}
    />
  )
}

const styles = StyleSheet.create({

  contentContainer: {

    width: dims.screenWidth,
    justifyContent: 'center',
    backgroundColor: colors.white,
    padding: 10
  },
  
  container: {
    
    padding: 20
  }
})
