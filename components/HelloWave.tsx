import { Text } from "@tamagui/core";
import { useEffect } from "react";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";

const useWaveAnimation = () => {
  const value = useSharedValue(0);

  useEffect(() => {
    value.value = withRepeat(
      withSequence(
        withTiming(25, { duration: 150 }),
        withTiming(0, { duration: 150 })
      ),
      4 // Run the animation 4 times
    );
  }, [value]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotate: `${value.value}deg` }],
  }));

  return animatedStyle;
};

export function HelloWave() {
  const animatedStyle = useWaveAnimation();

  return (
    <Animated.View style={animatedStyle}>
      <Text fontSize="$7" lineHeight="$8" marginTop="$-1" color="$color">
        👋
      </Text>
    </Animated.View>
  );
}
