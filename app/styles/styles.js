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
  //Input
  input: {
    height: 40,
    width:250,
    marginBottom: constants.grid.sm,
    fontSize: 14,
    color: constants.colors.primary,
    borderBottomColor: constants.colors.primary,
    borderBottomWidth: 1,
  }
});
