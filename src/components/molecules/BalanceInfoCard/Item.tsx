import { Color } from 'config';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  value: string;
  iconName: string;
  iconColor: string;
  description: string;
}

const Item = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Icon name={props.iconName} size={17} color={props.iconColor}/>
        <Text allowFontScaling={false} style={styles.valueText}>{props.value}</Text>
      </View>
      <Text allowFontScaling={false} style={styles.descrption}>{props.description}</Text>
    </View>
  )
}

export default Item

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: '100%',
  },
  topContainer: {
    flexDirection: 'row',
  },
  valueText: {
    color: Color.black,
  },
  descrption: {
    fontSize: 10,
  },
})