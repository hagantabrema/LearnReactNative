import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Cart, Gap, Product } from '../../assets'

const Communication = () => {
    const [totalProduct, setTotalProduct] = useState(0)

  return (
    <View style={styles.wrapper}>
      <Text syle={styles.text}>Example of Communication between Components</Text>
      <Gap height={20}/>
      <Product onPress={() => setTotalProduct(totalProduct + 1)}/>
      <Gap height={20} />
      <Cart number={totalProduct}/>
    </View>
  )
}

export default Communication

const styles = StyleSheet.create({
    wrapper: {
        alignItems: 'center',
        padding: 20
    }
})