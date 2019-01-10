import React from 'react';
import { Text, View } from 'react-native';
import styles from '../../../styles/styles.js';
import ThemeButton from '../../../components/Button/Button.js';
import store from '../../../redux/store.js';

const Home = () => (
  <View style={[styles.container, styles.lightBackground]}>
    <Text style={[styles.textColor]}>Hello Witches!</Text>
    <ThemeButton onPress={() => console.log("Taped!")} text="Magic"/>
    <Text>Is user logged in: {JSON.stringify(store.getState().isLoggedIn)}</Text>
  </View>
);

export default Home;
