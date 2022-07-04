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
}