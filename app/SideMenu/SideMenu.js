/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './SideMenu.style';
import {NavigationActions} from 'react-navigation';
import {
  Text,
  View
} from 'react-native';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    console.log('here', route);
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    const navItemStyle = {
      padding: 10
    };
    const navSectionStyle = {
      backgroundColor: 'lightgrey'
    };
    const sectionHeadingStyle = {
      paddingVertical: 10,
      paddingHorizontal: 5
    };
    return (
      <View style={styles.container}>
        <View>
          <Text style={sectionHeadingStyle}>
            Section 1
          </Text>
          <View style={navSectionStyle}>
            <Text style={navItemStyle} onPress={this.navigateToScreen('Page1')}>
            Page1
            </Text>
          </View>
        </View>
        <View>
          <Text style={sectionHeadingStyle}>
            Section 2
          </Text>
          <View style={navSectionStyle}>
            <Text style={navItemStyle} onPress={this.navigateToScreen('Page2')}>
              Page2
            </Text>
            <Text style={navItemStyle} onPress={this.navigateToScreen('Page3')}>
              Page3
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;
