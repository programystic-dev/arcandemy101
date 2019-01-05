import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../../../styles/styles.js';
import * as constants from '../../../styles/constants.js';
import ThemeButton from '../../../components/Button/Button.js';
import ThemeInput from '../../../components/TextInput/TextInput.js';
import ThemeLink from '../../../components/Link/Link.js';

const Login = ({navigation}) => (
  <View style={[styles.container, styles.darkBackground]}>
    <Image source={require('../../../assets/img/logo.png')} style={{width: 50, height: 50, marginBottom: constants.grid.md}} />

    <ThemeInput value="Email" style={{marginBottom: constants.grid.sm}} />
    <ThemeInput value="Password" style={{marginBottom: constants.grid.xl}} />

    <ThemeButton onPress={() => navigation.navigate('App')} text="Login" style={{marginBottom: constants.grid.sm}} />
    <ThemeButton onPress={() => navigation.navigate('App')} theme="facebook" text="Login with Facebook" style={{marginBottom: constants.grid.sm}}/>

    <Text style={styles.lightTextColor}>Don't have an account?</Text>
    <ThemeLink onPress={() => navigation.navigate('Signup')} style={[styles.lightTextColor, styles.underlineText, styles.boldText, {lineHeight: 30}]} />
  </View>
);

export default Login;
