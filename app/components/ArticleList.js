import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, RefreshControl, StyleSheet, Text, View } from 'react-native';
import { articleListProps } from '../constants/prop-types'
import ArticleListItem from './ArticleListItem'
import colors from '../constants/colors'
import dims from '../constants/dimensions'

const ArticleList = (props) => {

  const { articles, handleNavigation, refreshing, onRefresh } = props

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      refreshControl={<RefreshControl 
        refreshing={refreshing}
        onRefresh={onRefresh}
      />}
      data={articles}
      renderItem={({ item }) => {
        return <ArticleListItem
          title={item.title}
          by={item.by}
          time={item.time}
          url={item.url}
          onHandlePress={handleNavigation}
        />
      }}
      keyExtractor={(article) => `${article.id}`}
    />
  )
}

const styles = StyleSheet.create({

  contentContainer: {

    // flex: 1,
    width: dims.screenWidth,
    justifyContent: 'center',
    backgroundColor: colors.white,
    padding: 10
  },
  
  container: {
    
    padding: 20
  }
})

// this seems to work, even though the .propTypes is said to be of type 'any'
ArticleList.propTypes = articleListProps

ArticleList.defaultProps = {
  articles: [{ title: 'yay' }]
}

export default ArticleList
