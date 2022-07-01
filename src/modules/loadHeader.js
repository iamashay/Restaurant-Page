export const loadHeader = () => {
    const header = document.querySelector("header");
    const logoDiv = document.createElement("div");
    logoDiv.id = "logo";
    logoDiv.textContent = "Khana Khazana";

    header.appendChild(logoDiv);
}