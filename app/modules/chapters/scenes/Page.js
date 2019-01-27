import React from 'react';
import { Image, Text, View } from 'react-native';
import ThemeButton from '../../../components/Button/Button.js';
import styles from '../../../styles/styles.js';
import { grid } from '../../../styles/constants.js';
import images from '../../../assets/img/images.js';

const Page = ({ navigation }) => {
  const item = navigation.getParam('item', 'Error');

  return(
    <View style={[styles.container, styles.lightBackground]}>
      { images[item.pageImg] != null &&
        <Image source={images[item.pageImg]} style={[styles.bottomLg, styles.image]}/>
      }
      <Text style={[styles.textColor, styles.header1]}>{item.title}</Text>
      <Text style={[styles.textColor, styles.text16, {padding: grid.lg, textAlign: 'center'}]}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
      nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
      culpa qui officia deserunt mollit anim id est laborum.
      </Text>
      <ThemeButton onPress={() => console.log("Taped!")} text="Next: Candles" />
    </View>
  )
}

export default Page;
