import React, { Component } from 'react';
import { Alert, Image, Text, View } from 'react-native';
import { connect } from 'react-redux';
import ThemeButton from '../../../components/Button/Button.js';
import styles from '../../../styles/styles.js';
import { grid } from '../../../styles/constants.js';
import data from '../../../assets/data.json';
import images from '../../../assets/img/images.js';
import { unlock } from '../actionCreators.js';

class Page extends Component {
  constructor(props) {
    super(props);
  }

  unlockChapter = (chapters, chapterId, navigation) => {
    if (chapterId + 1 < chapters.length) {
      const chapterUnlocked = chapterId + 1;
      this.props.unlock(chapterUnlocked);
    }
    navigation.navigate('Chapter');
  }

  readContent = (content) => {
    content.forEach((elem) => {
      if (elem.hasOwnProperty('text')) {
        return <Text>{elem.text}</Text>
      }
    });
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
          Lorem ipsum
        </Text>

        { (item.id + 1) < chapter.pages.length &&
          <ThemeButton onPress={() => navigation.navigate('Page', {item: chapter.pages[(item.id + 1)], chapterId: chapterId})} text={`Next: ${chapter.pages[(item.id + 1)].title}`} style={styles.bottomSm}/>
        }

        { (item.id + 1) == chapter.pages.length &&
          <ThemeButton
            onPress={() => {
              this.unlockChapter(chapters, chapterId, navigation);
              if (chapterId < chapters.length - 1) {
                Alert.alert('Chapter unlocked!');
              }
            }}
            text='Finish Chapter'
            style={styles.bottomSm}
          />
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
