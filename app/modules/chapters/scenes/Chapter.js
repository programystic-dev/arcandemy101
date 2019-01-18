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
      renderItem={({item}) => <ThemeButton onPress={() => navigation.navigate('Page', {item: item})} text={item.title} />}
      keyExtractor={(item) => item.id.toString()}
    />
  </View>
);

export default Chapter;
