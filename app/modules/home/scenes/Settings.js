import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View } from 'react-native';
import styles from '../../../styles/styles.js';
import ThemeButton from '../../../components/Button/Button.js';
import { logout } from '../../auth/actionCreators.js';

class Settings extends Component {
  constructor(props) {
    super(props);
  }

  handleLogout = (navigation) => {
    this.props.logout();
    navigation.navigate('Auth');
  }

  render() {
    const { navigation } = this.props;
    return(
      <View style={[styles.container, styles.lightBackground]}>
        <Text style={[styles.textColor]}>This is a Settings page!</Text>
        <ThemeButton onPress={ () => this.handleLogout(navigation) } text="Log out"/>
      </View>
    )
  }

}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout())
    }
  };
};

export default connect(null, mapDispatchToProps)(Settings);
