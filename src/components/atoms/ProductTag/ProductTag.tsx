import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Svg, { Image, Polygon, Rect,  } from 'react-native-svg'
import { Color } from 'config'
import { Images } from 'assets'
import Icon from 'react-native-vector-icons/FontAwesome6';

type Props = {
  type: 'mall' | 'discount'
}

const ProductTag = (props: Props) => {

  if (props.type === 'discount') {
    return (
      <View style={styles.discountContainer}>
        <Icon name='bolt-lightning' size={16} style={styles.iconStyle} color={Color.orange} />
        <Text allowFontScaling={false} style={styles.discountText}>-20%</Text>
      </View>
    )
  }

  if (props.type === 'mall') {
    return (
      <View>
        <Svg height="100%" width="100%" viewBox="0 0 100 50">
          <Rect
            x="0"
            y="0"
            width="80"
            height="40"
            strokeWidth="2"
            fill={Color.red}
          />
          <Image
            xlinkHref={Images.mall_text}
            x={10}
            y={10}
          />
          <Polygon points="0 40, 10 40, 10 50" fill={Color.darkRed}/>
        </Svg>
      </View>
    )
  }
  return null
}

export default ProductTag

const styles = StyleSheet.create({
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.lightYellow,
    height: 16,
    paddingRight: 4,
  },
  discountText: {
    color: Color.orange,
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 16,
  },
  iconStyle: {
    left: -4,
  },
})