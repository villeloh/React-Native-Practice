import { createStackNavigator } from 'react-navigation'
import ArticleScreen from '../containers/ArticleScreen'
import HomeScreen from '../containers/HomeScreen'
import FavoriteScreen from '../containers/FavoriteScreen'

const RootNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  Favorites: {
    screen: FavoriteScreen,
    navigationOptions: {
      headerTitle: 'Favorites'
    }
  },
  Article: {
    screen: ArticleScreen,
    navigationOptions: {
      headerTitle: 'Article'
    }
  }
}, {
  initialRouteName: 'Home',
  navigationOptions: {
    headerBackTitle: 'Back',
    headerTitle: 'Hacker News'
  }
})

export default RootNavigator
