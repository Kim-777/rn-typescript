import { Animated } from "react-native";

export const imterpolate = (
  animValue: Animated.Value,
  outputRange: number[] | string[],
  inputRange: number[] = [0, 1]
): Animated.AnimatedInterpolation => {
  return animValue.interpolate({inputRange, outputRange})
}