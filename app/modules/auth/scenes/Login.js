import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Image, Text, View } from 'react-native';
import styles from '../../../styles/styles.js';
import * as constants from '../../../styles/constants.js';
import ThemeButton from '../../../components/Button/Button.js';
import ThemeInput from '../../../components/TextInput/TextInput.js';
import ThemeLink from '../../../components/Link/Link.js';
import { login } from '../actionCreators.js';
import { loginUser } from '../api.js';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      errorMessage: '',
      isError: false,
    }
  }

  handleLogin = (email, password, navigation) => {
    loginUser(email, password)
      .then( resp => {
        let user = JSON.stringify(resp);
        this.props.login(user);
      })
      .then (resp => navigation.navigate('App'))
      .catch(error => this.setState({errorMessage: error.message, isError: true}));
  }

  render() {
    const { navigation } = this.props;
    const { email, errorMessage, isError, password } = this.state;

    return(
      <View style={[styles.container, styles.darkBackground]}>
        <Image source={require('../../../assets/img/logo.png')} style={{width: 50, height: 50, marginBottom: constants.grid.md}} />

        <ThemeInput onChangeText={(email) => this.setState({email})} value={email} placeholder="Email" style={{marginBottom: constants.grid.sm}} />
        <ThemeInput onChangeText={(password) => this.setState({password})} value={password} placeholder="Password" style={{marginBottom: constants.grid.xl}} />

        {isError &&
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        }

        <ThemeButton onPress={() => this.handleLogin(email, password, navigation)} text="Login" style={{marginBottom: constants.grid.sm}} />
        <ThemeButton onPress={() => navigation.navigate('App')} theme="facebook" text="Login with Facebook" style={{marginBottom: constants.grid.sm}}/>

        <Text style={styles.lightTextColor}>Don't have an account?</Text>
        <ThemeLink onPress={() => navigation.navigate('Signup')} style={[styles.lightTextColor, styles.underlineText, styles.boldText, {lineHeight: 30}]} />
      </View>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: (user) => {
      dispatch(login(user))
    }
  };
};

export default connect(null, mapDispatchToProps)(Login);
