export const loadHeader = () => {
    const header = document.querySelector("header");
    
    const logoDiv = document.createElement("div");
    logoDiv.id = "logo";
    logoDiv.textContent = "Khana Khazana";

    const nav = document.createElement("nav");
    const navList = document.createElement("ul");
    
    const navHome = document.createElement("li")
    navHome.textContent = "Home";
    
    const navMenu = document.createElement("li")
    navMenu.textContent = "Menu";
    
    const navContact = document.createElement("li")
    navContact.textContent = "Contact";
    
    navList.appendChild(navHome);
    navList.appendChild(navMenu);
    navList.appendChild(navContact);
    nav.appendChild(navList)
    
    header.appendChild(logoDiv);
    header.appendChild(nav);
}