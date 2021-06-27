import * as firebase from 'firebase'
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyBTlpnW0uywp1eA3_hDj5r5XNKGGzhW1Oc",
  authDomain: "wily-app-authentication.firebaseapp.com",
  projectId: "wily-app-authentication",
  storageBucket: "wily-app-authentication.appspot.com",
  messagingSenderId: "454008164583",
  appId: "1:454008164583:web:011497c0a5a4b9104e1242"
};
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();