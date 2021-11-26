let addBtn = document.getElementById("addBtn");
let arr = [];

let allNotes = JSON.parse(localStorage.getItem("notes"));
if (allNotes != null) {
  allNotes.forEach((noteText) => {
    let notesSection = document.getElementById("notes");
    let cdiv1 = createNote(noteText);
    notesSection.appendChild(cdiv1);
  });
}

addBtn.addEventListener("click", function () {
  let noteText = document.getElementById("addTxt").value;
  if (noteText.length == 0) {
    alert("Write Something in the note!");
  } else {
    let arr = JSON.parse(localStorage.getItem("notes"));
    if (arr == null) {
      arr = [];
    }

    arr.push(noteText);
    localStorage.setItem("notes", JSON.stringify(arr));
    // Adding this note to 'Your Notes' section
    let notesSection = document.getElementById("notes");
    let cdiv1 = createNote(noteText);
    notesSection.appendChild(cdiv1);
  }
});

// WORKING ON DELETING A NOTE
setInterval(function(){
    let deleteBtns = document.querySelectorAll('#deleteBtn');
    for(let i = 0; i<deleteBtns.length; i++){
        document.querySelectorAll('#deleteBtn')[i].addEventListener('click', function(){
            console.log("You Clicked 'Delete Note'")
            let toDelete = this.parentElement.parentElement;
            toDelete.parentElement.removeChild(toDelete);
            let toDltClassName = toDelete.className;
            let indexToDelete = Number(toDltClassName[toDltClassName.length-1]);
            console.log(indexToDelete);
    
        });
    }
}, 500);


function createNote(noteText) {
  let cdiv1 = document.createElement("div");
//   TO DELETE FROM THE LOCAL STORAGE ARRAY
  let index = JSON.parse(localStorage.getItem('notes')).length;
  cdiv1.className = "my-2 mx-2 card "+"a"+index;
  cdiv1.style = "width: 18rem";

  let cdiv2 = document.createElement("div");
  cdiv2.className = "card-body";

  let cthead = document.createElement("h5");
  cthead.className = "card-title";
  cthead.innerText = "Note";

  let cpara = document.createElement("p");
  cpara.className = "card-text";
  // Main text down below
  cpara.innerText = noteText;

  let cbutton = document.createElement("button");
  cbutton.id = 'deleteBtn';
  cbutton.className = "btn btn-primary";
  cbutton.innerText = "Delete Note";

  cdiv1.appendChild(cdiv2);

  cdiv2.appendChild(cthead);
  cdiv2.appendChild(cpara);
  cdiv2.appendChild(cbutton);

  return cdiv1;
}
