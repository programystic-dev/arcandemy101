import React from 'react';
import { Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import StyledText from 'react-native-styled-text';
import BulletHeaderList from './components/BulletHeaderList/BulletHeaderList.js';
import BulletList from './components/BulletList/BulletList.js';

export const readContent = (elem, index, images, styles) => {
  if (elem.hasOwnProperty('text')) {
    /* Return simple paragraph */
    return (<Text key={index} style={[styles.textColor, styles.text16, {textAlign: 'center'}]}>{elem.text}</Text>);
  } else if (elem.hasOwnProperty('image')) {
    /* Return image */
    return (<Image key={index} source={images[elem.image]} style={[styles.bottomMd, styles.topMd, styles.imageSmall]}/>);
  } else if (elem.hasOwnProperty('bulletHeaderList')) {
    /* Return bullet list with headers*/
    return (<BulletHeaderList key={index} list={elem.bulletHeaderList} />);
  } else if (elem.hasOwnProperty('bulletList')) {
    /* Return bullet list */
    return (<BulletList key={index} list={elem.bulletList} />);
  } else if (elem.hasOwnProperty('subheader')) {
    /* Return subheader */
    return (<Text key={index} style={[styles.textColor, styles.text24, styles.bottomSm, {textAlign: 'center'}]}>{elem.subheader}</Text>);
  } else if (elem.hasOwnProperty('styledText')) {
    /* Return styled paragraph */
    return (<StyledText key={index} text={elem.styledText} style={[styles.textColor, styles.text16, {textAlign: 'center'}]}/>);
  }
};
