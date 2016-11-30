import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'

import Loading from '../components/Loading'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
  },
  contentContainer: {
    marginTop: 80,
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 20,
  },
})

export default class Post extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    state:   PropTypes.object.isRequired,
  }

  componentWillMount() {
    const { id } = this.props.state.scene
    this.props.actions.fetchPostRequest(id)
  }

  handlePress() {
    const { id } = this.props.state.scene
    this.props.actions.deletePostRequest(id)
  }

  render() {
    const { isRequesting, data } = this.props.state.post
    return isRequesting
    ? (
      <Loading />
    ) : (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Text>{data && data.body}</Text>
        <Text style={{ textAlign: 'center', marginTop: 20 }} onPress={::this.handlePress}>Delete</Text>
      </ScrollView>
    )
  }
}
