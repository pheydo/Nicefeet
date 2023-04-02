import React from 'react';
import { StatusBar, Platform } from 'react-native';

const CustomStatusBar = ({ backgroundColor, barStyle }) => {
  return (
    <>
      {Platform.OS === 'ios' && (
        <StatusBar barStyle={barStyle || 'dark-content'} backgroundColor={backgroundColor} />
      )}
      {Platform.OS === 'android' && (
        <StatusBar barStyle={barStyle || 'light-content'} backgroundColor={backgroundColor} />
      )}
    </>
  );
};

export default CustomStatusBar;
