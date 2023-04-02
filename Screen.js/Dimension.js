import { StyleSheet, Platform, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  myComponent: {
    width: Dimensions.get('window').width * 0.8, // Set the width to 80% of the screen width
    height: Platform.OS === 'ios' ? 100 : 80, // Set the height to 100 on iOS and 80 on Android
    backgroundColor: 'blue',
  },
});

export default styles;
