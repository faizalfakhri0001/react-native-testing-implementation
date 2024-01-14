import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode='cover'
        source={{uri: 'https://plus.unsplash.com/premium_photo-1664361480105-33afc4559c40?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    height: 200,
  },
  image: {
    width: '100%',
    height: '100%',
  },
})