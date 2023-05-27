let form = document.getElementsByTagName("form")[0];
let newCardButton = document.getElementsByTagName("button")[0];
let taskCards = []

let todo = document.querySelector(".todo");
let doing = document.querySelector(".doing");
let done = document.querySelector(".done");


newCardButton.addEventListener("click", () => {
    form.classList.contains("d-none") ? form.classList.remove("d-none") : form.classList.add("d-none");
    newCardButton.innerHTML === "+" ? newCardButton.innerHTML = "-" : newCardButton.innerHTML = "+"
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let title = form.elements['title'].value;
    let description = form.elements['descirption'].value;
    form.classList.add("d-none");
    form.reset();
    
    const taskCard = {
        title: title,
        description: description
    }
    const exist = taskCards.find(element => element.title === title);
    
    console.log(exist);

    if (exist) {
        taskCard.id = exist.id;
        taskCards[taskCards.findIndex(elemento => elemento.id === exist.id)] = taskCard;
    } else {
        taskCard.id = taskCards[taskCards.length -1] ? (taskCards[taskCards.length -1]).id +1 : 0;

        createNewCard(taskCard);
        taskCards.push(taskCard)
    
        console.log(taskCard.id);

    }
});

//function cardTaskId () {
//    const exist = taskCards.find(elemento => elemento.title === title.value)

//    let taskCards = document.querySelectorAll(".card");
  //  divNewCard.id = "draggable-item" + taskCards.length;
 //   if (taskCards.id === divNewCard.id) {
  //      divNewCard.id = "draggable-item" + taskCards.length+1;
  //  } else {
  //      divNewCard.id = "draggable-item" + taskCards.length;
  //  }
//}


function createNewCard(taskCard) {
    
    let divNewCard = document.createElement("div");
    divNewCard.classList.add("card", "d-flex", "flex-row-reverse", "align-items-start");
    divNewCard.style.width = "16rem";

    let buttonEdit = document.createElement("a");
    buttonEdit.classList.add("btn", "btn-primary");
    buttonEdit.innerHTML = "*";
    buttonEdit.addEventListener("click", e => {
        editTask(e)
    })

    let buttonDelete = document.createElement("a");
    buttonDelete.classList.add("btn", "btn-outline-danger");
    buttonDelete.innerHTML = "-";
    buttonDelete.addEventListener("click", e => {
        e.target.parentElement.remove();
    })

    let divNewCardBody = document.createElement("div");
    divNewCardBody.classList.add("card-body");
    divNewCard.draggable = true;
    divNewCard.id = "draggable-item["+taskCard.id+"]";


    let titleH5 = document.createElement("h5");
    titleH5.innerHTML = taskCard.title;
    let descriptionP = document.createElement("p");
    descriptionP.innerHTML = taskCard.description;

    divNewCardBody.appendChild(titleH5)
    divNewCardBody.appendChild(descriptionP)

    divNewCard.appendChild(buttonDelete);
    divNewCard.appendChild(buttonEdit);
    divNewCard.appendChild(divNewCardBody)
    
    

    let body = document.getElementById("toDo");
    body.insertBefore(divNewCard, null);

    dragStart(divNewCard);

}


function editTask(element) {
    let titleEdit = element.target.parentElement.children[2].firstChild.innerHTML;
    let descriptionEdit = element.target.parentElement.children[2].lastChild.innerHTML;
    console.log(titleEdit, descriptionEdit);
    form.classList.remove("d-none")
    form.elements["title"].value = titleEdit;
    form.elements["descirption"].value = descriptionEdit;
    element.target.parentElement.remove();

}

function dragStart(element) {

    element.ondragstart = event => {
        event.dataTransfer.setData("tarefa-id", event.target.id);
        if (element.parentElement === todo) {
            todo.classList.remove("avaliable-to-drop");
            doing.classList.add("avaliable-to-drop");
            done.classList.add("avaliable-to-drop");
        } else if (element.parentElement === doing) {
            doing.classList.remove("avaliable-to-drop");
            todo.classList.add("avaliable-to-drop");
            done.classList.add("avaliable-to-drop");
        } else {
            done.classList.remove("avaliable-to-drop");
            doing.classList.add("avaliable-to-drop");
            todo.classList.add("avaliable-to-drop");
        }
    }
}