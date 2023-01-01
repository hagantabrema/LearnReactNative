import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FunctionalComponentLifecycle = () => {
  return (
    <View style={styles.page}>
      <Text>FunctionalComponentLifecycle</Text>
    </View>
  )
}

export default FunctionalComponentLifecycle

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'black',
        height: 50,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    }
})