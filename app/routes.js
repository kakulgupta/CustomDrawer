import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';
import Page3 from './Page3/Page3';
import React from 'react';
import SideMenu from './SideMenu/SideMenu';
import {Button} from 'react-native';
import {DrawerNavigator, StackNavigator} from 'react-navigation';

const generateDrawerHamburger = (currentNav) => {
  const onPress = () => currentNav.navigation.navigate('DrawerOpen');
  return (
    <Button title='Menu' onPress={onPress}/>
  );
};

const getStackNavOption = (current) => ({
  headerStyle: {
    paddingHorizontal: 10,
    backgroundColor: 'white'
  },
  headerLeft: generateDrawerHamburger(current)
});

const Page1Stack = StackNavigator({
  Page1: {
    screen: Page1,
    navigationOptions: getStackNavOption
  }
});
const Page2Stack = StackNavigator({
  Page2: {
    screen: Page2,
    navigationOptions: getStackNavOption
  }
});
const Page3Stack = StackNavigator({
  Page3: {
    screen: Page3,
    navigationOptions: getStackNavOption
  }
});

export default DrawerNavigator({
  Page1: {
    screen: Page1Stack
  },
  Page2: {
    screen: Page2Stack
  },
  Page3: {
    screen: Page3Stack
  }
}, {
  contentComponent: SideMenu,
  drawerWidth: 300
});
