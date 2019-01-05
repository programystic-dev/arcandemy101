import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../../../styles/styles.js';
import * as constants from '../../../styles/constants.js';
import ThemeButton from '../../../components/Button/Button.js';
import ThemeInput from '../../../components/TextInput/TextInput.js';

const Signup = ({navigation}) => (
  <View style={[styles.container, styles.darkBackground]}>
    <Image source={require('../../../assets/img/logo.png')} style={{width: 50, height: 50, marginBottom: constants.grid.md}} />

    <ThemeInput value="Email" style={{marginBottom: constants.grid.sm}} />
    <ThemeInput value="Password" style={{marginBottom: constants.grid.xl}} />

    <ThemeButton onPress={() => navigation.navigate('App')} text="Sign up" style={{marginBottom: constants.grid.sm}} />
    <ThemeButton onPress={() => navigation.navigate('App')} theme="facebook" text="Sign up with Facebook" style={{marginBottom: constants.grid.sm}}/>
  </View>
);

export default Signup;
