import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyASt-yd6dgLypuN6QbUdq5xWJKyl--FnNU",
  authDomain: "turnout-vue-js.firebaseapp.com",
  databaseURL: "https://turnout-vue-js.firebaseio.com",
  projectId: "turnout-vue-js",
  storageBucket: "turnout-vue-js.appspot.com",
  messagingSenderId: "418198280865"
};

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebase.database().ref().child('events')