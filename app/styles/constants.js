import { StyleSheet, Dimensions } from 'react-native'

export const dimensions = {
  fullHeight: Dimensions.get('window').height,
  fullWidth: Dimensions.get('window').width,
};

export const colors  = {
  primary: '#492F54',
  secondary: '#7F5D91',
  tertiary: '#EDE1F4',
  facebook: '#3b5998',
};

export const grid = {
  xs: 10,
  sm: 15,
  md: 20,
  lg: 30,
  xl: 40,
};

export const fonts = {
  xs: 16,
  sm: 18,
  md: 20,
  lg: 24,
  xl: 28,
};
