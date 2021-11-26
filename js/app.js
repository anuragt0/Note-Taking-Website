
showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function(){
    let addTxt = document.getElementById('addTxt').value;
    if(addTxt.length == 0){
        alert("Enter some note!");
    }
    else{
        let notes = localStorage.getItem('notes');
        let notesObj;
        if(notes == null){
            notesObj = [];
        }
        else{
            notesObj = JSON.parse(notes);
        }
        let titleTxt = document.getElementById('titleTxt').value;
        let insideArr = [titleTxt, addTxt];
        notesObj.push(insideArr);
        localStorage.setItem('notes', JSON.stringify(notesObj));
    }
    document.getElementById('addTxt').value = "";
    document.getElementById('titleTxt').value = "";
    showNotes();

});

function showNotes(){
    let notes = localStorage.getItem("notes");
    let notesObj;
    if (notes == null) {
        notesObj = [];
    } else {
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function (element, index) {
        html += `
            <div class="my-2 mx-2 card" style="width: 18rem">
            <div class="card-body">
                <h5 class="card-title"> ${element[0]}</h5>
                <p class="card-text">
                ${element[1]}
                </p>
                <button id="${index}" onclick = "deleteNote(this.id)" class="btn btn-primary deleteBtn">Delete Note</button>
            </div>
            </div>
            `;
    });

    let notesElm = document.getElementById("notes");
    if (notesObj.length != 0) {
        notesElm.innerHTML = html;
    } else {
        notesElm.innerHTML = `Nothing to show, use 'Add Note' button to add a note!`;
    }
}
// Deleting a note

function deleteNote(index){
    let notesArr = JSON.parse(localStorage.getItem("notes"));
    notesArr.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesArr));
    showNotes();
}

// ENABLING SEARCH BAR
let searchBar = document.getElementById('searchTxt');
searchBar.addEventListener('input', function(){
    let searchTxt = searchBar.value.toLowerCase();
    let paraElements = document.getElementsByClassName('card-text');
    Array.from(paraElements).forEach(function(element, index){
        if(element.innerHTML.toLowerCase().includes(searchTxt)){
            element.parentElement.parentElement.style.display = 'block';
        }
        else{
            element.parentElement.parentElement.style.display = 'none';
        }
    });
});


