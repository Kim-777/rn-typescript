import { useState, useEffect } from "react";
import { Animated } from "react-native";


export const useMonitorAnimatedValue = (animValue: Animated.Value) => {
  const [realAnimatedValue, setRealAnimatedValue] = useState<number>(0)

  useEffect(() => {
    const id = animValue.addListener((state: {value: number}) => {
      setRealAnimatedValue(state.value)
    })
    return () => animValue.removeListener(id)
  }, [])

  return realAnimatedValue
}