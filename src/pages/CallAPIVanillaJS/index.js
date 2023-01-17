import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const CallAPIVanillaJS = () => {

    useEffect(() => {
        // GET
        fetch('https://reqres.in/api/users/2')
        .then(res => res.json())
        .then(json => console.log(json))

        // POST
        const data = {
            name: "morpheus",
            job: "leader"
        }

        fetch('https://reqres.in/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(postResponse => postResponse.json())
        .then(postJSON => console.log(postJSON))
    }, [])

  return (
    <View style={styles.page}>
      <Text style={styles.text}>CallAPIVanillaJS</Text>
    </View>
  )
}

export default CallAPIVanillaJS

const styles = StyleSheet.create({
    page: {
        padding: 20
    },
    
    text: {
        textAlign: 'center'
    }
})