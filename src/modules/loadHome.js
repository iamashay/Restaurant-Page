
export const loadHome = () => {
    console.log("Initial Page Load")


    const contentDiv = document.querySelector("#content");
    contentDiv.innerHTML = "";

    const mainDiv = document.createElement("div");
    mainDiv.id = "home-main";
    mainDiv.classList = "main";
    contentDiv.appendChild(mainDiv);

    const logoHeading = document.createElement("div");
    logoHeading.id = "logo-heading";
    logoHeading.textContent = "Khana Khazana";
    mainDiv.appendChild(logoHeading);

    const logoDesc = document.createElement("div");
    logoDesc.id = "logo-description";
    logoDesc.textContent = "Treasure hunt a large variety of cuisines !";
    mainDiv.appendChild(logoDesc);    

    const viewMenuBut = document.createElement("button");
    viewMenuBut.id = "view-menu-but";
    viewMenuBut.textContent = "View Menu";
    mainDiv.appendChild(viewMenuBut);   
}