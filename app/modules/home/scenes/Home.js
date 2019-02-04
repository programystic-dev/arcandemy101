import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Text, View } from 'react-native';
import styles from '../../../styles/styles.js';
import ThemeButton from '../../../components/Button/Button.js';
import mainImages from '../../../assets/img/mainImages.js';
import data from '../../../assets/data.json';

class Home extends Component {
  constructor(props) {
    super(props);
  }

  currentChapterIndex = (chapters) => {
    let readChapters = chapters.filter((item) => item === false);
    return readChapters.length - 1;
  }

  currentPhoto = (currentChapterIndex, images) => {
    if (currentChapterIndex <= Object.keys(images).length - 1) {
      return images[`main${currentChapterIndex}`];
    } else {
      return images['main0'];
    }
  }

  render() {
    const { navigation } = this.props;
    const { chapters } = this.props;
    const currentChapterIndex = this.currentChapterIndex(chapters);
    const currentChapterTitle = data.chapters[currentChapterIndex].title;

    return(
      <View style={[styles.container, styles.lightBackground]}>
        <Image source={ this.currentPhoto(currentChapterIndex, mainImages) } style={[styles.bottomLg, styles.image]}/>
        <Text style={[styles.textColor, styles.text16, styles.bottomSm]}>Continue reading...</Text>
        <ThemeButton onPress={() => navigation.navigate(currentChapterTitle)} text={currentChapterTitle}/>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    chapters: state.chapterReducer.chapters,
  }
}

export default connect(mapStateToProps, null)(Home);
