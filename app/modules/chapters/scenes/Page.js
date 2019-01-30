import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import { connect } from 'react-redux';
import ThemeButton from '../../../components/Button/Button.js';
import styles from '../../../styles/styles.js';
import { grid } from '../../../styles/constants.js';
import data from '../../../assets/data.json';
import images from '../../../assets/img/images.js';
import { unlock } from '../actionCreators.js';
import store from '../../../redux/store.js';

class Page extends Component {
  constructor(props) {
    super(props);
  }

  unlockChapter = (chapters, chapterId, navigation) => {
    if (chapterId + 1 < chapters.length) {
      const chapterUnlocked = chapterId + 1;
      this.props.unlock(chapterUnlocked);
      console.log(store.getState().chapterReducer.chapters)
    }
    navigation.navigate('Chapter');
  }

  render() {
    const { navigation } = this.props;
    const item = navigation.getParam('item', 'Error');
    const chapterId = navigation.getParam('chapterId', 'Error');
    const chapter = data.chapters[chapterId];
    const { chapters } = this.props;

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

        { (item.id + 1) < chapter.pages.length &&
          <ThemeButton onPress={() => navigation.navigate('Page', {item: chapter.pages[(item.id + 1)], chapterId: chapterId})} text={`Next: ${chapter.pages[(item.id + 1)].title}`} style={styles.bottomSm}/>
        }

        { (item.id + 1) == chapter.pages.length &&
          <ThemeButton onPress={() => this.unlockChapter(chapters, chapterId, navigation)} text='Finish Chapter' style={styles.bottomSm}/>
        }

      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chapters: state.chapterReducer.chapters,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    unlock: (chapters) => {
      dispatch(unlock(chapters))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Page);
