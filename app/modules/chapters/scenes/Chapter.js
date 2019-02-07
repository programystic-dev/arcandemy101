import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Animated, Button, FlatList, ScrollView, Text, View } from 'react-native';
import PageTile from '../components/PageTile/PageTile.js';
import styles from '../../../styles/styles.js';
import data from '../../../assets/data.json';
import { unlockPage } from '../actionCreators.js';
import { updatePages } from '../api.js';
import store from '../../../redux/store.js';

class Chapter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  unlockPage = (pageId, chapterId) => {
    const newPages = [ ...store.getState().chapterReducer.pages];
    newPages[chapterId][pageId] = true;
    updatePages(newPages);

    const pageData = { pageId: pageId, chapterId: chapterId};
    this.props.unlockPage(pageData);
  }

  componentDidMount() {
    Animated.timing( this.state.fadeAnim, { toValue: 1, duration: 1000,}).start();
  }

  render() {
    const { navigation } = this.props;
    const chapterId = navigation.dangerouslyGetParent().state.params.chapterId;
    const chapter = data.chapters[chapterId];
    const pages = chapter.pages;
    const { pagesRead } = this.props;
    let { fadeAnim } = this.state;

    if (this.props.chapters[chapterId]) {
      return(
        <Animated.View style={[styles.container, styles.lightBackground, {paddingTop: 100, opacity: fadeAnim}]}>
          <Text style={[styles.textColor, styles.header1, styles.bottomLg]}>Chapter Locked!</Text>
        </Animated.View>
      );
    } else if (!this.props.chapters[chapterId]) {
      return(
        <ScrollView style={[styles.lightBackground]}>
          <Animated.View style={[styles.container, styles.contentContainer, {opacity: fadeAnim}]}>
            <Text style={[styles.textColor, styles.header1, styles.bottomLg]}>{chapter.title}</Text>
            <FlatList
              data={pages}
              extraData={pagesRead}
              renderItem={({item}) =>
                <PageTile
                  icon={pagesRead[chapterId][item.id]}
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
          </Animated.View>
        </ScrollView>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    chapters: state.chapterReducer.chapters,
    pagesRead: state.chapterReducer.pages,
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
