import React from 'react'
import ArticleList from '../components/ArticleList'
import articlesData from '../fixtures/articlesData.json'
import fetchGetJSON from '../util/fetchGetJSON'
import { hackerNewsApiUrl } from '../constants/config'

class HomeScreen extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      articles: null,
      isLoading: true
    }
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

  getArticles= () => {

    // this.setState({ isLoading: true})
    fetchGetJSON(`${hackerNewsApiUrl}/beststories.json`)
    .then(articleIds => {

      const promises = articleIds.splice(0,20).map(id => {

        const url = `${hackerNewsApiUrl}/item/${id}.json`
        return fetchGetJSON(url)
      })
      return Promise.all(promises)
    })
    .then(articles => {

      this.setState({ 

        articles: articles,
        isLoading: false
      })
    })
    .catch(error => {
      console.log(error)
      this.setState({ isLoading: false})
    })
  }

  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        handleNavigation={this.handleNavigation}
        refreshing={this.state.isLoading}
        onRefresh={this.getArticles}
      />
    )
  }
}

export default HomeScreen
