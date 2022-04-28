var classname =  document.getElementById("class").value
var section =  document.getElementById("section").value

var full_class = [classname, section];
//So the full class is the name of the class that will be displayed on the classes div.

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
     row = "<div id="+ Room_names + " class='room_name' onclick='diroom(this.id)' >"+ Room_names + "</div>";
     document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function Addroom() {
 firebase.database().ref("/").child(full_class).update({
       purpose : "adding room name"
 });
 localStorage.setItem("roomname", full_class);
 window.location = "kwitter_page.html"
}
function diroom(name) {
localStorage.setItem("roomname", name)
window.location = "kwitter_page.html"
}
function logout() {
  window.location
}
function Addroom() {
  roomname =  document.getElementById("roomname").value
  firebase.database().ref("/").child(roomname).update({
        purpose : "adding room name"
  });
  localStorage.setItem("roomname", roomname);
  window.location = "kwitter_page.html"
}