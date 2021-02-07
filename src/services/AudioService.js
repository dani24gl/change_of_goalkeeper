import { Audio } from 'expo-av';

let firstTime = true;

const initializeAudioSettings = () => {
  Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
    staysActiveInBackground: true,
    interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DUCK_OTHERS,
    playsInSilentModeIOS: true,
    shouldDuckAndroid: true,
    interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
    playThroughEarpieceAndroid: false
  });
}

export async function playSound() {
  if (firstTime) {
    initializeAudioSettings();
    firstTime = false;
  }
    

  const { sound } = await Audio.Sound.createAsync(
    require('../assets/audios/notification_audio.m4a')
  );

  await sound.playAsync();
}
