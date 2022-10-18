//https://rnfirebase.io/analytics/usage
//https://notifee.app/react-native/docs/displaying-a-notification

//token FCM
//https://aboutreact.com/react-native-firebase-cloud-messaging/
//iOS
//https://medium.com/alameda-dev/react-native-push-notifications-with-firebase-d23ed0dfb3ae

//postman
//https://medium.com/android-school/test-fcm-notification-with-postman-f91ba08aacc3
//authorization: key=AAAANdQVYI0:APA91bFI5YGWLTF0Q241JT9rzbTUyDGHp4CcZHwpeQjWVQejS87tzTUDyulzEJ-1WXdShTv7y2e6Opkvohaxn_LDuBwS5bhnLz2XfQnPAcgjBkbO5expULF50gxfG_i1BaXrMgUUO4p5

import React from 'react';
import {StyleSheet, View, Button} from 'react-native';
import notifee from '@notifee/react-native';
import messaging from '@react-native-firebase/messaging';

const App = () => {
  const onDisplayRemoteNotification = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
    if (enabled) {
      await messaging()
        .getToken()
        .then(fcmToken => {
          console.log('FCM Token -> ', fcmToken);
        });
    } else {
      console.log('Not Authorization status:', authStatus);
    }
  };
  const onDisplayLocalNotification = async () => {
    // Request permissions (required for iOS)
    await notifee.requestPermission();

    // Create a channel (required for Android)
    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    // Display a notification
    await notifee.displayNotification({
      title: 'Notification Title',
      body: 'Main body content of the notification',
      android: {
        channelId,
        // pressAction is needed if you want the notification to open the app when pressed
        pressAction: {
          id: 'default',
        },
      },
    });
  };
  return (
    <View style={styles.sectionContainer}>
      <View>
        <Button
          title="Display Local Notification"
          onPress={() => onDisplayLocalNotification()}
        />
      </View>

      <View style={{marginTop: 20}}>
        <Button
          title="Display FCM Notification"
          onPress={() => onDisplayRemoteNotification()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

/**
 * {
 "to" : "fv-am5XSRTWMk-wjBJhDfT:APA91bH7yemqewvWHuPt7ZEMoTL8yoXcChnnDj1W-rjkpsIp5Y_MeBELYY12gonsKgcik3ZIqDPghqNqLZVcAJqiPg6Pe-5LLM8H_UXHRDlpvnJf7n58vsgFk5C-2XHBCeTpVi-cQWPM",
 "collapse_key" : "type_a",
 "notification" : {
     "body" : "Body of Your Notification",
     "title": "Title of Your Notification"
 },
 "data" : {
     "body" : "Body of Your Notification in Data",
     "title": "Title of Your Notification in Title",
     "key_1" : "Value for key_1",
     "key_2" : "Value for key_2"
 }
}
 */
