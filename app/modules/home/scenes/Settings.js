import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../../styles/styles.js';
import ThemeButton from '../../../components/Button/Button.js';

const Settings = ({ navigation }) => (
  <View style={[styles.container, styles.lightBackground]}>
    <Text style={[styles.textColor]}>This is a Settings page!</Text>
    <ThemeButton onPress={() => navigation.navigate('Auth')} text="Log out"/>
  </View>
);

export default Settings;
