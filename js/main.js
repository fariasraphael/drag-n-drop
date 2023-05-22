let form = document.getElementsByTagName("form")[0];
let newCardButton = document.getElementsByTagName("button")[0];

newCardButton.addEventListener("click", () => {
    form.classList.remove("d-none");

});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let title = form.elements["title"].value
    let description = form.elements["descirption"].value
    console.log(title, description);
    form.classList.add("d-none");
    form.reset();
    createNewCard(title, description);
});

function createNewCard(title, description) {
    let divNewCard = document.createElement("div");
    divNewCard.classList.add("card d-flex flex-row-reverse align-items-start");
    divNewCard.style.width = "18rem";

    let buttonEdit = document.createElement("a");
    buttonEdit.classList("btn btn-primary");
    buttonEdit.innerHTML = "*"
    
    let buttonDelete = document.createElement("a");
    buttonDelete.classList("btn btn-primary");
    buttonDelete.innerHTML = "-";

    let divNewCardBody = document.createElement("div");
    divNewCardBody.classList.add("card-body")

    let titleH3 = document.createElement("h3");
    titleH3.innerHTML = title;
    let descriptionH5 = document.createElement("h5");
    descriptionH5.innerHTML = description;






    console.log(titleH3, descriptionH5);

    //divNewCard.classList.add("d-flex flex-row");


}


