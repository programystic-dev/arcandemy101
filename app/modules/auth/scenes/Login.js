import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../../../styles/styles.js';
import * as constants from '../../../styles/constants.js';
import ThemeButton from '../../../components/Button/Button.js';
import ThemeInput from '../../../components/TextInput/TextInput.js';
import ThemeLink from '../../../components/Link/Link.js';
import * as actions from '../actions.js';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      passwor: '',
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

        <ThemeButton onPress={() => actions.login(email, password)} text="Login" style={{marginBottom: constants.grid.sm}} />
        <ThemeButton onPress={() => navigation.navigate('App')} theme="facebook" text="Login with Facebook" style={{marginBottom: constants.grid.sm}}/>

        <Text style={styles.lightTextColor}>Don't have an account?</Text>
        <ThemeLink onPress={() => navigation.navigate('Signup')} style={[styles.lightTextColor, styles.underlineText, styles.boldText, {lineHeight: 30}]} />
      </View>
    )
  }
}

export default Login;
