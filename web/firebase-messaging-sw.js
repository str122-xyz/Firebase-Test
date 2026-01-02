importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyB5-4KFHndqU5lyH24qeJufeyNDhz_z7L0",
  authDomain: "project-k4-e5f3c.firebaseapp.com",
  projectId: "project-k4-e5f3c",
  storageBucket: "project-k4-e5f3c.firebasestorage.app",
  messagingSenderId: "176364093014",
  appId: "1:176364093014:web:bb314b381026a5f42cc5f7",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  self.registration.showNotification(
    payload.notification.title,
    {
      body: payload.notification.body,
    }
  );
});
