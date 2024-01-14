import React, { useCallback, useImperativeHandle, useRef, useState } from 'react'
import { StyleProp, StyleSheet, TextInput, TextInputProps, View, ViewStyle } from 'react-native'
import IconCompoenent from 'react-native-vector-icons/MaterialCommunityIcons';

type Props = {
  leftIcon?: string;
  leftIconSize?: number;
  onPressLeftIcon?: () => void;
  rightIcon?: string;
  onPressRightIcon?: () => void;
  containerStyle?: StyleProp<ViewStyle>,
  borderColor?: string,
} & TextInputProps

export type Ref = {
  focus: () => void
  showDanger: (value: boolean) => void
  getValue: () => string
  setValue: (value: string) => void;
}

const Icon = React.forwardRef<Ref, Props>((props, ref) => {
  const inputRef = useRef<TextInput>(null)
  const value = useRef<string>('');
  const [isEmpty, setIsEmpty] = useState<boolean>(true);
  const [isDanger, setIsDanger] = useState<boolean>(false);

  const onChangeText = useCallback((text: string) => {
    if (props.onChangeText) {
      props.onChangeText(text)
    }

    value.current = text;
    if (text.length > 0) {
      setIsEmpty(false);
    } else if (text.length === 0) {
      setIsDanger(false);
      setIsEmpty(true);
    }
  }, []);

  useImperativeHandle(ref, () => {
    return {
      focus() {
        inputRef.current?.focus()
      },
      showDanger: (value: boolean) => {
        setIsDanger(value)
      },
      getValue: () => {
        return value.current;
      },
      setValue: (text: string) => {
        value.current = text;
        inputRef.current?.setNativeProps({text});
        setIsEmpty(false)
      },
    }
  }, [setIsDanger])

  return (
    <View style={[styles.container, {borderColor: props.borderColor ? props.borderColor : isDanger ? "red" : 'gray'}, props.containerStyle]}>
      {typeof props.leftIcon === 'string' ?
        <IconCompoenent name={props.leftIcon} size={props.leftIconSize ?? 20} color={isDanger ? "red" : isEmpty ? 'gray' : 'black'} /> : null
      }
      <TextInput
        {...props}
        ref={inputRef}
        onChangeText={onChangeText}
        placeholderTextColor={'gray'}
        style={[props.style, styles.input]}
        autoCorrect={false}
      />
      {typeof props.rightIcon === 'string' ?
        <IconCompoenent name={props.rightIcon} size={20} onPress={props.onPressRightIcon} color={'gray'} /> : null
      }
    </View>
  )
})

export default Icon

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1.5,
    paddingHorizontal: 8,
    borderRadius: 4,
  },
  input: {
    flex: 1,
    marginHorizontal: 4,
    color: 'black',
  }
})