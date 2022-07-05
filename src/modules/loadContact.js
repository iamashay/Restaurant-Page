import phonePic from "../res/img/phone.png"
import locationPic from "../res/img/location.png"

function inputContainer(label, input) {
    const container = document.createElement("div");
    container.classList = "input-container";
    container.appendChild(label);
    container.appendChild(input);
    return container;
}

function generateFormDiv(){
    const form = document.createElement("form");
    form.id = "contact-form";

    const nameInput = document.createElement("input");
    nameInput.id = "name";
    nameInput.name = "name";
    nameInput.setAttribute('required', '');
    const nameInputLabel = document.createElement("label");
    nameInputLabel.for = "name";
    nameInputLabel.textContent = "Enter Name:";
    form.appendChild(inputContainer(nameInputLabel, nameInput));

    const mailInput = document.createElement("input");
    mailInput.id = "email";
    mailInput.type = "email";
    mailInput.name = "email";
    mailInput.setAttribute('required', '');
    const mailInputLabel = document.createElement("label");
    mailInputLabel.for = "email";
    mailInputLabel.textContent = "Enter your e-mail:";
    form.appendChild(inputContainer(mailInputLabel, mailInput));

    const msgInput = document.createElement("textarea");
    msgInput.id = "msg";
    msgInput.rows = 5;
    msgInput.cols = 30;
    msgInput.name = "msg";
    msgInput.setAttribute('required', '');
    const msgInputLabel = document.createElement("label");
    msgInputLabel.for = "msg";
    msgInputLabel.textContent = "Enter your message:";
    form.appendChild(inputContainer(msgInputLabel, msgInput));

    const buttonContainer = document.createElement("div");
    buttonContainer.classList = "button-container";
    const formSubmitBut = document.createElement("button");
    formSubmitBut.type = "submit";
    formSubmitBut.textContent = "Submit";
    buttonContainer.appendChild(formSubmitBut);
    form.appendChild(buttonContainer);

    return form;
}

function generateContactInfoDiv(){
    const infoContainer = document.createElement("div");;
    infoContainer.id = "info-container";
    
    const phoneDiv = document.createElement("div");
    phoneDiv.classList = "contact-info";
    const phoneImg = new Image();
    phoneImg.src = phonePic;
    const phoneNum = document.createElement("div");
    phoneNum.textContent = "(+91) 981234567";
    phoneDiv.appendChild(phoneImg);
    phoneDiv.appendChild(phoneNum);


    const locationDiv = document.createElement("div");
    locationDiv.classList = "contact-info";
    const locationImg = new Image();
    locationImg.src = locationPic;
    const locationText = document.createElement("div");
    locationText.textContent = "101, Random Street, Delhi, India";
    locationDiv.appendChild(locationImg);
    locationDiv.appendChild(locationText);
    
    infoContainer.appendChild(phoneDiv);
    infoContainer.appendChild(locationDiv);

    return infoContainer;
}

export const loadContact = () => {
    const contentDiv = document.querySelector("#content");

    const mainDiv = document.createElement("div");
    mainDiv.id = "contact-main";
    mainDiv.classList = "main";
    contentDiv.appendChild(mainDiv);

    const heading = document.createElement("h1");
    heading.classList = "page-title";
    heading.textContent = "Contact Us";
    mainDiv.appendChild(heading);

    const form = generateFormDiv();
    mainDiv.appendChild(form)

    const infoDiv = generateContactInfoDiv();
    mainDiv.appendChild(infoDiv);

    const show = () => {
        mainDiv.style.display = "";
    }

    const hide = () => {
        mainDiv.style.display = "none";
    }
    return {mainDiv, show, hide};
}