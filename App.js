import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ClassComponentLifecycle, FunctionalComponentLifecycle } from './src'

const App = () => {
  const [isShown, setIsShown] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setIsShown(false)
    }, 4000)
  }, [])

  return (
    <View style={styles.page}>
      {isShown && <ClassComponentLifecycle />}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'grey',
    justifyContent: 'center',
    alignItems: 'center'
  }
})