import { Navigation } from 'react-native-navigation';
import Deck from './components/Deck';
import Chat from './components/Chat';
import Request from './components/Request';
import Setting from './components/Setting';
import PushScreen from './components/PushScreen';

Navigation.registerComponent('HomeTabScreen', () => Deck);
Navigation.registerComponent('ChatTabScreen', () => Chat);
Navigation.registerComponent('ReqestTabScreen', () => Request);
Navigation.registerComponent('SettingTabScreen', () => Setting);
Navigation.registerComponent('PushScreen', () => PushScreen);

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'My Deck',
      screen: 'HomeTabScreen',
      icon: require('./img/home.png'),
      title: 'My Deck'
    },
    {
      label: 'Match',
      screen: 'ReqestTabScreen', // new
      icon: require('./img/deck.png'),
      title: 'Match'
    },
    {
      label: 'Request',
      screen: 'ReqestTabScreen',
      icon: require('./img/heart.png'),
      title: 'Request'
    },
    {
      label: 'Chat',
      screen: 'ChatTabScreen',
      icon: require('./img/chat.png'),
      title: 'Chat'
    },
    {
      label: 'Setting',
      screen: 'SettingTabScreen',
      icon: require('./img/settings.png'),
      title: 'Setting'
    }
  ]
});