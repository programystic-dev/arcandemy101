import React from 'react';
import { Image, Text } from 'react-native';

export const readContent = (elem, index, images, styles) => {
  if (elem.hasOwnProperty('text')) {
    return (<Text key={index} style={[styles.textColor, styles.text16, {textAlign: 'center'}]}>{elem.text}</Text>);
  } else if (elem.hasOwnProperty('image')) {
    return (<Image key={index} source={images[elem.image]} style={[styles.bottomMd, styles.topMd, styles.image]}/>);
  }
};
