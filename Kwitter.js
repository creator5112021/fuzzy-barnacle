const firebaseConfig = {
    apiKey: "AIzaSyClYtTRxrUzIrWxrGeDFI19chCLCQDbV34",
    authDomain: "hygt-fa492.firebaseapp.com",
    projectId: "hygt-fa492",
    storageBucket: "hygt-fa492.appspot.com",
    messagingSenderId: "673036600134",
    appId: "1:673036600134:web:2b21fed7d09ee11954db47",
    measurementId: "G-EQN69Z2QR7"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

function login() {
    username =  document.getElementById("usr").value;
    localStorage.setItem("username", username);

    window.location = "Kwitter_room.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    });});}
getData();