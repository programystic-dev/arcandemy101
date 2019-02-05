import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Animated, Text, View } from 'react-native';
import styles from '../../../styles/styles.js';
import ThemeButton from '../../../components/Button/Button.js';
import { logout } from '../../auth/actionCreators.js';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  handleLogout = (navigation) => {
    this.props.logout();
    navigation.navigate('Auth');
  }

  componentDidMount() {
    Animated.timing( this.state.fadeAnim, { toValue: 1, duration: 1000,}).start();
  }

  render() {
    const { navigation } = this.props;
    let { fadeAnim } = this.state;

    return(
      <Animated.View style={[styles.container, styles.lightBackground, {opacity: fadeAnim}]}>
        <ThemeButton onPress={ () => this.handleLogout(navigation) } text="Log out"/>
      </Animated.View>
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
