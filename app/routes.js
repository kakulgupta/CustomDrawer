import Page1 from './Page1/Page1';
import Page2 from './Page2/Page2';
import Page3 from './Page3/Page3';
import SideMenu from './SideMenu/SideMenu';
import {DrawerNavigator} from 'react-navigation';

export default DrawerNavigator({
  Page1: {
    screen: Page1
  },
  Page2: {
    screen: Page2
  },
  Page3: {
    screen: Page3
  }
}, {
  contentComponent: SideMenu,
  drawerWidth: 300
});
