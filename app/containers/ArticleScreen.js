import React from 'react'
import { WebView, Text, View } from 'react-native'
import dims from '../constants/dimensions'

const ArticleScreen = (props) => {

  const { url } = props.navigation.state.params
  // OR:  const { navigation: { state: { params: { url } } } } = props
  
  return (
    <WebView
      source={{ uri: url }}
      onError={(event) => console.log(event)}
      startInLoadingState={true}
      initialScale={100}
      width = {dims.screenWidth}
      // startInLoadingState
    />
  )
} // end ArticleScreen

export default ArticleScreen
