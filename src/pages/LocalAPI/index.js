import { Button, Image, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Gap } from '../../assets'
import axios from 'axios'

const ProfileItem = ({name, email, department}) => {
    return (
        <View style={styles.profileItem}>
            <Image source={{uri: `https://i.pravatar.cc/150?u=${email}`}} style={styles.avatar}/>
            <View style={styles.profileData}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.email}>{email}</Text>
                <Text style={styles.department}>{department}</Text>
            </View>
            <Text style={styles.delete}>X</Text>
        </View>
    )
}

const LocalAPI = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [department, setDepartment] = useState("")

    const [users, setUsers] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const submit = () => {
        const data = {
            name,
            email,
            department
        }

        axios.post('http://192.168.137.1:3000/users/', data)
        .then(res => {
            console.log('res post:', res.data)
            setName("")
            setEmail("")
            setDepartment("")
            getData()
        })
    }

    const getData = () => {
        axios.get('http://192.168.137.1:3000/users/')
        .then(res => {
            console.log('res get:', res.data)
            setUsers(res.data)
            console.log('users:', users)
        })
    }

    // const getData = async () => {
    //     try {
    //         const res = await axios.get('http://192.168.137.1:3000/users/')
    //         console.log('res get:', res)
    //         setUsers(res.data)
    //         console.log('users:', users)
    //     } catch (err) {
    //         console.log('err:', err)
    //     }
    // }

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
      {users.map(user => {
        <ProfileItem key={user.id} name={user.name} email={user.email} department={user.department} />
      })}
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
        marginBottom: 20
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