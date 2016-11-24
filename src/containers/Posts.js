import React, { Component, PropTypes } from 'react'
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
    return isRequesting ? <Loading /> : <PostList posts={data} />
  }
}
