// import React from 'react';
import React, {Component} from 'react';
import { Dimensions, Text, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';

const screen_width = Dimensions.get('window').width;

export default class MainPage extends Component {  
  state = {
    current_value: '6'
  }

  render () {
    return (
      <View>
        <Text>Minutos:</Text>
        <Picker
          selectedValue={this.state.current_value}
          style={{height: 100, width: screen_width * 0.7}}
          onValueChange={(itemValue, _itemIndex) => this.setState({current_value: itemValue})
          }>
          <Picker.Item label="5" value="5" />
          <Picker.Item label="6" value="6" />
        </Picker>
      </View>
    );
  }
}
