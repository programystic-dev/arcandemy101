import React from 'react';
import { StyleSheet } from 'react-native';
import * as constants from './constants.js';

export default generalStyles = StyleSheet.create({
  //Containers
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightBackground: {
    backgroundColor: constants.colors.tertiary,
  },
  darkBackground: {
    backgroundColor: constants.colors.secondary,
  },
  //Text
  textColor: {
    color: constants.colors.primary,
    textDecorationColor: constants.colors.primary,
  },
  lightTextColor: {
    color: '#fff',
    opacity: 0.9,
    textDecorationColor: "#fff",
  },
  boldText: {
    fontWeight: '600',
  },
  underlineText: {
    textDecorationLine: 'underline',
    textDecorationStyle: "solid",
  },
  errorMessage: {
    width: 300,
    color: '#fff',
    textAlign: 'center',
    opacity: 0.9,
    marginBottom: constants.grid.lg,
  }
});
