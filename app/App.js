import React from 'react';
import RootNavigator from './navigators/RootNavigator'
import { Provider } from 'react-redux'
import configureStore from './configure-store'

const store = configureStore()

export default () => {
    
  return (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
  ) 
}
