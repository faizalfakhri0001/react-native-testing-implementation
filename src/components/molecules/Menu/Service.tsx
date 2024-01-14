import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ServiceIcon } from 'components/atoms'
import serviceMenu from 'data/menu';

type Props = {
  onMenu: (label: string) => void
}

const Service = (props: Props) => {
  return (
    <View style={styles.container}>
      {serviceMenu.map((data, index) => {
        return <ServiceIcon 
          activeOpacity={0.7}
          key={`menu-${index}`}
          label={data.label}
          icon={data.image_uri}
          onPress={() => props.onMenu(data.label)}
        />
      })}
    </View>
  )
}

export default Service

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 12,
    paddingHorizontal: 12,
  },
})