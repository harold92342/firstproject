const firebaseConfig = {
  apiKey: APP_API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
};

firebase.initializeApp(firebaseConfig);

const msgScreen = document.getElementById("messages"); //the <ul> that displays all the <li> msgs
const msgForm = document.getElementById("messageForm"); //the input form
const msgInput = document.getElementById("msg-input"); //the input element to write messages
const msgBtn = document.getElementById("msg-btn"); //the Send button

const db = firebase.database();
const msgRef = db.ref("/msgs"); 
//to store data in the msgs folder by creating a reference in database

let name="";
function init() {
  name = prompt("Please enter your name");
}
document.addEventListener('DOMContentLoaded', init);

msgForm.addEventListener('submit', sendMessage);

function sendMessage(e){
  e.preventDefault();
  const text = msgInput.value;

    if(!text.trim()) return alert('Please type a message'); //no msg submitted
    const msg = {
        name: name,
        text: text
    };

    msgRef.push(msg);
    msgInput.value = "";
}

