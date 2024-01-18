import { Color } from 'config'
import React, { useRef } from 'react'
import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Video, { ReactVideoSource, VideoRef } from 'react-native-video'

type Props = {
  source: ReactVideoSource;
  viewer: number;
  title: string;
  style?: StyleProp<ViewStyle>
  poster?: string;
  paused?: boolean;
}

const LiveThumbnail: React.FC<Props> = (props) => {
  const videoRef = useRef<VideoRef>(null);
  
  return (
    <View style={[styles.container, props.style]}>
      <Video
        ref={videoRef}
        source={props.source}
        paused={props.paused}
        posterResizeMode='cover'
        poster={props.poster}
        resizeMode="cover"
        style={styles.backgroundVideo} 
      />

      <View style={styles.liveViewContainer}>
        <View style={styles.liveContainer}>
          <Text allowFontScaling={false} style={styles.liveText}>{'\u2B24'}</Text>
          <Text allowFontScaling={false} style={styles.liveInnerText}>LIVE</Text>
        </View>
        <View style={styles.viewContainer}>
          <Icon name='eye-outline' color={Color.white}/>
          <Text allowFontScaling={false} style={styles.count}>{props.viewer}</Text>
        </View>
      </View>

      <LinearGradient
        colors={['transparent', '#00000060']}
        start={{ x: 0, y: 0 }} end={{ x: 0, y: 0.4 }} 
        style={styles.titleContainer}>
        <Text allowFontScaling={false} style={styles.title} numberOfLines={2}>{props.title}</Text>
      </LinearGradient >
    </View>
  )
}

export default LiveThumbnail

const styles = StyleSheet.create({
  backgroundVideo: {
    height: '100%',
    width: '100%',
  },
  container: {
    height: 230,
    width: 135,
  },
  liveViewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    backgroundColor: '#00000070',
    top: 4,
    left: 4,
    borderRadius: 4,
    overflow: 'hidden',
  },
  liveContainer: {
    flexDirection: 'row',
    backgroundColor: Color.orange,
    height: '100%',
    columnGap: 4,
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  liveText: {
    fontSize: 8,
    color: Color.white,
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  liveInnerText: {
    fontSize: 12,
    color: Color.white,
  },
  viewContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%',
    paddingHorizontal: 4,
    columnGap: 4,
  },
  count: {
    fontSize: 12,
    color: Color.white,
  },
  titleContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    paddingHorizontal: 4,
  },
  title: {
    fontSize: 16,
    color: Color.white,
    marginBottom: 32,
  },
})