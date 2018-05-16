import React from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native'
import { articleListItemProps } from '../constants/prop-types'
import colors from '../constants/colors'

class ArticleListItem extends React.Component {

  onHandlePress = () => {
    const { url, onHandlePress } = this.props

    // note1: it seems there can be invalid urls for some reason
    // note2: it seems the original url is read-only (why tho??), so I made a new variable
    const url2 = url === undefined ? '' : url

    onHandlePress('Article', { url2 })
  }

  render() {
    const { time, by, title, onHandlePress } = this.props
    return (
      <TouchableOpacity
        onPress={this.onHandlePress}
        style={styles.item}
        >
        <View style={styles.metaHeader}>
          <Text style={styles.metaText}>{time}</Text>
          <Text style={styles.metaText}>{by}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  item: {
    borderColor: colors.borderColor,
    // borderWidth: StyleSheet.hairlineWidth,
    borderRadius:  5,
    borderWidth: 2.6,
    marginBottom: 20,
    padding: 15,
    backgroundColor: colors.green
  },
  metaHeader: {
    flexDirection: 'row', // 'column'
    // 'flex-start', 'flex-end', 'center', 'space-around':
    justifyContent: 'space-between',
    marginBottom: 10
  },
  metaText: {
    fontSize: 12
  },

  title: {

    backgroundColor: colors.titleColor
  }
})

ArticleListItem.propTypes = articleListItemProps

export default ArticleListItem
