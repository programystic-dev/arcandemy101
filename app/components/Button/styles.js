import React from 'react';
import { StyleSheet } from 'react-native';
import * as constants from '../../styles/constants.js';

export default generalStyles = StyleSheet.create({
  basic: {
    width: 250,
    paddingTop: constants.grid.sm,
    paddingBottom: constants.grid.sm,
    borderRadius: 100,
  },
  basicText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center',
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
