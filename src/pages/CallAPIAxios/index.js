import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Gap } from '../../assets'
import axios from 'axios'

const CallAPIAxios = () => {

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

        axios.get('https://reqres.in/api/users/2')
        .then(res => {
            setUserData(res.data.data)
            console.log(res.data.data)
        })
        .catch(err => console.log('err:', err))
    }

    const postData = () => {
        const data = {
            name: "morpheus",
            job: "leader"
        }
        
        axios.post('https://reqres.in/api/users', data)
        .then(res => {
            setJobData(data)
            console.log(res.data)
        })
        .catch(err => console.log('err:' , err))
    }

  return (
    <View style={styles.page}>
      <Text style={styles.text}>CallAPIAxios</Text>
      <Gap height={20} />
      <View style={styles.line}/>
      <Gap height={20} />
      <Button title='GET DATA' onPress={getData}/>
      <Gap height={20} />
      <Text style={styles.text}>API RESPONSE</Text>
      <Gap height={20} />
      {userData.avatar.length > 0 && (
          <Image style={styles.image} source={{uri: userData.avatar}} />
      )}
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

export default CallAPIAxios

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