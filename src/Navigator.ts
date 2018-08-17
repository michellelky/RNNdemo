import { Navigation } from 'react-native-navigation';

import Deck from './screens/Deck'; //app
import Chat from './screens/Chat';
import Request from './screens/Request';
import User from './screens/User';
import Settings from './screens/Settings';
import Profile from './screens/Profile';

Navigation.registerComponent('HomeTabScreen', () => Deck);
Navigation.registerComponent('ChatTabScreen', () => Chat);
Navigation.registerComponent('ReqestTabScreen', () => Request);
Navigation.registerComponent('UserTabScreen', () => User);
Navigation.registerComponent('Settings', () => Settings); 
Navigation.registerComponent('ProfileScreen', () => Profile);

Navigation.startTabBasedApp({
  tabs: [
    {
      // label: 'My Deck',
      screen: 'HomeTabScreen',
      icon: require('./img/home.png'),
      title: 'My Deck'
    },
    {
      // label: 'Match',
      screen: 'ReqestTabScreen', // new
      icon: require('./img/deck.png'),
      title: 'Match'
    },
    {
      // label: 'Request',
      screen: 'ReqestTabScreen',
      icon: require('./img/heart.png'),
      title: 'Request'
    },
    {
      // label: 'Chat',
      screen: 'ChatTabScreen',
      icon: require('./img/chat.png'),
      title: 'Chat'
    },
    {
      // label: 'Profile',
      screen: 'UserTabScreen',
      icon: require('./img/user.png'),
      title: 'Profile'
    }
  ],
  tabsStyle: { 
    // tabBarButtonColor: '#ffff00', // optional, change the color of the tab icons and text (also unselected). On Android, add this to appStyle
    tabBarSelectedButtonColor: '#F0957F', // optional, change the color of the selected tab icon and text (only selected). On Android, add this to appStyle
    // tabBarBackgroundColor: '#551A8B', // optional, change the background color of the tab bar
  },
});