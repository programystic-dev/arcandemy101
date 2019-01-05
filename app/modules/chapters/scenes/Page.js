import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../../styles/styles.js';

const Page = () => (
  <View style={[styles.container, styles.lightBackground]}>
    <Text style={[styles.textColor]}>This is a Page page!</Text>
  </View>
);

export default Page;
