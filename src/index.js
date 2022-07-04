import {loadHome} from "./modules/loadHome.js"
import {loadHeader} from "./modules/loadHeader.js"
import {loadContact} from "./modules/loadContact.js"
import './css/style.css'
import { loadMenu } from "./modules/loadMenu.js";


loadHeader();
const homeHandler = loadHome();
const menuHandler = loadMenu();
const contactHandler = loadContact();


menuHandler.hide();
contactHandler.hide();

function showOnly(event){
    homeHandler.hide();
    menuHandler.hide();
    contactHandler.hide();

    const targetText = event.target.textContent;

    if (targetText.indexOf("Home") > -1) 
        homeHandler.show();
    if (targetText.indexOf("Menu") > -1) 
        menuHandler.show();
    if (targetText.indexOf("Contact") > -1) 
        contactHandler.show();
}

const navLinks = document.querySelectorAll("nav li");
const navLinksArr = [...navLinks];

navLinksArr.forEach(link => {
    link.addEventListener("click", showOnly);
})