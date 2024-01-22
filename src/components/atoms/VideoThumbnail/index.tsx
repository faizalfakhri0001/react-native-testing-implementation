import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { useRef } from 'react'
import Video, { ReactVideoSource, VideoRef } from 'react-native-video';
import LinearGradient from 'react-native-linear-gradient';
import { Color } from 'config';

type Props = {
  source: ReactVideoSource;
  viewer: number;
  title: string;
  style?: StyleProp<ViewStyle>
  poster?: string;
  paused?: boolean;
}

const VideoThumbnail = (props: Props) => {
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
        playInBackground={true}
        disableFocus={true}
      />

      <LinearGradient
        colors={['#00000070', 'transparent']}
        start={{ x: 0, y: 0.2 }} end={{ x: 0, y: 1 }} 
        style={styles.topGradient}>
        <Text allowFontScaling={false} numberOfLines={2} style={styles.viewer}>{props.viewer}RB</Text>
      </LinearGradient >

      <LinearGradient
        colors={['transparent', '#00000070']}
        start={{ x: 0, y: 0 }} end={{ x: 0, y: 0.4 }} 
        style={styles.bottomGradient}>
        <Text allowFontScaling={false} numberOfLines={2} style={styles.viewer}>{props.title}</Text>
      </LinearGradient >
    </View>
  )
}

export default VideoThumbnail

const styles = StyleSheet.create({
	backgroundVideo: {
    height: '100%',
    width: '100%',
  },
  container: {
    height: 280,
    width: 150,
  },
  topGradient: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    paddingHorizontal: 4,
    paddingVertical: 4,
  },
  viewer: {
    color: Color.white,
    fontWeight: '600'
  },
  bottomGradient: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    paddingHorizontal: 4,
    paddingVertical: 4,
  }
})