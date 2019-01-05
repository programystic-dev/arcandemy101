import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../../styles/styles.js';

const Chapter = () => (
  <View style={[styles.container, styles.lightBackground]}>
    <Text style={[styles.textColor]}>This is a Chapter page!</Text>
  </View>
);

export default Chapter;
