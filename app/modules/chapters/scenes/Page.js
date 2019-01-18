import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../../styles/styles.js';

const Page = ({ navigation }) => {
  const item = navigation.getParam('item', 'Error');

  return(
    <View style={[styles.container, styles.lightBackground]}>
      <Text style={[styles.textColor]}>This is a {item.title} page!</Text>
    </View>
  )
}

export default Page;
