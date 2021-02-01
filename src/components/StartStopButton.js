import React from 'react';
import { Button, View } from 'react-native';

const StartStopButton = (props) => {
  let title = props.isStarted ? 'Detener' : 'Comenzar';
  let buttonColor = props.isStarted ? 'gray' : '';

  return (
    <View>
      <Button title={title} onPress={props.buttonClicked} color={buttonColor} />
    </View>
  );
}

export default StartStopButton;
