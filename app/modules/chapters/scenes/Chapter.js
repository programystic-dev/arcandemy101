import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FlatList, Text, View } from 'react-native';
import ThemeButton from '../../../components/Button/Button.js';
import styles from '../../../styles/styles.js';
import data from '../../../assets/data.json';

class Chapter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigation } = this.props;
    const chapterId = navigation.dangerouslyGetParent().state.params.chapterId;
    const chapter = data.chapters[chapterId];
    const pages = chapter.pages;

    if (this.props.chapters[chapterId]) {
      return(
        <View style={[styles.container, styles.lightBackground, {paddingTop: 100}]}>
          <Text style={[styles.textColor, styles.header1, styles.bottomMd]}>Chapter Locked!</Text>
        </View>
      );
    } else if (!this.props.chapters[chapterId]) {
      return(
        <View style={[styles.container, styles.lightBackground, {paddingTop: 100}]}>
          <Text style={[styles.textColor, styles.header1, styles.bottomMd]}>{chapter.title}</Text>
          <FlatList
            data={pages}
            renderItem={({item}) => <ThemeButton onPress={() => navigation.navigate('Page', {item: item, chapterId: chapterId})} text={item.title} style={styles.bottomSm}/>}
            keyExtractor={(item) => item.id.toString()}
          />
        </View>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    chapters: state.chapterReducer.chapters,
  }
}

export default connect(mapStateToProps, null)(Chapter);
