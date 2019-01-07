import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../../../styles/styles.js';
import * as constants from '../../../styles/constants.js';
import ThemeButton from '../../../components/Button/Button.js';
import ThemeInput from '../../../components/TextInput/TextInput.js';
import * as actions from '../actions.js';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    }
  }

  render() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    return(
      <View style={[styles.container, styles.darkBackground]}>
        <Image source={require('../../../assets/img/logo.png')} style={{width: 50, height: 50, marginBottom: constants.grid.md}} />

        <ThemeInput onChangeText={(email) => this.setState({email})} placeholder="Email" style={{marginBottom: constants.grid.sm}} />
        <ThemeInput onChangeText={(password) => this.setState({password})} placeholder="Password" style={{marginBottom: constants.grid.xl}} />

        <ThemeButton onPress={() => actions.register(email, password)} text="Sign up" style={{marginBottom: constants.grid.sm}} />
        <ThemeButton onPress={() => navigation.navigate('App')} theme="facebook" text="Sign up with Facebook" style={{marginBottom: constants.grid.sm}}/>
      </View>
    )
  }
}

export default Signup;
