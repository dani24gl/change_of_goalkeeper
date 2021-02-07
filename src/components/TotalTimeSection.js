import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import GeneralStyles from '../styles/GeneralStyles';

const TotalTimeSection = (props) => {
  const [currentValue, setCurrentValue] = useState('60');

  const pickerHandler = (itemValue) => {
    setCurrentValue(itemValue);
    props.changeTotalTime(itemValue);
  }

  return (
    <View>
      <Text style={GeneralStyles.label}>Tiempo total:</Text>
      <Picker
        selectedValue={currentValue}
        onValueChange={pickerHandler}
        enabled={!props.isStarted}
        itemStyle={{height: 150}}
        >
        <Picker.Item label='30 minutes' value='30' />
        <Picker.Item label='45 minutes' value='45' />
        <Picker.Item label='60 minutes' value='60' />
      </Picker>
    </View>
  );
}

export default TotalTimeSection;
