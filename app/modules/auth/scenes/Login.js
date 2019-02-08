import React, { Component } from 'react';
import { connect } from 'react-redux';
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
    if (email !== '' && password !== '') {
      loginUser(email, password)
        .then( resp => {
          let user = {
            email: resp.email,
            uid: resp.uid,
          }
          this.props.login(user);
        })
        .then (resp => navigation.navigate('App'))
        .catch(error => this.setState({errorMessage: error.message.message, isError: true}));
    } else {
      this.setState({errorMessage: 'You have to fill all inputs', isError: true});
    }
  }

  render() {
    const { navigation } = this.props;
    const resetPassword = navigation.getParam('resetPassword', false);
    const { email, errorMessage, isError, password } = this.state;

    return(
      <View style={[styles.container, styles.darkBackground]}>
        <Image source={require('../../../assets/img/logo.png')} style={{width: 50, height: 50, marginBottom: constants.grid.md}} />

        { resetPassword &&
          <Text style={styles.errorMessage}>E-mail sent. Go check your mail and follow instructions.</Text>
        }

        <ThemeInput
          onChangeText={(email) => this.setState({email})}
          style={{marginBottom: constants.grid.sm}}
          value={email} placeholder="Email"
        />
        <ThemeInput
          onChangeText={(password) => this.setState({password})}
          secureTextEntry={true}
          style={{marginBottom: constants.grid.xl}}
          password={true}
          placeholder="Password"
          value={password}
        />

        {isError &&
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        }

        <ThemeButton
          onPress={() => this.handleLogin(email, password, navigation)}
          style={{marginBottom: constants.grid.sm}}
          text="Login"
        />
        <ThemeButton
          onPress={() => navigation.navigate('App')}
          style={{marginBottom: constants.grid.sm}}
          text="Login with Facebook"
          theme="facebook"
        />

        <Text style={styles.lightTextColor}>New to arcandemy?</Text>
        <ThemeLink
          onPress={() => navigation.navigate('Signup')}
          style={[styles.lightTextColor, styles.underlineText, styles.boldText, styles.bottomSm, {lineHeight: 30}]}
          text="Create a new account"
        />

        <ThemeLink
          onPress={() => navigation.navigate('Forgot')}
          style={[styles.lightTextColor, styles.underlineText, styles.boldText, {lineHeight: 30}]}
          text="Forgot password"
        />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user) => {
      dispatch(login(user))
    }
  };
};

export default connect(null, mapDispatchToProps)(Login);
