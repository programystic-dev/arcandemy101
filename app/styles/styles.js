import React from 'react';
import { StyleSheet } from 'react-native';
import * as constants from './constants.js';

export default generalStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightBackground: {
    backgroundColor: constants.colors.tertiary,
  },
  textColor: {
    color: constants.colors.primary,
  },
});
