import React, { Component } from 'react';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import styles from '../../../styles/styles.js';
import { auth } from '../../../config/firebase.js';
import Login from './Login.js';

class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      authenticated: false,
    };

    this.bootstrapAsync();
  }

  bootstrapAsync = async () => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate('App');
      } else {
        this.props.navigation.navigate('Login');
      }
    });
  };

  render() {
    return(
      <View style={[styles.container, styles.darkBackground]}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

export default Loading;
