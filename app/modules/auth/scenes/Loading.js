import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActivityIndicator, StatusBar, View } from 'react-native';
import styles from '../../../styles/styles.js';
import { auth, database } from '../../../config/firebase.js';
import { login } from '../actionCreators.js';
import { getProgress } from '../../chapters/actionCreators.js';

class Loading extends Component {
  constructor(props) {
    super(props);

    this.bootstrapAsync(auth, database);
  }

  /* If user exists then get data from database and log in user */
  getUserFromDatabase = async (auth, database) => {
    const uid = auth.currentUser.uid;
    const userData = await database.ref('users').child(uid).once('value');
    return userData;
  }

  userProgressListener = async (auth, database, callback) => {
    const uid = auth.currentUser.uid;
    const userData = await database.ref('users').child(uid).on('value', function(snapshot) {
      const userData = snapshot.val();
      callback(userData.progress);
    });
  }

  bootstrapAsync = async (auth, database) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        /* Get user's data from database */
        this.getUserFromDatabase(auth, database)
          .then(snapshot => { return snapshot.val() })
          .then((resp) => {
            this.props.login({email: resp.email.toLowerCase(), uid: resp.uid});
            this.props.getProgress(resp.progress);
          }).catch((error) => console.log(error));
        this.userProgressListener(auth, database, this.props.getProgress);
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

const mapDispatchToProps = (dispatch) => {
  return {
    getProgress: (progress) => {
      dispatch(getProgress(progress))
    },
    login: (user) => {
      dispatch(login(user))
    }
  };
};

export default connect(null, mapDispatchToProps)(Loading);
