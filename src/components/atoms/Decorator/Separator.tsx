import { StyleSheet, Text, View, ViewProps } from 'react-native'
import React from 'react'


const Separator = (props: ViewProps) => {
  return (
    <View {...props} style={[styles.separator, props.style]}/>
  )
}

export default Separator

const styles = StyleSheet.create({
  separator: {
    width: 1,
    backgroundColor: 'grey',
  }
})