import React from 'react';
import { Animated, Text, View } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

const children = (remainingTime) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  const secondsWith2Digits = `0${seconds}`.slice(-2)

  return `${minutes}:${secondsWith2Digits}`;
}

const CountdownSection = () => (
  <View style={{ flex: 0.7, justifyContent: "center", alignItems: "center" }}>
    <CountdownCircleTimer
      isPlaying
      duration={60 * 50}
      colors={[
        ['#004777', 0.4],
        ['#F7B801', 0.4],
        ['#A30000', 0.2]
      ]}
    >
      {({ remainingTime, animatedColor }) => (
        <Animated.Text style={{ color: animatedColor }}>
          <Text>{children(remainingTime)}</Text>
        </Animated.Text>
      )}
    </CountdownCircleTimer>
  </View>
)

export default CountdownSection;
