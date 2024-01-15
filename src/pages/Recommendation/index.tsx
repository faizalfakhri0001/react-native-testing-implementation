import React from 'react'
import { Platform, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { BalanceInfoCard, Banner, Menu } from 'components/molecules'
import { Color } from 'config';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
      <View style={styles.topContainer}>
        <BalanceInfoCard cash={25000} coin={1500} />
        <Menu.Service onMenu={label => console.log(label)}/>
        <Banner.HomeBottom />
      </View>
      <View style={styles.liveContainer}>
        <View>
          <Text>
            Shopee Live
          </Text>
          <Pressable>
            <Text>Lihat Semua</Text>
            <Icon name='chevron-right' />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Recommendation

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    backgroundColor: Color.white
  },
  liveContainer: {
    marginTop: 16,
    backgroundColor: Color.white,
  },
})