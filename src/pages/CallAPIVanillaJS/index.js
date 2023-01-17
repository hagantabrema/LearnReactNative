import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Gap } from '../../assets'

const CallAPIVanillaJS = () => {

    const [userData, setUserData] = useState({
        avatar: '',
        first_name: '',
        last_name: '',
        email: ''
    })

    const [jobData, setJobData] = useState({
        name: '',
        job: ''
    })
    
    const getData = () => {
        fetch('https://reqres.in/api/users/2')
        .then(res => res.json())
        .then(json => {
            console.log('success', json)
            setUserData(json.data)
        })
    }

    const postData = () => {
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
        .then(postJSON => {
            setJobData(postJSON)
            console.log(postJSON)})
    }

  return (
    <View style={styles.page}>
      <Text style={styles.text}>CallAPIVanillaJS</Text>
      <Gap height={20} />
      <View style={styles.line}/>
      <Gap height={20} />
      <Button title='GET DATA' onPress={getData}/>
      <Gap height={20} />
      <Text style={styles.text}>API RESPONSE</Text>
      <Gap height={20} />
      <Image style={styles.image} source={{uri: userData.avatar}} />
      <Gap height={20} />
      <Text style={styles.text}>{`${userData.first_name} ${userData.last_name}`}</Text>
      <Gap height={2} />
      <Text style={styles.text}>{userData.email}</Text>
      <Gap height={20} />
      <View style={styles.line}/>
      <Gap height={20} />
      <Button title='POST DATA' onPress={postData}/>
      <Gap height={20} />
      <Text style={styles.text}>{jobData.name}</Text>
      <Gap height={2} />
      <Text style={styles.text}>{jobData.job}</Text>
      <Gap height={20} />
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
    },

    image: {
        width: 100,
        height: 100,
        alignSelf: 'center',
        borderRadius: 50
    },

    line: {
        height: 2,
        backgroundColor: 'white'
    }
})