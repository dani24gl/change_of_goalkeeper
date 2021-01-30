import React, { useState } from 'react';
import { Button, View } from 'react-native';

const StartStopButton = () => {
  const [isStarted, setIsStarted] = useState(false);
  let title = isStarted ? 'Detener' : 'Comenzar';

  const buttonHandler = () => {
    setIsStarted(!isStarted);
  }

  return (
    <View>
      <Button title={title} onPress={buttonHandler} />
    </View>
  );
}

export default StartStopButton;
