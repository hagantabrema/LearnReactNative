import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const FunctionalComponentLifecycle = () => {
  const [number, setNumber] = useState(200)

  useEffect(() => {
    console.log('functional component did mount')
    setTimeout(() => {
      setNumber(400)
    }, 2000)
    return () => {
      console.log('functional component did update')
    }
  },[number])

  // useEffect(() => {
  //   console.log('functional component did update')
  //   setTimeout(() => {
  //     setNumber(400)
  //   }, 2000)
  // }, [number])

  return (
    <View style={styles.page}>
      <Text>FunctionalComponentLifecycle</Text>
      <Text>updating number: {number}</Text>
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