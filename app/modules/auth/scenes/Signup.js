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
      passwordCheck: '',
      errorMessage: '',
      isError: false,
    }
  }

  handleLogin = (email, password, passwordCheck, navigation) => {
    if (email !== '' && password !== '' && passwordCheck !== '') {
      if (passwordCheck === password) {
        registerUser(email, password)
          .then( resp => {
            let user = JSON.stringify(resp);
            this.props.register(user);
          })
          .then (resp => navigation.navigate('App'))
          .catch(error => this.setState({errorMessage: error.message.message, isError: true}));
      } else {
        this.setState({errorMessage: 'Passwords are not the same.', isError: true});
      }
    } else {
      this.setState({errorMessage: 'You have to fill all inputs', isError: true});
    }
  }

  render() {
    const { navigation } = this.props;
    const { email, errorMessage, isError, password, passwordCheck } = this.state;
    return(
      <View style={[styles.container, styles.darkBackground]}>
        <Image source={require('../../../assets/img/logo.png')} style={{width: 50, height: 50, marginBottom: constants.grid.md}} />

        <ThemeInput
          onChangeText={(email) => this.setState({email})}
          placeholder="Email"
          style={{marginBottom: constants.grid.sm}}
          value={email}
        />
        <ThemeInput
          onChangeText={(password) => this.setState({password})}
          password={true}
          placeholder="Password"
          secureTextEntry={true}
          style={{marginBottom: constants.grid.sm}}
          value={password}
        />
        <ThemeInput
          onChangeText={(passwordCheck) => this.setState({passwordCheck})}
          password={true}
          placeholder="Repeat password"
          secureTextEntry={true}
          style={{marginBottom: constants.grid.xl}}
          value={passwordCheck}
        />

        {isError &&
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        }

        <ThemeButton
          onPress={() => this.handleLogin(email, password, passwordCheck, navigation)}
          style={{marginBottom: constants.grid.sm}}
          text="Sign up"
        />
        <ThemeButton
          onPress={() => navigation.navigate('App')}
          style={{marginBottom: constants.grid.sm}}
          theme="facebook" text="Sign up with Facebook"
        />
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
