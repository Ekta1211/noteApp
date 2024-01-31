const noteContainer = document.querySelector('.noteContainer')
const createBtn = document.querySelector('.btn')
let notes = document.querySelectorAll('.noteBox')

showNotes()

function showNotes() {
    noteContainer.innerHTML = localStorage.getItem('notes')
}

//create input box for making notes
createBtn.addEventListener('click', function(e){
    e.preventDefault()  // prevent form submit
    let inputBox = document.createElement('p')
    let img = document.createElement('img')
    inputBox.className = 'noteBox'
    inputBox.setAttribute('contenteditable','true')
    img.src = "./images/delete.png"
    noteContainer.appendChild(inputBox).appendChild(img)
})

//delete the note
noteContainer.addEventListener('click', function(e){
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove()
        updateStorage()
    }else if(e.target.tagName === 'P'){
        notes = document.querySelectorAll('.noteBox')
        //nt stand for notes
        notes.forEach(nt =>{
            nt.onkeyup = function(){
                updateStorage()
            }
        })
    }
})

function updateStorage() {
    localStorage.setItem('notes',noteContainer.innerHTML)
}