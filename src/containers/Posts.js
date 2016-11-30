import React, { Component, PropTypes } from 'react'
import { Text, View } from 'react-native'
import { moveTo } from '../services/utils'

import Loading from '../components/Loading'
import PostList from '../components/PostList'

export default class Posts extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    state:   PropTypes.object.isRequired,
  }

  componentWillMount() {
    this.props.actions.fetchPostsRequest()
  }

  render() {
    const { isRequesting, data } = this.props.state.posts
    return isRequesting
    ? (
      <Loading />
    ) : (
      <View style={{ flex: 1 }}>
        <PostList posts={data} transition={({ id, title }) => moveTo('post', { id, title })} />
        <Text style={{ textAlign: 'center' }} onPress={() => moveTo('postNew')}>
          New
        </Text>
      </View>
    )
  }
}
