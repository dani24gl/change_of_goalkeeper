// import React from 'react';
import React, {Component} from 'react';
import { View } from 'react-native';
import MinutesSection from './MinutesSection';
import StartStopButton from './StartStopButton';
export default class MainPage extends Component {  
  render () {
    return (
      <View>
        <MinutesSection />
        <StartStopButton />
      </View>
    );
  }
}
