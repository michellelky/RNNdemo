import * as React from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View
} from 'react-native';

interface SettingProps {
    navigator: Navigator
}
export default class App extends React.Component<SettingProps> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Push content here</Text>
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
