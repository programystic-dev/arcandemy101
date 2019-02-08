import React, { Component } from 'react';
import { TextInput } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles.js';

class ThemeInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFocused: false,
    };
  }

  onFocus = (e) => {
    this.setState({isFocused: true});
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  }

  onBlur = (e) => {
    this.setState({isFocused: false});
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  }

  render() {
    const { isFocused } = this.state;
    const { style, ...otherProps } = this.props;

    return (
      <TextInput
        onFocus={this.onFocus}
        onBlur={this.onBlur}
        style={[styles.input, isFocused ? styles.inputFocused : styles.inputBlurred , style]}
        {...otherProps}
      />
    )
  }
}

ThemeInput.propTypes = {
  password: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  style: PropTypes.object,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
}

ThemeInput.defaultProps = {
  password: false,
  secureTextEntry: false,
  style: {},
  placeholder: 'Start typing...',
}

export default ThemeInput;
