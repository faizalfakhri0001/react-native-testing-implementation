import { Platform, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { BalanceInfoCard, Banner, Menu } from 'components/molecules'
import { Color } from 'config';

StatusBar.setBarStyle("light-content");
if (Platform.OS === "android") {
  StatusBar.setBackgroundColor("rgba(0,0,0,0)");
  StatusBar.setTranslucent(true);
}

type Props = {}

const Recommendation = (props: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Banner.Home />
      <BalanceInfoCard cash={25000} coin={1500} />
      <Menu.Service onMenu={label => console.log(label)}/>
    </SafeAreaView>
  )
}

export default Recommendation

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
})