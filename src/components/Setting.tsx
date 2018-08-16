import * as React from 'react';
import {
    Platform, 
    StyleSheet, 
    Text, 
    View,
    TouchableOpacity
} from 'react-native';

interface SettingProps {
    navigator: Navigator
}

export default class App extends React.Component<SettingProps> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.navigator.push({
            screen: 'PushScreen',
            title: 'More Setting'
        })}>
            <Text style={styles.welcome}>Setting</Text>
            <Text>Click to see more setting</Text>
        </TouchableOpacity>
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
