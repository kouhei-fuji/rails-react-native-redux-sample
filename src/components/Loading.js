import React, { Component } from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  loading: {
    margin: 5,
  },
  loadingText: {
    textAlign: 'center',
    color: '#333333',
    margin: 5,
  },
})

export default class Loading extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator animating size="large" style={styles.loading} />
        <Text style={styles.loadingText}>Loading...</Text>
      </View>
    )
  }
}
