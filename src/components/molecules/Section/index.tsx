import { Pressable, StyleProp, StyleSheet, Text, View, ViewProps, ViewStyle } from 'react-native'
import React from 'react'
import { Color } from 'config'
import FeatherIcon from 'react-native-vector-icons/Feather';

type PropsTitle = {
  title?: string
  titleComponent?: never;
  onPressAll?: () => void;
  hideAllButton?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

type PropsComponent = {
  title?: never;
  titleComponent?: () => React.ReactNode;
  onPressAll?: () => void;
  hideAllButton?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

type Props = (PropsTitle | PropsComponent) & ViewProps

const Section: React.FC<Props> = props => {
  return (
    <View {...props} style={[styles.container, props.style]}>
      <View style={styles.header}>
        {props.title != undefined && props.title != null ?
          <Text allowFontScaling={false} style={styles.title}>
            {props.title ?? ''}
          </Text>
        : null}

        {typeof props.titleComponent === 'function' ?
          props.titleComponent()
        : null}

        {props.hideAllButton ? null :
          <Pressable style={styles.allButton} onPress={props.onPressAll}>
            <Text allowFontScaling={false} style={styles.allText}>Lihat Semua</Text>
            <FeatherIcon name='chevron-right' size={24} />
          </Pressable>
        }
      </View>
      <View style={[styles.contentContainer, props.contentContainerStyle]}>
        {props.children}
      </View>
    </View>
  )
}

export default Section

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingTop: 16,
    paddingBottom: 8,
    backgroundColor: Color.white,
  },
  contentContainer: {
    marginTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    textTransform: 'uppercase',
    color: Color.orange,
  },
  allButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  allText: {
    fontSize: 12,
    color: 'gray',
  },
})