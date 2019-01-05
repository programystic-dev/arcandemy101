import React from 'react';
import { StyleSheet } from 'react-native';
import * as constants from '../../styles/constants.js';

export default generalStyles = StyleSheet.create({
  input: {
    height: 40,
    width:250,
    fontSize: 14,
    borderBottomWidth: 1,
  },
  inputBlurred: {
    color: constants.colors.primary,
    borderBottomColor: constants.colors.primary,
  },
  inputFocused: {
    color: '#fff',
    borderBottomColor: '#fff',
  },
});
