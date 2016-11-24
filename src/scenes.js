import React from 'react'
import { Scene, Actions } from 'react-native-router-flux'

import Posts from './containers/Posts'

export default Actions.create(
  <Scene key="app">
    <Scene key="posts" component={Posts} hideNavBar initial />
  </Scene>
)
