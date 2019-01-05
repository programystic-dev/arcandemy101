import React from 'react';
import { Text, View } from 'react-native';
import ThemeButton from '../../../components/Button/Button.js';
import styles from '../../../styles/styles.js';

const Chapter = ({ navigation }) => (
  <View style={[styles.container, styles.lightBackground]}>
    <Text style={[styles.textColor]}>This is a Chapter page!</Text>
    <ThemeButton onPress={() => navigation.navigate('Page')} text="Page" />
  </View>
);

export default Chapter;
