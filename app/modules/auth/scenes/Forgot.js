import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';
import styles from '../../../styles/styles.js';
import * as constants from '../../../styles/constants.js';
import ThemeButton from '../../../components/Button/Button.js';
import ThemeInput from '../../../components/TextInput/TextInput.js';
import { resetPassword } from '../api.js';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      errorMessage: '',
      isError: false,
    }
  }

  handleForgotPassword = (email, navigation) => {
    if (email !== '') {
      resetPassword(email)
        .then(() => {
          navigation.navigate('Login', {
            resetPassword: true,
          });
        }).catch((error) => {
          this.setState({errorMessage: error.message, isError: true});
        });
    } else {
      this.setState({errorMessage: 'You have to provide an email address', isError: true});
    }
  }

  render() {
    const { navigation } = this.props;
    const { email, errorMessage, isError } = this.state;
    return(
      <View style={[styles.container, styles.darkBackground]}>
        <Image source={require('../../../assets/img/logo.png')} style={{width: 50, height: 50, marginBottom: constants.grid.md}} />

        <ThemeInput
          onChangeText={(email) => this.setState({email})}
          placeholder="Email"
          style={{marginBottom: constants.grid.sm}}
          value={email}
        />

        {isError &&
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        }

        <ThemeButton
          onPress={() => this.handleForgotPassword(email, navigation)}
          style={{marginBottom: constants.grid.sm}}
          text="Reset Password"
        />
      </View>
    )
  }
}

export default Signup;
