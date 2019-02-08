import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Animated, View } from 'react-native';
import StyledText from 'react-native-styled-text';
import styles from '../../../styles/styles.js';
import ThemeButton from '../../../components/Button/Button.js';
import { logout } from '../../auth/actionCreators.js';
import { signOutUser } from '../../auth/api.js';

class Settings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  handleLogout = (navigation) => {
    signOutUser()
      .then(() => {
        this.props.logout();
        navigation.navigate('Auth');
      }).catch(error => this.setState({errorMessage: error.message, isError: true}));
  }

  componentDidMount() {
    Animated.timing( this.state.fadeAnim, { toValue: 1, duration: 1000,}).start();
  }

  render() {
    const { navigation, userData } = this.props;
    let { fadeAnim } = this.state;

    return(
      <Animated.View style={[styles.container, styles.contentContainer, styles.lightBackground, {opacity: fadeAnim}]}>
        <StyledText
          style={[styles.textColor, styles.text16, styles.bottomMd, { textAlign: 'center' }]}
          text={`You are logged in as <b>${userData.user !== null ? userData.user.email : 'ERROR' }</b>`}
        />
        <ThemeButton onPress={ () => this.handleLogout(navigation) } text="Log out"/>
      </Animated.View>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    userData: state.authReducer,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    logout: () => {
      dispatch(logout())
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
