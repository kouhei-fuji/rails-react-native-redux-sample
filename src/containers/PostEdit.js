import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, TextInput, ScrollView } from 'react-native'

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

export default class PostEdit extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    state:   PropTypes.object.isRequired,
  }

  constructor() {
    super()
    this.input = {}
  }

  componentWillMount() {
    if (!this.props.state.post.data) {
      const { id } = this.props.state.scene
      this.props.actions.fetchPostRequest(id)
    }
  }

  handlePress() {
    const { id } = this.props.state.scene,
          data = this.input
    this.props.actions.updatePostRequest({ id, data })
  }

  render() {
    const { isRequesting, data } = this.props.state.post
    return isRequesting
    ? (
      <Loading />
    ) : (
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <TextInput
          style={{ height: 50 }}
          defaultValue ={data && data.title}
          onChangeText={text => this.input.title = text }
        />
        <TextInput
          multiline
          style={{ height: 600 }}
          defaultValue ={data && data.body}
          onChangeText={text => this.input.body = text }
        />
        <Text style={{ textAlign: 'center' }} onPress={::this.handlePress}>
          Save
        </Text>
      </ScrollView>
    )
  }
}
