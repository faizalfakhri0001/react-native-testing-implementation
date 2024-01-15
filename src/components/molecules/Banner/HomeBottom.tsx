import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Images } from 'assets'

type Props = {}

const HomeBottom = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={Images.banner_1}
        resizeMode='contain'
        style={styles.image}
      />
    </View>
  )
}

export default HomeBottom

const styles = StyleSheet.create({
  container: {
  },
  image: {
    width: '100%',
    height: 120,
    marginTop: 12,
  },
})