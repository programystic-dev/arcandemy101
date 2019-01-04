import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../../styles/styles.js';
import ThemeButton from '../../../components/Button/Button.js';

const Home = () => (
  <View style={[styles.container, styles.lightBackground]}>
    <Text style={[styles.textColor]}>Hello Witches!</Text>
    <ThemeButton onPress={() => console.log("Taped!")} text="Magic"/>
  </View>
);

export default Home;
