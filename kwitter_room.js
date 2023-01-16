
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyCpASOO9mRGP-63qE3oRY_5iWaLpX8iVPo",
      authDomain: "class-test-a4077.firebaseapp.com",
      projectId: "class-test-a4077",
      storageBucket: "class-test-a4077.appspot.com",
      messagingSenderId: "615878415990",
      appId: "1:615878415990:web:d5c522684d31ab6cbaf157",
      measurementId: "G-96VTCVEDTL"
    };
function getData() {firebase.database().ref("/"+Room_names).on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+ Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoom(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom(){
      room_name=document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      localStorage.setItem("room_name",room_name);

      window.location="kwitter_page.html";
}

function redirectToRoom(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
       window.location="kwitter.html";
}
