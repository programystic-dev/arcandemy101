import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import generalStyles from '../../../styles/styles.js';
import ThemeButton from '../../../components/Button/Button.js';

const Home = () => (
  <View style={[generalStyles.container, generalStyles.lightBackground]}>
    <Text style={[generalStyles.textColor]}>Hello Witches!</Text>
    <ThemeButton onPress={() => console.log("Taped!")} text="Magic"/>
  </View>
);

export default Home;
