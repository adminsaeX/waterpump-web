var firebase = require("firebase/app")
// Add the Firebase products that you want to use
require("firebase/auth")
require("firebase/firestore")

const firebaseConfig = {
   apiKey: "AIzaSyCdR--buHSh6-M0TSXW0X08OeGVAEdqRFA",
   authDomain: "outsource-project-36ba5.firebaseapp.com",
   databaseURL: "https://outsource-project-36ba5.firebaseio.com",
   projectId: "outsource-project-36ba5",
   storageBucket: "outsource-project-36ba5.appspot.com",
   messagingSenderId: "533138560406",
   appId: "1:533138560406:web:ada5c4971ba9115d"
}
firebase.initializeApp(firebaseConfig)
var database = firebase.database()
export default database