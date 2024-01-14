import { Image, StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React from 'react'
import { Color } from 'config';

type Props = {
  label: string;
  icon: any; 
} & TouchableOpacityProps

const ServiceIcon = (props: Props) => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <View style={styles.iconContainer}>
        <Image
          style={styles.image}
          source={props.icon}
        />
      </View>
      <Text allowFontScaling={false} style={styles.label}>{props.label}</Text>
    </TouchableOpacity>
  )
}

export default ServiceIcon

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    width: '18%',
  },
  iconContainer: {
    borderColor: Color.gray,
    borderWidth: 1,
    borderRadius: 12,
    padding: 4,
  },
  image: {
    height: 40,
    width: 40,
  },
  label: {
    maxWidth: '100%',
    fontSize: 10,
    textAlign: 'center',
    color: Color.black,
  },
})