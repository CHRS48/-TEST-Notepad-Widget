const { ipcRenderer } = require("electron");

const notesDiv = document.getElementById("notes");

let notes = JSON.parse(localStorage.getItem("notes")) || [];

function save(){

localStorage.setItem("notes",JSON.stringify(notes));

}

function render(){

notesDiv.innerHTML="";

notes.forEach((note,index)=>{

const div=document.createElement("div");

div.className="note";

div.innerHTML=`

<textarea>${note}</textarea>

<button>Delete</button>

`;

const textarea=div.querySelector("textarea");

textarea.oninput=()=>{

notes[index]=textarea.value;
save();

};

div.querySelector("button").onclick=()=>{

notes.splice(index,1);

save();

render();

};

notesDiv.appendChild(div);

});

}

document.getElementById("addBtn").onclick=()=>{

notes.push("");

save();

render();

};

document.getElementById("pinBtn").onclick=()=>{

ipcRenderer.send("toggle-pin");

};

render();