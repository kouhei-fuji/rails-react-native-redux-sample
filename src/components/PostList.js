import React, { Component, PropTypes } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  listText: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

export default class PostList extends Component {
  static propTypes = {
    posts: PropTypes.array.isRequired,
    transition: PropTypes.func.isRequired,
  }

  handlePress(args) {
    if (this.props.transition) {
      this.props.transition(args)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.props.posts.map(({ id, title }, index) => (
          <Text
            key={index}
            style={styles.listText}
            onPress={() => this.handlePress({ id, title })}
          >
            ID {id}: {title}
          </Text>
        ))}
      </View>
    )
  }
}
