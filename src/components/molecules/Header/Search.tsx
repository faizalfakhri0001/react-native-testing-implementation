import React from 'react'
import { NativeModules, Pressable, StyleProp, StyleSheet, TextStyle, View, ViewProps, ViewStyle } from 'react-native'
import IconComponent from 'react-native-vector-icons/MaterialCommunityIcons';
import { Input } from 'components/atoms'
import Animated, { AnimatedProps, AnimatedStyle } from 'react-native-reanimated';

const {StatusBarManager} = NativeModules;
const StatusBarHeight = StatusBarManager.HEIGHT;

type Props = {
  iconStyle: StyleProp<AnimatedStyle<StyleProp<TextStyle>>>;
  inputStyle?: StyleProp<ViewStyle>;
} & AnimatedProps<ViewProps>

const AnimatedIcon = Animated.createAnimatedComponent(IconComponent);
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Search = (props: Props) => {
  return (
    <Animated.View {...props} style={[styles.container, props.style]}>
      <Input.Icon
        containerStyle={[styles.inputContainer, props.inputStyle]}
        leftIcon='magnify'
        borderColor='transparent'
        rightIcon='camera-outline'
        placeholder='Cari produk disini'
      />

      <AnimatedPressable>
        <AnimatedIcon name='cart-outline' size={28} style={[props.iconStyle, {backgroundColor: 'transparent'}]} />
      </AnimatedPressable>
      <AnimatedPressable>
        <AnimatedIcon name='chat-processing-outline' size={28} style={[props.iconStyle, {backgroundColor: 'transparent'}]} />
      </AnimatedPressable>
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
  },
})