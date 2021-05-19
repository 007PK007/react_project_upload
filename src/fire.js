import firebase from 'firebase';
  var firebaseConfig = {
    apiKey: "AIzaSyBeZA5U3tk3B4qz-aVZp2tajlpoDyhy2tE",
    authDomain: "login-8efa6.firebaseapp.com",
    projectId: "login-8efa6",
    storageBucket: "login-8efa6.appspot.com",
    messagingSenderId: "1035625572042",
    appId: "1:1035625572042:web:4c12aef3f08d50d5153633"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;