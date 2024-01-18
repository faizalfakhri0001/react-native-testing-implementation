import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Images } from 'assets'
import { CountDown as CountDownTime } from 'components/atoms'

type Props = {}

const Countdown = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image
        source={Images.flashsale}
        style={styles.image}
      />

      <CountDownTime />
    </View>
  )
}

export default Countdown

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 8,
  },
  image: {
    width: 100,
    aspectRatio: 170/33,
  },
})