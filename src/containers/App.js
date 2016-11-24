import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Router } from 'react-native-router-flux'

import * as actions from '../actions'
import scenes from '../scenes'

const RouterWithRedux = connect()(Router)

class App extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    state:   PropTypes.object.isRequired,
  }

  render() {
    const { actions, state } = this.props
    return <RouterWithRedux scenes={scenes} actions={actions} state={state} />
  }
}

function mapStateToProps(state) {
  return { state }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
