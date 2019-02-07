import React, { Component } from 'react';
import { Animated, Alert, Image, ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import ThemeButton from '../../../components/Button/Button.js';
import styles from '../../../styles/styles.js';
import { grid } from '../../../styles/constants.js';
import data from '../../../assets/data.json';
import images from '../../../assets/img/images.js';
import { unlockChapter, unlockPage } from '../actionCreators.js';
import { updatePages, updateChapters } from '../api.js';
import store from '../../../redux/store.js';
import { readContent } from '../helpers.js';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
    };

    this.scrollView = React.createRef();
  }

  unlockChapter = (chapters, chapterId, navigation) => {
    if (chapterId + 1 < chapters.length) {
      const newChapters = [ ...store.getState().chapterReducer.chapters ];
      newChapters[chapterId + 1] = false;
      updateChapters(newChapters);

      const chapterUnlocked = chapterId + 1;
      this.props.unlockChapter(chapterUnlocked);
    }
    navigation.navigate('Chapter');
  }

  unlockPage = (pageId, chapterId) => {
    const newPages = [ ...store.getState().chapterReducer.pages];
    newPages[chapterId][pageId] = true;
    updatePages(newPages);

    const pageData = { pageId: pageId, chapterId: chapterId};
    this.props.unlockPage(pageData);
  }

  readContent = (elem, index, images, styles) => {
    return readContent(elem, index, images, styles);
  }

  componentDidMount() {
    Animated.timing( this.state.fadeAnim, { toValue: 1, duration: 1000,}).start();
  }

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item', 'Error');
    const chapterId = navigation.getParam('chapterId', 'Error');
    const chapter = data.chapters[chapterId];
    const { chapters } = this.props;
    const pages = this.props.pages[chapterId];
    const content = item.content;
    let { fadeAnim } = this.state;

    return(
      <ScrollView ref={this.scrollView} style={[styles.lightBackground]}>
        <Animated.View style={[styles.container, styles.contentContainer, {opacity: fadeAnim}]}>
          { images[item.pageImg] != null &&
            <Image source={images[item.pageImg]} style={[styles.bottomLg, styles.image]}/>
          }

          <Text style={[styles.textColor, styles.header1, styles.bottomLg, {paddingLeft: grid.lg, paddingRight: grid.lg}]}>{item.title}</Text>

          {
            content.map((elem, index) => {
              return this.readContent(elem, index, images, styles)
            })
          }

          {/* Display button to the next Page in the Chapter and mark it as isRead: true in store */}
          { (item.id + 1) < chapter.pages.length &&
            <ThemeButton
              onPress={() => {
                navigation.navigate('Page', {item: chapter.pages[(item.id + 1)], chapterId: chapterId})
                this.unlockPage(item.id+1, chapterId);
                this.scrollView.current.scrollTo({x: 0, y: 0, animated: true});
              }}
              text={`Next: ${chapter.pages[(item.id + 1)].title}`}
              style={styles.topLg}
            />
          }

          {/* If not all Pages are read and it is the last Page
            in the Chapter display button showing an alert with an info */}
          { ((item.id + 1) == chapter.pages.length && pages.filter((item) => item === true).length != pages.length) &&
            <ThemeButton
              onPress={() => {
                Alert.alert('You have to read all pages in this Chapter to finish it.');
              }}
              text='Finish Chapter'
              style={styles.topLg}
            />
          }

          {/* If all Pages are read and it is the last Page
            in the Chapter display button to finish the Chapter and unlock next one */}
          { ((item.id + 1) == chapter.pages.length && pages.filter((item) => item === true).length == pages.length) &&
            <ThemeButton
              onPress={() => {
                this.unlockChapter(chapters, chapterId, navigation);
                if (chapterId < chapters.length - 1) {
                  Alert.alert('Chapter unlocked!');
                } else {
                  Alert.alert('Congratulations! You read all Chapters!');
                }
              }}
              text='Finish Chapter'
              style={styles.topLg}
            />
          }

        </Animated.View>
      </ScrollView>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chapters: state.chapterReducer.chapters,
    pages: state.chapterReducer.pages,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    unlockChapter: (chapter) => {
      dispatch(unlockChapter(chapter))
    },
    unlockPage: (pageId, chapterId) => {
      dispatch(unlockPage(pageId, chapterId))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
