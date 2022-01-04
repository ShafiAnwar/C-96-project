// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCjVMCJO8XuwDfn7dpHBNAlcSZuDYzWaYg",
    authDomain: "project-94-77856.firebaseapp.com",
    databaseURL: "https://project-94-77856-default-rtdb.firebaseio.com",
    projectId: "project-94-77856",
    storageBucket: "project-94-77856.appspot.com",
    messagingSenderId: "849000331094",
    appId: "1:849000331094:web:c682b33a8a4049deb288f7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
 function send(){
       msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
name:user_name,
message:msg,
like:0

});
document.getElementById("msg").value="";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
