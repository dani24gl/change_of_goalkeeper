import React, { useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const screen_width = Dimensions.get('window').width;

const MinutesSection = () => {
  const [currentValue, setCurrentValue] = useState('6');
  const pickerHandler = (itemValue) => setCurrentValue(itemValue);

  return (
    <View>
      <Text style={{marginLeft: 10}}>Minutos:</Text>
      <Picker
        selectedValue={currentValue}
        style={{height: 100, width: screen_width * 0.8}}
        onValueChange={pickerHandler}>
        <Picker.Item label="5" value="5" />
        <Picker.Item label="6" value="6" />
      </Picker>
    </View>
  );
}

export default MinutesSection;