import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../../../styles/styles.js';
import ThemeButton from '../../../components/Button/Button.js';

const Home = () => (
  <View style={[styles.container, styles.lightBackground]}>
    <Image source={ require('../../../assets/img/cauldron.png') } style={[styles.bottomLg, styles.image]}/>
    <Text style={[styles.textColor, styles.text16, styles.bottomSm]}>Continue reading...</Text>
    <ThemeButton onPress={() => console.log("Taped!")} text="Altar"/>
  </View>
);

export default Home;
