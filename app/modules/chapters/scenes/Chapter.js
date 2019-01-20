import React from 'react';
import { Button, FlatList, Text, View } from 'react-native';
import ThemeButton from '../../../components/Button/Button.js';
import styles from '../../../styles/styles.js';
import data from '../data.json';

const chapter = data.chapters[0];
const pages = data.chapters[0].pages;

const Chapter = ({ navigation }) => (
  <View style={[styles.container, styles.lightBackground, {paddingTop: 100}]}>
    <Text style={[styles.textColor, styles.header1, styles.bottomMd]}>{chapter.title}</Text>
    <FlatList
      data={pages}
      renderItem={({item}) => <ThemeButton onPress={() => navigation.navigate('Page', {item: item})} text={item.title} style={styles.bottomSm}/>}
      keyExtractor={(item) => item.id.toString()}
    />
  </View>
);

export default Chapter;
