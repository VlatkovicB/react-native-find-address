import { AppRegistry, Platform } from 'react-native';
import App from './App';

AppRegistry.registerComponent('Find_Address', () => App);

if (Platform.OS === 'web') {
  const rootTag = document.getElementById('root') || document.getElementById('main');
  AppRegistry.runApplication('Find_Address', { rootTag });
}
