const btn = document.querySelector(".talk");
const content = document.querySelector("#content");
const mike = document.getElementById("mic");
const mike1 = document.getElementById("mic1");
document.getElementById("mic").addEventListener("click", StartMike);
document.getElementById("mic1").addEventListener("click", StopMike);
var mike_status = false;

var SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const myrecognition = new SpeechRecognition();

myrecognition.onend = function () {
  mike_status = false;
  mike.classList.add("talk");
  mike.classList.remove("grn_talk");
};

myrecognition.onresult = function (event) {
  const current = event.resultIndex;
  const transcript = event.results[current][0].transcript;
  console.log(transcript);
  content.value += transcript;
};

function StartMike() {
  if (mike_status == false) {
    myrecognition.start();
    mike_status = true;
    mike.children[1].innerText = "Listening..";
  }
}
function StopMike() {
  if (mike_status == true) {
    myrecognition.stop();
    mike_status = false;
    mike1.classList.add("talk");
    content.textContent = "";
  }
}

myrecognition.continuous = true;

// let tooglemic = async () => {
//     let audioTrack = localStream.getTracks().find(track => track, kind === 'audio')
//     if (audioTrack.enabled) {
//         audioTrack.enabled = true
//         document.getElementById('mic').style.backgroundColor = 'rgb(219, 182, 182)'
//     }
//     else {
//         audioTrack.enabled = false
//         document.getElementById('mic').style.backgroundColor = 'rgba(216, 72, 15, 0.9)'

//     }
// }
// document.getElementById('mic').addEventListener('click', tooglemic)
