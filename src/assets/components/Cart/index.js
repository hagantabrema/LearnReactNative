import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Cart = ({number}) => {
  return (
    <View>
      <Text style={styles.text}>Jumlah Item di Keranjang:</Text>
      <Text> {number}</Text>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
})