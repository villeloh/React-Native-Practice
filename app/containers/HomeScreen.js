import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ArticleList from '../components/ArticleList'
import articlesData from '../fixtures/articlesData.json'
import fetchGetJSON from '../util/fetchGetJSON'
import { hackerNewsApiUrl } from '../constants/config'
import { getHackerNewsArticlesAction } from '../actions/hacker-news-actions'

class HomeScreen extends React.Component {

  constructor(props) {
    super(props)

    // this.poller = null
  }
  
  handleNavigation = (routeName, params) => {
    const { navigation } = this.props
    navigation.navigate(routeName, params)
  }

  componentDidMount() {

    this.getArticles()
    // const TEN_SECONDS = 10000
    // this.poller = setInterval(this.getArticles, TEN_SECONDS)
  }

  componentWillUnmount() {

    // clearInterval(this.poller)
  }

  getArticles = () => {

    const { getHackerNewsArticlesAction } = this.props
    getHackerNewsArticlesAction()
  } // end getArticles()

  render() {

    const { articles, isLoading } = this.props

    return (
      <ArticleList
        articles={articles}
        handleNavigation={this.handleNavigation}
        refreshing={isLoading}
        onRefresh={this.getArticles}
      />
    )
  } // end render()
} // end class

const mapStateToProps = (store) => {

  return {

    isLoading: store.hackerNewsState.isLoading, // passed as a prop to HomeScreen
    articles: store.hackerNewsState.articles
  }
}

const mapDispatchToProps = (dispatch) => {

  return {
    
    // gives it as a prop to this component... I guess ?
    getHackerNewsArticlesAction: bindActionCreators(getHackerNewsArticlesAction, dispatch)
  }

  // OR: return bindActionCreators({getHackerNewsArticlesAction: getHackerNewsArticlesAction}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)
