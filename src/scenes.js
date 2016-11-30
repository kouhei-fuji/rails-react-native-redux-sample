import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Scene, Actions } from 'react-native-router-flux'

import * as actions from './actions'

import Posts from './containers/Posts'
import Post from './containers/Post'
import PostEdit from './containers/PostEdit'

function mapStateToProps(state) {
  return { state }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

function connected(Container) {
  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(Container)
}

export default Actions.create(
  <Scene key="app">
    <Scene key="posts" component={connected(Posts)} hideNavBar initial />
    <Scene
      key="post"
      component={connected(Post)}
      hideNavBar={false}
      backTitle="Back"
      rightTitle="Edit"
      onRight={({ id }) => Actions.postEdit({ id })}
    />
    <Scene
      key="postEdit"
      component={connected(PostEdit)}
      hideNavBar={false}
      title="Edit"
      backTitle="Back"
    />
  </Scene>
)
