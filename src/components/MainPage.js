import React, { useState } from 'react';
import { View, Text } from 'react-native';

// Services
import { playSound } from '../services/AudioService.js';

// Components
import TotalTimeSection from './TotalTimeSection';
import TimerTimeSection from './TimerTimeSection';
import StartStopButton from './StartStopButton';
import CountdownSection from './CountdownSection';

// Styles
import MainPageStyles from '../styles/MainPageStyles';

const MainPage = () => {
  const [isStarted, setIsStarted] = useState(false);
  const [countdownKey, setCountdownKey] = useState(0);
  const [duration, setDuration] = useState(6 * 60);
  const [totalTime, setTotalTime] = useState(60 * 60);
  const [cycle, setCycle] = useState(1);

  const buttonClicked = () => {
    setIsStarted(!isStarted);
    if (isStarted) {
      refreshCountdown();
    }
  }

  const changeDuration = (newDuration) => {
    setDuration(newDuration * 60);
    refreshCountdown();
  }

  const changeTotalTime = (newTotal) => {
    setTotalTime(newTotal * 60);
    refreshCountdown();
  }

  const refreshCountdown = () => {
    setCycle(1);
    setCountdownKey(countdownKey + 1);
  }

  const playAudio = () => {
    playSound();
  }

  return (
    <View style={MainPageStyles.container}>
      
      <View style={MainPageStyles.title}><Text style={MainPageStyles.titleText}>Cambio de Golero</Text></View>

      <View style={MainPageStyles.content}>
        <TotalTimeSection isStarted={isStarted} changeTotalTime={changeTotalTime}/>
        <TimerTimeSection isStarted={isStarted} changeDuration={changeDuration}/>
        <CountdownSection isStarted={isStarted} duration={duration} countdownKey={countdownKey}
          playAudio={playAudio} totalTime={totalTime} cycle={cycle} setCycle={setCycle}/>
      </View>

      <View style={MainPageStyles.footer}>
        <StartStopButton isStarted={isStarted} buttonClicked={buttonClicked} />
      </View>
    </View>
  );
}

export default MainPage;
