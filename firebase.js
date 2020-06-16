  // Your web app's Firebase configuration
  var firebaseConfig = {
      apiKey: "AIzaSyDyqiHqHBsiJjqQtIBArL5pRqDbdeduyfk",
      authDomain: "program-dbe71.firebaseapp.com",
      databaseURL: "https://program-dbe71.firebaseio.com",
      projectId: "program-dbe71",
      storageBucket: "program-dbe71.appspot.com",
      messagingSenderId: "461889041711",
      appId: "1:461889041711:web:92ecdd5783e6770e3e5dda",
      measurementId: "G-1FNXB4D5DD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var database = firebase.database();
  var users = firebase.database().ref("users")