import React, { useState } from 'react';
import { View } from 'react-native';
import MinutesSection from './MinutesSection';
import StartStopButton from './StartStopButton';
import CountdownSection from './CountdownSection';

const MainPage = () => {
  const [isStarted, setIsStarted] = useState(false);
  const buttonClicked = () => {
    setIsStarted(!isStarted);
  }

  return (
    <View>
      <MinutesSection isStarted={isStarted} />
      <CountdownSection />
      <StartStopButton isStarted={isStarted} buttonClicked={buttonClicked} />
    </View>
  );
}

export default MainPage;
