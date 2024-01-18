import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Color } from 'config'

type Props = {}

const Countdown = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.countContainer}>
        <Text allowFontScaling={false} style={styles.countText}>12</Text>
      </View>
      <Text allowFontScaling={false}> : </Text>
      <View style={styles.countContainer}>
        <Text allowFontScaling={false} style={styles.countText}>12</Text>
      </View>
      <Text allowFontScaling={false}> : </Text>
      <View style={styles.countContainer}>
        <Text allowFontScaling={false} style={styles.countText}>12</Text>
      </View>
    </View>
  )
}

export default Countdown

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'row',
  },
  countContainer: {
    backgroundColor: Color.black,
    width: 20,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 12,
    fontWeight: '700',
    color: Color.white,
  },
})