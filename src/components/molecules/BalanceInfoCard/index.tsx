import React, { useMemo } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Color } from 'config'
import Item from './Item'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Decorator } from 'components/atoms';

type Props = {
  coin: number;
  cash: number;
}

const formatNumberWithK = (value: number, type: 'money' | 'coin') => {
  if (value >= 10000) {
    const formattedNumber = new Intl.NumberFormat('en-ID', {
      style: type === 'money' ? 'currency' : undefined,
      currency: type === 'money' ? 'IDR' : undefined,
      notation: 'compact',
      compactDisplay: 'short',
      maximumSignificantDigits: 3,
    }).format(value / 1000);

    return `${formattedNumber}K`
  } else {
    return value.toString();
  }
};

const BalanceInfoCard = (props: Props) => {

  return (
    <View style={styles.container}>
      <Icon name='qrcode-scan' size={28} />
      <Decorator.Separator style={styles.separator}/>
      <Item value={formatNumberWithK(props.cash, 'money')} iconName='wallet-plus-outline' description='Isi Saldo' iconColor={Color.red} />
      <Decorator.Separator style={styles.separator}/>
      <Item value={formatNumberWithK(props.coin, 'coin')} iconName='alpha-s-circle-outline' description='Gratis Koin 25RB' iconColor={Color.yellow}/>
      <Decorator.Separator style={styles.separator}/>
      <Item value='Transfer' iconName='wallet-outline' description='Gratis' iconColor={Color.red}/>
    </View>
  )
}

export default BalanceInfoCard

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: Color.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
    elevation: 5,
    marginHorizontal: 16,
    borderRadius: 8,
    top: -12,
    alignItems: 'center',
  },
  separator: {
    height: 28,
    marginHorizontal: 8,
    backgroundColor: Color.gray,
  },
})