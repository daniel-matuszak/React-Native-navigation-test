import React, { Component }from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

class ModalScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title='Dismiss'
        />
      </View>
    )
  }
}

export default ModalScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
  },
})