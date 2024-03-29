import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Images } from 'assets'

type Props = {}

const Home = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode='stretch'
        source={Images.main_banner_3}
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