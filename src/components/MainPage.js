import React, { useState } from 'react';
import { Text, View } from 'react-native';
import MinutesSection from './MinutesSection';
import StartStopButton from './StartStopButton';
import CountdownSection from './CountdownSection';

const MainPage = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [countdownKey, setCountdownKey] = useState(0);
  const [duration, setDuration] = useState(6 * 60);

  const buttonClicked = () => {
    setIsStarted(!isStarted);
    if (isStarted) {
      refreshCountdown();
    }
  }

  const changeDuration = (newDuration) => {
    setDuration(newDuration);
    refreshCountdown();
  }

  const refreshCountdown = () => setCountdownKey(countdownKey + 1);

  return (
    <View>
      <MinutesSection isStarted={isStarted} changeDuration={changeDuration}/>
      <CountdownSection isStarted={isStarted} duration={duration} countdownKey={countdownKey} />
      <StartStopButton isStarted={isStarted} buttonClicked={buttonClicked} />
    </View>
  );
}

export default MainPage;
