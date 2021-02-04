import { Audio } from 'expo-av';

export async function playSound() {
  console.log('Loading Sound...');
  const { sound } = await Audio.Sound.createAsync(
    require('../assets/audios/cambio_audio.mp3')
  );

  console.log('Playing Sound!');
  await sound.playAsync();
}
