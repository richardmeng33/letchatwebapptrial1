const firebaseConfig = {
    apiKey: "AIzaSyC6-8h0NnR3BsIGGORS2xzUYXei07iLctg",
    authDomain: "letschatwebapp-56f70.firebaseapp.com",
    databaseURL: "https://letschatwebapp-56f70-default-rtdb.firebaseio.com",
    projectId: "letschatwebapp-56f70",
    storageBucket: "letschatwebapp-56f70.appspot.com",
    messagingSenderId: "1090068708149",
    appId: "1:1090068708149:web:b2c1206c522adc6953ea7c"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  username = localStorage.getItem("username") 
document.getElementById("welcome").innerHTML = "Welcome " + username + "!"   

function newroom(){
      rname = document.getElementById("room").value
      localStorage.setItem("room_name",rname)

      firebase.database().ref("/").child(rname).update({
            purpose:"adyroom"
      })

}

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {
            document.getElementById("outputdiv").innerHTML = "";
            snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      newrow = "<div class='room_name' id=" + Room_names +  " onclick='redirecttoroom(this.id)'>" + Room_names + "</div> <hr>"
      document.getElementById("outputdiv").innerHTML += newrow
      //End code
      });});}
getData();

function redirecttoroom(name) {
      localStorage.setItem("room_name",name)
      window.location = "kwitter_chat.html"


}
function logout() {
      localStorage.removeitem("user")
      localStorage.removeitem("room_name")
      window.location = "index.html"
}
