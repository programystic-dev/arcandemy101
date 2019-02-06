import React from 'react';
import { StyleSheet } from 'react-native';
import * as constants from '../../../../styles/constants.js';

export default generalStyles = StyleSheet.create({
  tile: {
    width: 250,
    paddingTop: constants.grid.md,
    paddingRight: constants.grid.lg,
    paddingBottom: constants.grid.md,
    paddingLeft: constants.grid.lg,
    borderRadius: 10,
    backgroundColor: constants.colors.primary,
  },
  tileContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  tileIconContainer: {
    width: 20,
    marginRight: constants.grid.lg,
  },
  tileIcon: {
    height: 20,
    width: 20,
  },
  tileTextContainer: {
    flexShrink: 1,
  },
  tileText: {
    color: '#fff',
    fontSize: 18,
  }
});
