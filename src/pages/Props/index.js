import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Story = (props) => {
    return (
        <View style={styles.storyContainer}>
            <Image
                source={{
                    uri: props.imageLink
                }}
                style={{width: 70, height: 70, borderRadius: 50}}
            />
            <Text
              style={{
                color: 'black',
                textAlign: 'center'
              }}>
              {props.text}
            </Text>
        </View>
    )
}

const Props = () => {
  return (
    <ScrollView horizontal style={styles.story}>
      <Story
        imageLink="https://source.unsplash.com/random/1"
        text="Story1"
      />
      <Story
        imageLink="https://source.unsplash.com/random/2"
        text="Story2"
      />
      <Story
        imageLink="https://source.unsplash.com/random/3"
        text="Story3"
      />
      <Story
        imageLink="https://source.unsplash.com/random/4"
        text="Story4"
      />
      <Story
        imageLink="https://source.unsplash.com/random/5"
        text="Story5"
      />
      <Story
        imageLink="https://source.unsplash.com/random/6"
        text="Story6"
      />
      <Story
        imageLink="https://source.unsplash.com/random/7"
        text="Story7"
      />
    </ScrollView>
  )
}

export default Props

const styles = StyleSheet.create({
  storyContainer: {
    marginHorizontal: 8,
    marginTop: 10
  },

  story: {
    flexDirection: 'row',
  }
})