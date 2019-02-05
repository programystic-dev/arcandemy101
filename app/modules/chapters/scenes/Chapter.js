import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, FlatList, ScrollView, Text, View } from 'react-native';
import ThemeButton from '../../../components/Button/Button.js';
import styles from '../../../styles/styles.js';
import data from '../../../assets/data.json';
import { unlockPage } from '../actionCreators.js';

class Chapter extends Component {
  constructor(props) {
    super(props);
  }

  unlockPage = (pageId, chapterId) => {
    const pageData = { pageId: pageId, chapterId: chapterId};
    this.props.unlockPage(pageData);
  }

  render() {
    const { navigation } = this.props;
    const chapterId = navigation.dangerouslyGetParent().state.params.chapterId;
    const chapter = data.chapters[chapterId];
    const pages = chapter.pages;

    if (this.props.chapters[chapterId]) {
      return(
        <View style={[styles.container, styles.lightBackground, {paddingTop: 100}]}>
          <Text style={[styles.textColor, styles.header1, styles.bottomLg]}>Chapter Locked!</Text>
        </View>
      );
    } else if (!this.props.chapters[chapterId]) {
      return(
        <ScrollView style={[styles.lightBackground]}>
          <View style={[styles.container, styles.contentContainer]}>
            <Text style={[styles.textColor, styles.header1, styles.bottomLg]}>{chapter.title}</Text>
            <FlatList
              data={pages}
              renderItem={({item}) =>
                <ThemeButton
                  onPress={() => {
                    navigation.navigate('Page', {item: item, chapterId: chapterId});
                    this.unlockPage(item.id, chapterId);
                  }}
                  text={item.title}
                  style={styles.bottomSm}
                />
              }
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </ScrollView>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    chapters: state.chapterReducer.chapters,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    unlockPage: (pageId, chapterId) => {
      dispatch(unlockPage(pageId, chapterId))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chapter);
