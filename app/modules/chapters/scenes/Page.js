import React, { Component } from 'react';
import { Alert, Image, ScrollView, Text, View } from 'react-native';
import { connect } from 'react-redux';
import ThemeButton from '../../../components/Button/Button.js';
import styles from '../../../styles/styles.js';
import { grid } from '../../../styles/constants.js';
import data from '../../../assets/data.json';
import images from '../../../assets/img/images.js';
import { unlockChapter, unlockPage } from '../actionCreators.js';
import store from '../../../redux/store.js';

class Page extends Component {
  constructor(props) {
    super(props);
    this.scrollView = React.createRef();
  }

  unlockChapter = (chapters, chapterId, navigation) => {
    if (chapterId + 1 < chapters.length) {
      const chapterUnlocked = chapterId + 1;
      this.props.unlockChapter(chapterUnlocked);
    }
    navigation.navigate('Chapter');
  }

  unlockPage = (pageId, chapterId) => {
    const pageData = { pageId: pageId, chapterId: chapterId};
    this.props.unlockPage(pageData);
  }

  readContent = (elem, index) => {
    if (elem.hasOwnProperty('text')) {
      return (<Text key={index} style={[styles.textColor, styles.text16, {textAlign: 'center'}]}>{elem.text}</Text>);
    }
  }

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item', 'Error');
    const chapterId = navigation.getParam('chapterId', 'Error');
    const chapter = data.chapters[chapterId];
    const { chapters } = this.props;
    const pages = this.props.pages[chapterId];
    const content = item.content;


    return(
      <ScrollView ref={this.scrollView} style={[styles.lightBackground]}>
        <View style={[styles.container, styles.contentContainer]}>
          { images[item.pageImg] != null &&
            <Image source={images[item.pageImg]} style={[styles.bottomLg, styles.image]}/>
          }

          <Text style={[styles.textColor, styles.header1, {paddingLeft: grid.lg, paddingRight: grid.lg}]}>{item.title}</Text>
          {
            content.map((elem, index) => {
              return this.readContent(elem, index)
            })
          }
          <Text style={[styles.textColor, styles.text16, {padding: grid.lg, textAlign: 'center'}]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </Text>

          {/* Display button to the next Page in the Chapter and mark it as isRead: true in store */}
          { (item.id + 1) < chapter.pages.length &&
            <ThemeButton
              onPress={() => {
                navigation.navigate('Page', {item: chapter.pages[(item.id + 1)], chapterId: chapterId})
                this.unlockPage(item.id+1, chapterId);
                this.scrollView.current.scrollTo({x: 0, y: 0, animated: true});
              }}
              text={`Next: ${chapter.pages[(item.id + 1)].title}`}
              style={styles.bottomSm}
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
              style={styles.bottomSm}
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
              style={styles.bottomSm}
            />
          }

        </View>
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
