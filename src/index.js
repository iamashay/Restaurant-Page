import {loadHome} from "./modules/loadHome.js"
import {loadHeader} from "./modules/loadHeader.js"
import {loadContact} from "./modules/loadContact.js"
import './css/style.css'
import { loadMenu } from "./modules/loadMenu.js";

function init(){
    loadHeader();
    loadHome();
    loadMenu();
    loadContact();
}

init();