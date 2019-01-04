import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles.js';

const Button = ({ disabled, onPress, style, text }) => (
  <TouchableOpacity style={[styles.basic, styles[style], disabled ? styles.disabled : ""]} onPress={onPress} disabled={disabled} activeOpacity={0.6}>
    <Text style={[styles.basicText, styles[style + "Text"]]}>{text}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string,
  style: PropTypes.oneOf(['default', 'facebook']),
}

Button.defaultProps = {
  disabled: false,
  text: "Click me",
  style: "default",
}

export default Button;
