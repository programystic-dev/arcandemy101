import React from 'react';
import { Image, TextInput, Text, View } from 'react-native';
import styles from '../../../styles/styles.js';
import * as constants from '../../../styles/constants.js';
import ThemeButton from '../../../components/Button/Button.js';

const Login = () => (
  <View style={[styles.container, styles.darkBackground]}>
    <Image source={require('../../../assets/img/logo.png')} style={{width: 50, height: 50, marginBottom: constants.grid.md}} />
    <TextInput style={styles.input} value="Email" />
    <TextInput style={[styles.input, {marginBottom: constants.grid.xl}]} value="Password" />
    <ThemeButton onPress={() => console.log("Logged!")} text="Login" style={{marginBottom: constants.grid.sm}} />
    <ThemeButton onPress={() => console.log("Logged with FB!")} theme="facebook" text="Facebook" style={{marginBottom: constants.grid.sm}}/>
    <Text style={styles.lightTextColor}>Don't have an account?</Text>
    <Text style={[styles.lightTextColor, styles.underlineText, styles.boldText, {lineHeight: 30}]}>Sign up here!</Text>
  </View>
);

export default Login;
