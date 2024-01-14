import React, { useEffect } from 'react'
import { NativeModules, Platform, Pressable, StatusBar, StyleSheet, Text, View } from 'react-native'
import IconCompoenent from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input } from 'components/atoms'

const {StatusBarManager} = NativeModules;
const StatusBarHeight = StatusBarManager.HEIGHT;

type Props = {}

const Search = (props: Props) => {
  return (
    <View style={styles.container}>
      <Input.Icon
        containerStyle={styles.inputContainer}
        leftIcon='magnify'
        borderColor='transparent'
        rightIcon='camera-outline'
        placeholder='Cari produk disini'
      />

      <Pressable>
        <IconCompoenent name='cart-outline' size={28} color={'white'}/>
      </Pressable>
      <Pressable>
        <IconCompoenent name='chat-processing-outline' size={28} color={'white'}/>
      </Pressable>
    </View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBarHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    columnGap: 12,
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
    position: 'absolute',
  },
  inputContainer: {
    flex: 1,
    height: 42,
    backgroundColor: 'white'
  },
})