import React from 'react';
import { StyleSheet } from 'react-native';
import { colors, fonts, grid } from '../../../../styles/constants.js';

export default styles = StyleSheet.create({
  listContainer: {
    marginTop: grid.sm,
    marginBottom: grid.sm,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: grid.xs,
  },
  bullet: {
    marginTop: -5,
    marginRight: grid.xs,
    color: colors.secondary,
    fontSize: fonts.lg,
  },
  title: {
    color: colors.primary,
    fontSize: fonts.sm,
    marginBottom: 5,
  },
  content: {
    color: colors.primary,
    paddingLeft: 22,
    fontSize: fonts.xs,
    textAlign: 'left',
  }
});
