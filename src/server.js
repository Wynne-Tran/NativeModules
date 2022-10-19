const fcm = require('fcm-notification');
const FCM = new fcm(
  'push-notification-3d40b-firebase-adminsdk-qvn3t-ad39263234.json',
);
const token =
  'f8KLK2YXTwCZ1KYVMGKbtd:APA91bFovH6rhsHq30HC5BugmzDT5FHxuFZYTxL7lTHHMY73zPUg5KT3Ytr343WQUoCLoT83uAUceLHy5KQBCtCxGHBIHsD_OwBVPLWKEDcmFAtYtsMMbGa9FMKCjO9kPH0oXAvBYDS_';

var message = {
  data: {
    //This is only optional, you can send any data
    score: '850',
    time: '2:45',
  },
  notification: {
    title: 'DANDELION NETWORKS',
    body: 'This notification from FCM server !',
  },
  token: token,
};

FCM.send(message, function (err, response) {
  if (err) {
    console.log('error found', err);
  } else {
    console.log('response here', response);
  }
});
