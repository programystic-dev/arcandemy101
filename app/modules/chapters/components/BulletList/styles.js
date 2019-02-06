import React from 'react';
import { StyleSheet } from 'react-native';
import { colors, fonts, grid } from '../../../../styles/constants.js';

export default styles = StyleSheet.create({
  listContainer: {
    marginTop: grid.sm,
    marginBottom: grid.sm,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  bullet: {
    marginTop: -5,
    marginRight: grid.xs,
    color: colors.secondary,
    fontSize: fonts.lg,
  },
  content: {
    color: colors.primary,
    fontSize: fonts.xs,
    textAlign: 'left',
  }
});
