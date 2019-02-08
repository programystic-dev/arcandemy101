import React from 'react';
import { Text, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';

const Link = ({ onPress, style, text }) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={style}>{text}</Text>
  </TouchableOpacity>
);

Link.propTypes = {
  onPress: PropTypes.func.isRequired,
  text: PropTypes.string,
}

Link.defaultProps = {
  style: {},
  text: "Click me",
}

export default Link;
