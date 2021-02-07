import React, { useState } from 'react';
import { Animated, Text, View } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import CountdownStyles from '../styles/CountdownStyles';

const displayTime = (remainingTime) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;
  const secondsWith2Digits = `0${seconds}`.slice(-2)

  return `${minutes}:${secondsWith2Digits}`;
}

const restartTimer = (props) => {
  return () => {
    const inProgress = props.cycle * props.duration < props.totalTime;
    console.log(props.cycle, ' * ', props.duration, ' < ', props.totalTime);

    if (props.isStarted && inProgress) {
      props.setCycle(props.cycle + 1);
      props.playAudio();
    }

    return [inProgress, 0];
  }
}

const CountdownSection = (props) => {
  return (
    <View style={CountdownStyles.container}>
      <CountdownCircleTimer
        isPlaying={props.isStarted}
        key={props.countdownKey}
        duration={props.duration}
        onComplete={restartTimer(props)}
        colors={[
          ['#004777', 0.4],
          ['#F7B801', 0.4],
          ['#A30000', 0.2]
        ]}
      >
        {({ remainingTime, animatedColor }) => (
          <Animated.Text style={{ color: animatedColor }}>
            <Text style={{ fontSize: 35 }}>{displayTime(remainingTime)}</Text>
          </Animated.Text>
        )}
      </CountdownCircleTimer>
    </View>
  )
}

export default CountdownSection;
