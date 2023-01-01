import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

export default class ClassComponentLifecycle extends Component {
    constructor(props) {
        super(props)
        console.log('constructor')
        this.state = {
            number: 100
        }
    }

    componentDidMount() {
        console.log('component did mount')
        setTimeout(() => {
            this.setState({
                number: 250
            })
        }, 2000)
    }

    componentDidUpdate() {
        console.log('component did update')
    }

    componentWillUnmount() {
        console.log('component will unmount')
    }

  render() {
    console.log('render')
    return (
      <View style={styles.page}>
        <Text>ClassComponentLifecycle</Text>
        <Text>updating number: {this.state.number}</Text>
      </View>
    )
  }
}

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