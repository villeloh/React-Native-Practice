import React from 'react'
import { WebView, Text, View } from 'react-native'

const ArticleScreen = (props) => {

  const { url } = props.navigation.state.params
  // OR:  const { navigation: { state: { params: { url } } } } = props
  
  return (
    <View>
    <Text>{url}</Text>
    <WebView
      source={{ uri: url }}
      // startInLoadingState={true}
      startInLoadingState
    />
    </View>
  )
}

export default ArticleScreen
