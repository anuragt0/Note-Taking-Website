
showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function(e){
    let addTxt = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    if(addTxt.value == ""){
        alert("Type something in the notes first");
    }
    else{
        notesObj.push(addTxt.value);
        localStorage.setItem('notes', JSON.stringify(notesObj));
        addTxt.value = "";
        // console.log(notesObj);
        showNotes();
    }
});

function showNotes(){
    let notes = localStorage.getItem('notes');
    let notesObj;
    if(notes == null){
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }
    let html = "";
    notesObj.forEach(function(element, index) {
        html+=  `
        <div class="my-2 mx-2 card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">Note ${index +1}</h5>
            <p class="card-text">
              ${element}
            </p>
            <button id="${index}" onclick = "deleteNote(this.id)" class="btn btn-primary deleteBtn">Delete Note</button>
          </div>
        </div>
        `
    });
    let notesElm=document.getElementById('notes');
    if(notesObj.length!=0){
        notesElm.innerHTML = html;
    }
    else{
        notesElm.innerHTML = `Nothing to show, use 'Add Note' button to add a note!`
    }
}

// TO DELETE A NOTE

function deleteNote(index){
    console.log("I am deleting", index);
    let notesArr = JSON.parse(localStorage.getItem('notes'));
    notesArr.splice(index, 1);
    localStorage.setItem('notes', JSON.stringify(notesArr));
    showNotes();
}

// ENABLING SEARCH BAR

let search = document.getElementById('searchTxt');
search.addEventListener('input', function(){
    let inputVal = search.value.toLowerCase();
    console.log('Input event fired', inputVal);
    let card = document.getElementsByClassName('card-text');
    // console.log('cards ', card);
    Array.from(card).forEach(function(element){
        let cardTxt = element.innerHTML.toLowerCase();
        console.log(cardTxt);
        if(cardTxt.includes(inputVal)){
            element.parentElement.parentElement.style.display = "block";
        }
        else{
            element.parentElement.parentElement.style.display = "none";
        }
    });

});




