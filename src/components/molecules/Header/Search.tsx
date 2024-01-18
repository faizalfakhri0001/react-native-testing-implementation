import React from 'react'
import { NativeModules, Pressable, StyleSheet, View, ViewProps } from 'react-native'
import IconCompoenent from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input } from 'components/atoms'
import Animated, { AnimatedProps } from 'react-native-reanimated';

const {StatusBarManager} = NativeModules;
const StatusBarHeight = StatusBarManager.HEIGHT;

type Props = {} & AnimatedProps<ViewProps>

const Search = (props: Props) => {
  return (
    <Animated.View {...props} style={[styles.container, props.style]}>
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
    </Animated.View>
  )
}

export default Search

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBarHeight,
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