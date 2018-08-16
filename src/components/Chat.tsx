import * as React from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View
} from 'react-native';

interface ChatProps {
    navigator: Navigator
}
export default class App extends React.Component<ChatProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Chat Message</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
