import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import GeneralStyles from '../styles/GeneralStyles';

const TimerTimeSection = (props) => {
  const [currentValue, setCurrentValue] = useState('6');
  const pickerHandler = (itemValue) => {
    setCurrentValue(itemValue);
    props.changeDuration(itemValue);
  }

  return (
    <View style={GeneralStyles.topPaddingSmall}>
      <Text style={GeneralStyles.label}>Cambio cada:</Text>
      <Picker
        selectedValue={currentValue}
        onValueChange={pickerHandler}
        enabled={!props.isStarted}
        itemStyle={{height: 150}}
        >
        <Picker.Item label='5 minutos' value='5' />
        <Picker.Item label='6 minutos' value='6' />
      </Picker>
    </View>
  );
}

export default TimerTimeSection;
