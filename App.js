import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ClassComponentLifecycle, FunctionalComponentLifecycle, Props, State } from './src'

const App = () => {
  const [isShown, setIsShown] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setIsShown(false)
    }, 4000)
  }, [])

  return (
    <View style={styles.page}>
      {/* {isShown && <ClassComponentLifecycle />} */}
      {/* {isShown && <FunctionalComponentLifecycle />} */}
      {/* <Props /> */}
      <State />
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    //justifyContent: 'center',
    //alignItems: 'center'
  }
})