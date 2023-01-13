import { Button, StyleSheet, Text, View } from 'react-native'
import React, { Component, useState } from 'react'

const Gap = ({height, width}) => {
    return (
        <View style={{height: height, width: width}}></View>
    )
}

const FunctionalCounter = () => {
    const [number, setNumber] = useState(0)

    return (
        <View style={styles.wrapper}>
            <Text style={styles.text}>Functional Counter</Text>
            <Text style={styles.text}>{number}</Text>
            <Button title='Tambah' onPress={() => setNumber(number + 1)}></Button>
            <Gap height={20}/>
            <Button title='Reset' onPress={() => setNumber(0)}></Button>
        </View>
    )
}

class ClassCounter extends Component {
    state = {
        number: 0,
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.text}>Class Counter</Text>
                <Text style={styles.text}>{this.state.number}</Text>
                <Button title='Tambah' onPress={() => this.setState({number: this.state.number + 1})}></Button>
                <Gap height={20}/>
                <Button title='Reset' onPress={() => this.setState({number: 0})}></Button>
            </View>
        )
    }
}

const State = () => {
  return (
    <View style={styles.page}>
        <Text style={styles.text}>State Example</Text>
        <FunctionalCounter />
        <Gap height={30}/>
        <ClassCounter />
    </View>
  )
}

export default State

const styles = StyleSheet.create({
    page: {
        padding: 20
    },

    wrapper: {
        marginTop: 20
    },

    text: {
        textAlign: 'center',
        color: 'black'
    }
})