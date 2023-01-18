import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Gap } from '../../assets'
import axios from 'axios'

const ProfileItem = () => {
    return (
        <View style={styles.profileItem}>
            <Image source={{uri: 'https://i.pravatar.cc/150?u=haganta@pravatar.com'}} style={styles.avatar}/>
            <View style={styles.profileData}>
                <Text style={styles.name}>Name</Text>
                <Text style={styles.email}>Email</Text>
                <Text style={styles.department}>Department</Text>
            </View>
            <Text style={styles.delete}>X</Text>
        </View>
    )
}

const LocalAPI = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [department, setDepartment] = useState("")

    const submit = () => {
        const data = {
            name,
            email,
            department
        }

        axios.post('http://192.168.137.1:3000/users/', data)
        .then(res => {
            setName("")
            setEmail("")
            setDepartment("")
            console.log(res)
        })
    }

  return (
    <View style={styles.page}>
      <Text style={styles.text}>LocalAPI using JSON Server</Text>
      <Gap height={20} />
      <Text style={styles.text}>Enter your members here:</Text>
      <Gap height={10} />
      <TextInput placeholder='Name' style={styles.input} value={name} onChangeText={(value) => setName(value)}></TextInput>
      <Gap height={10} />
      <TextInput placeholder='Email' style={styles.input} value={email} onChangeText={(value) => setEmail(value)}></TextInput>
      <Gap height={10} />
      <TextInput placeholder='Department' style={styles.input} value={department} onChangeText={(value) => setDepartment(value)}></TextInput>
      <Gap height={35} />
      <Button title='ENTER' onPress={submit}/>
      <Gap height={20} />
      <View style={styles.line} />
      <Gap height={20} />
      <ProfileItem />
    </View>
  )
}

export default LocalAPI

const styles = StyleSheet.create({
    page: {
        padding: 20
    },

    text: {
        textAlign: 'center'
    },

    input: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 12,
        paddingHorizontal: 20
    },

    line: {
        height: 2,
        backgroundColor: 'white'
    },

    avatar: {
        height: 80,
        width: 80,
        borderRadius: 50
    },
    
    profileItem: {
        flexDirection: 'row',
    },

    profileData: {
        justifyContent: 'space-around',
        marginLeft: 20,
        flex: 1
    },

    name: {
        fontWeight: 'bold',
        fontSize: 20
    },

    delete: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    }
})