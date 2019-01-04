import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles.js';

const Button = ({ onPress, text }) => (
  <TouchableOpacity onPress={onPress}>
    <Text>{text}</Text>
  </TouchableOpacity>
);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string,
}

Button.defaultProps = {
  text: "Click me",
}

export default Button;
