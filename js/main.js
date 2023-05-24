let form = document.getElementsByTagName("form")[0];
let newCardButton = document.getElementsByTagName("button")[0];


newCardButton.addEventListener("click", () => {
    form.classList.contains("d-none") ? form.classList.remove("d-none") : form.classList.add("d-none");
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = form.elements["title"].value
    let description = form.elements["descirption"].value
    form.classList.add("d-none");
    form.reset();
    createNewCard(title, description);
});

function createNewCard(title, description) {
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
    divNewCardBody.classList.add("card-body")

    let titleH5 = document.createElement("h5");
    titleH5.innerHTML = title;
    let descriptionP = document.createElement("p");
    descriptionP.innerHTML = description;

    divNewCardBody.appendChild(titleH5)
    divNewCardBody.appendChild(descriptionP)

    divNewCard.appendChild(buttonDelete);
    divNewCard.appendChild(buttonEdit);
    divNewCard.appendChild(divNewCardBody)

    let body = document.getElementById("toDo");
    body.insertBefore(divNewCard, null);
}

function editTask(element) {
    let titleEdit = element.target.parentElement. children[2].firstChild.innerHTML;
    let descriptionEdit = element.target.parentElement. children[2].lastChild.innerHTML;
    console.log(titleEdit, descriptionEdit);
    form.classList.remove("d-none")
    form.elements["title"].value = titleEdit;
    form.elements["descirption"].value = descriptionEdit;
    element.target.parentElement.remove();
}