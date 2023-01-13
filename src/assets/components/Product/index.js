import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Product = ({onPress}) => {
  return (
    <View style={styles.wrapper}>
        <Image
            style={styles.image}
            source={{
                uri: 'https://source.unsplash.com/random/'
            }}
        />
        <Text>Random Product</Text>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.textButton}>Tambah</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        backgroundColor: 'grey',
        width: '70%',
        height: 150,
        padding: 12,
        borderRadius: 10
    },

    image: {
        height: 60,
        width: '100%',
        marginBottom: 2,
        borderRadius: 8
    },

    button: {
        backgroundColor: 'lightblue',
        width: '100%',
        borderRadius: 10,
        height: 30,
        justifyContent: 'center',
        marginTop: 10
    },

    textButton: {
        textAlign: 'center',
        color: 'black'
    }
})