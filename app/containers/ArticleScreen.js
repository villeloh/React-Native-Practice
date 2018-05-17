import React from 'react'
import ArticleDetailView from '../components/ArticleDetailView'
import dims from '../constants/dimensions'

const ArticleScreen = (props) => {

  const { url } = props.navigation.state.params
  // OR:  const { navigation: { state: { params: { url } } } } = props

  const handlePress = () => {

    console.log('you pressed the button!')
  }
  
  return (
    <ArticleDetailView handlePress={handlePress} url={url}/>
  )
} // end ArticleScreen

export default ArticleScreen
