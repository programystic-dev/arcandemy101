import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, Text, View } from 'react-native';
import styles from '../../../styles/styles.js';
import * as constants from '../../../styles/constants.js';
import ThemeButton from '../../../components/Button/Button.js';
import ThemeInput from '../../../components/TextInput/TextInput.js';
import { register } from '../actionCreators.js';
import { registerUser } from '../api.js';

class Signup extends Component {
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
    registerUser(email, password)
      .then( resp => {
        let user = JSON.stringify(resp);
        this.props.register(user);
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

        <ThemeInput onChangeText={(email) => this.setState({email})} placeholder="Email" style={{marginBottom: constants.grid.sm}} />
        <ThemeInput onChangeText={(password) => this.setState({password})} placeholder="Password" style={{marginBottom: constants.grid.xl}} />

        {isError &&
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        }

        <ThemeButton onPress={() => this.handleLogin(email, password, navigation)} text="Sign up" style={{marginBottom: constants.grid.sm}} />
        <ThemeButton onPress={() => navigation.navigate('App')} theme="facebook" text="Sign up with Facebook" style={{marginBottom: constants.grid.sm}}/>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: (user) => {
      dispatch(register(user))
    }
  };
};

export default connect(null, mapDispatchToProps)(Signup);
