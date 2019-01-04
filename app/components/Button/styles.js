import React from 'react';
import { StyleSheet } from 'react-native';
import * as constants from '../../styles/constants.js';

export default generalStyles = StyleSheet.create({
  basic: {
    width: 250,
    paddingTop: constants.padding.sm,
    paddingBottom: constants.padding.sm,
    borderRadius: 100,
  },
  basicText: {
    textAlign: 'center',
    color: '#fff',
  },
  default: {
    backgroundColor: constants.colors.primary,
  },
  facebook: {
    backgroundColor: constants.colors.facebook,
  },
  disabled: {
    opacity: 0.5,
  },
});
