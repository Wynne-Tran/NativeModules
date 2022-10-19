/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import messaging from '@react-native-firebase/messaging';
import Notification from './src/service/Notification';

messaging().onMessage(async remoteMessage => {
  //Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
  console.log(remoteMessage.data);
  Notification.onDisplayNotification(
    remoteMessage.notification.title,
    remoteMessage.notification.body,
    remoteMessage.data,
    'remoteMessage',
  );
});
AppRegistry.registerComponent(appName, () => App);
