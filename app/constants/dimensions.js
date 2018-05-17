import { Dimensions } from 'react-native'

export default {
  
  screenHeight: Dimensions.get('screen').height,
  screenWidth: Dimensions.get('screen').width,
  gutter: Dimensions.get('window').width / 15  
}
