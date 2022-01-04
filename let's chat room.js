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
document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom(){
room_name=document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose:"Hello add Me"
});
localStorage.setItem("room_name",room_name);
window.location="let's chat_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirectToRoomName(name){
localStorage.setItem("room_name",room_name);
window.location="let's chat_page.html";
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}