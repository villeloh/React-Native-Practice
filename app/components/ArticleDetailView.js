import React from 'react'
import { WebView, Text, View, Button, StyleSheet } from 'react-native'
import dims from '../constants/dimensions'

const ArticleDetailView = (props) => {

  const { url } = props
  const handlePress = props.handlePress 
  const width = dims.screenWidth
  const height = dims.screenHeight
  
  return (
    <View style={styles.container} width={width} height={height}>
      <View style={styles.button}>
        <Button 
          title={'Save to Favorites'}
          onPress={handlePress}
        />
      </View>
      <WebView
        style={styles.webView}
        source={{ uri: url }}
        onError={(event) => console.log(event)}
        startInLoadingState={true}
        initialScale={100}
        width={width}
        height={height}
      />
    </View>
  )
} // end ArticleDetailView

const buttonWidth = dims.screenWidth * 0.5
const wvMargin = dims.gutter

const styles = StyleSheet.create({

  container: {
    // not needed for now I guess...
  },

  button: {
    width: buttonWidth,
    alignSelf: 'center',
    marginTop: 10
  },

  webView: {
    margin: wvMargin
  }
})

export default ArticleDetailView
