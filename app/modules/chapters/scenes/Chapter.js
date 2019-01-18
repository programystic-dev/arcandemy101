import React from 'react';
import { FlatList, Text, View } from 'react-native';
import ThemeButton from '../../../components/Button/Button.js';
import styles from '../../../styles/styles.js';
import data from '../data.json';

const chapter = data.chapters[0];
const pages = data.chapters[0].pages;

const Chapter = ({ navigation }) => (
  <View style={[styles.container, styles.lightBackground]}>
    <Text style={[styles.textColor]}>{chapter.title}</Text>
    <FlatList
      data={pages}
      renderItem={({item}) => <Text key={item.id}>{item.title}</Text>}
    />
    <ThemeButton onPress={() => navigation.navigate('Page')} text="Page" />
  </View>
);

export default Chapter;
