import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles.js';
import images from '../../../../assets/img/images.js';

const PageTile = ({ disabled, onPress, style, text, icon }) => (
  <TouchableOpacity style={[styles.tile, style]} onPress={onPress} activeOpacity={0.6}>
    <View style={[styles.tileContainer]}>
      <View style={[styles.tileIconContainer]}>
        <Image source={icon ? images.key : images.locker} style={[styles.tileIcon]} />
      </View>
      <View style={[styles.tileTextContainer]}>
        <Text style={[styles.tileText]}>{text}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

PageTile.propTypes = {
  onPress: PropTypes.func.isRequired,
  icon: PropTypes.bool.isRequired,
  text: PropTypes.string,
  style: PropTypes.object,
}

PageTile.defaultProps = {
  text: "Click me",
  style: {},
}

export default PageTile;
