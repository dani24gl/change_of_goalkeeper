import React from 'react';
import MainPage from './src/components/MainPage';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import ViewStyles from './src/styles/ViewStyles';

export default function App() {
  return (
    <View style={ViewStyles.container}>
      <MainPage />
      <StatusBar style="auto" />
    </View>
  );
}
