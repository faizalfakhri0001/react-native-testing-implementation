import { Dimensions, Image, ImageSourcePropType, StyleSheet, Text, View, ViewProps } from 'react-native'
import React from 'react'
import { Color } from 'config'
import { Images } from 'assets';
import * as Progress from 'react-native-progress';
import { ProductTag } from 'components/atoms';

const {width} = Dimensions.get('screen')

type Props = {
  sold: number;
  total: number;
  isPopular?: boolean;
  isLimited?: boolean;
  extraTagSource?: ImageSourcePropType
} & ViewProps

const Product = (props: Props) => {
  return (
    <View {...props} style={[styles.container, props.style]}>
      <Image
        source={Images.product_2}
        style={styles.image_product}
      />
      <Text allowFontScaling={false} style={styles.priceText}>Rp55.000</Text>
      <View style={styles.productTag}>
        <ProductTag type='mall' />
      </View>
      <View style={styles.productDiscount}>
        <ProductTag type='discount' />
      </View>
      {props.extraTagSource ?
        <Image
          source={props.extraTagSource}
          style={styles.extraTag}
          resizeMode='cover'
          resizeMethod='resize'
        />
      : null}
      <View style={styles.barContainer}>
        <Progress.Bar
          progress={props.sold / props.total}
          width={width * 0.32}
          height={12}
          borderRadius={10}
          color={Color.orange}
          borderWidth={0}
          style={{backgroundColor: Color.orange+'50'}} />
        {props.isLimited ?
          <Text allowFontScaling={false} style={styles.limitText}>stok terbatas</Text>
        :
          <Text allowFontScaling={false} style={styles.soldText}>{props.sold} Terjual</Text>
        }
        {props.isPopular ?
          <Image
            source={Images.fire_icon}
            style={styles.fireIcon}
            resizeMode='contain'
          />
        : null}
      </View>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
  container: {
    borderColor: Color.gray,
    borderWidth: 1,
    alignItems: 'center',
    rowGap: 4,
    paddingBottom: 8,
  },
  image_product: {
    height: width * 0.38,
    aspectRatio: 1,
  },
  productTag: {
    position: 'absolute',
    width: 40,
    height: 20,
    left: -4,
    top: 4,
  },
  productDiscount: {
    position: 'absolute',
    height: 20,
    right: 0,
    top: 0,
  },
  priceText: {
    fontSize: 16,
    fontWeight: '700',
    color: Color.orange,
  },
  barContainer: {},
  limitText: {
    position: 'absolute',
    fontSize: 10,
    textAlign: 'center',
    width: width * 0.32,
    color: Color.white,
    fontWeight: '600',
    lineHeight: 12,
    textTransform: 'uppercase',
  },
  soldText: {
    position: 'absolute',
    fontSize: 10,
    textAlign: 'center',
    width: width * 0.32,
    color: Color.white,
    fontWeight: '600',
    lineHeight: 12,
  },
  fireIcon: {
    position: 'absolute',
    width: 15,
    aspectRatio: 1,
    top:-22,
    left: 2,
  },
  extraTag: {
    position: 'absolute',
    width: width * 0.38,
    height: width * 0.38,
  },
})