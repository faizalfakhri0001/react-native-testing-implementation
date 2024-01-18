import React, { useCallback } from 'react'
import { Platform, Pressable, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { BalanceInfoCard, Banner, Menu, Section } from 'components/molecules'
import { Color } from 'config';
import { LiveThumbnail } from 'components/atoms';
import { FlashList } from '@shopify/flash-list';
import Flashsale from 'components/molecules/Flashsale';
import { Images } from 'assets';

StatusBar.setBarStyle("light-content");
if (Platform.OS === "android") {
  StatusBar.setBackgroundColor("rgba(0,0,0,0)");
  StatusBar.setTranslucent(true);
}

const gratis_ongkir = [
  Images.gratis_ongkir_complete,
  Images.gratis_ongkir_extra_cashback,
  Images.gratis_ongkir_extra_instan,
];

type Props = {}

const Recommendation = (props: Props) => {

  const renderLiveItem = useCallback(({item, index}: {item: any; index: number}) => {
    return (
      <LiveThumbnail
        viewer={299}
        style={{
          marginRight: 8,
        }}
        paused={index > 0}
        title='Diskon besar jas hujan'
        poster={'https://images.unsplash.com/photo-1705320678447-a7a76063d888?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
        source={{uri: 'https://cdn.flowplayer.com/a30bd6bc-f98b-47bc-abf5-97633d4faea0/hls/de3f6ca7-2db3-4689-8160-0f574a5996ad/playlist.m3u8'}}
      />
    )
  }, []);

  const renderFlashSaleProduct = useCallback(({item, index}: {item: any; index: number}) => {
    const random_gratis_ongkir = Math.floor(Math.random() * gratis_ongkir.length)
    return <Flashsale.Product
              style={{
                marginRight: 8,
              }}
              total={1000}
              sold={534}
              extraTagSource={gratis_ongkir[random_gratis_ongkir]}
              isPopular={index === 0}
              isLimited={index === 2}
            />;
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}} contentContainerStyle={{paddingBottom: 20}}>
        <Banner.Home />
        <View style={styles.topContainer}>
          <BalanceInfoCard cash={25000} coin={1500} />
          <Menu.Service onMenu={label => console.log(label)}/>
          <Banner.HomeBottom />
        </View>

        <Section
          title='Shopee Live'
          style={styles.liveSection}
        >
          <FlashList
            data={[1,2,3,4]}
            horizontal
            contentContainerStyle={styles.liveListContaienr}
            estimatedItemSize={250}
            renderItem={renderLiveItem}
          />
        </Section>

        <Section
          titleComponent={() => <Flashsale.Countdown />}
          contentContainerStyle={styles.flashsaleSection}
        >
          <FlashList
            data={[1,2,3,4]}
            horizontal
            contentContainerStyle={styles.flashsaleProductListContaienr}
            estimatedItemSize={300}
            renderItem={renderFlashSaleProduct}
          />
        </Section>

        <Section
          title='Shopee Video'
        >
        </Section>

        <Section
          title='Rekomendasi'
          hideAllButton={true}
        >
        </Section>
      </ScrollView>
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
  liveSection: {
    height: 300,
  },
  liveListContaienr: {
    paddingHorizontal: 8,
  },
  flashsaleProductListContaienr: {
    paddingHorizontal: 8,
  },
  flashsaleSection: {
    flexDirection: 'row',
  },
})