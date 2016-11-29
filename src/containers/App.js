import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Router } from 'react-native-router-flux'

import scenes from '../scenes'

const RouterWithRedux = connect()(Router)

export default class App extends Component { // [MEMO] Move to `src/index.js`?
  render() {
    return <RouterWithRedux scenes={scenes} />
  }
}
