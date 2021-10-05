import React from 'react'
import type {ReactNode, FC, ComponentProps} from 'react'
import { View, Animated, StyleSheet } from 'react-native'
import type { GestureResponderEvent, PanResponderGestureState } from 'react-native';
import type { LayoutChangeEvent } from 'react-native';
import {useLayout, usePanResponder, useAnimatedValue, useTransformStyle} from '../hooks'

type Event = GestureResponderEvent
type State = PanResponderGestureState

type SwipeComponent = (setLayout: (e: LayoutChangeEvent) => void) => ReactNode

export type LeftSwipeProps = ComponentProps<typeof View> & {
  left?: SwipeComponent
}

export const LeftSwipe: FC<LeftSwipeProps> = ({ left, children, style, ...viewProps}) => {

  const [{width: leftWidth}, setLayout] = useLayout();
  const translateX = useAnimatedValue(0);
  const transformStyle = useTransformStyle({
    translateX: translateX.interpolate({
      inputRange: [0, leftWidth],
      outputRange: [-leftWidth, 0]
    })
  }, [leftWidth])

  const panResponder = usePanResponder({})

  return (
    <Animated.View style={[transformStyle, styles.animViewStyle, style]} {...viewProps}>
      {left && left(setLayout)}
      <Animated.View style={[{width: '100%'}]} {...panResponder.panHandlers}>
        {children}  
      </Animated.View>
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  animViewStyle: {flexDirection: 'row', width: '100%'}
})
