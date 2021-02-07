import { Dimensions, StyleSheet } from "react-native";

const screen_width = Dimensions.get('window').width;

const mainPageStyles = StyleSheet.create({
  container: {
    flex: 0.9,
    width: screen_width * 0.85
  },
  title: {
    alignItems: 'center',
    flex: 0.1,
    marginTop: 50
  },
  titleText: {
    fontSize: 30
  },
  content: {
    flex: 0.8
  },
  footer: {
    flex: 0.1
  }
});

export default mainPageStyles;
