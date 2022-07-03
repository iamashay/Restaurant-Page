class menuItem {
    static menuArr = [];
    
    constructor (name, price) {
        this.name = name;
        this.price = price;
    }

    addItem() {
        menuItem.menuArr.push(this)
    }
}


function initiateItems() {
    new menuItem("Chole Bhature", 99).addItem()
    new menuItem("Paneer Butter Masala", 99).addItem()
    new menuItem("Chowmin", 99).addItem()
    new menuItem("Pizza", 99).addItem()
    new menuItem("French Fries", 99).addItem()

    return menuItem.menuArr;
}

function setupItemDiv(item){
    const itemDiv = document.createElement("div");
    itemDiv.classList = "item";
    
    const itemPic = new Image();
    const picName = item.name.toLowerCase().replaceAll(" ", "-");
    itemPic.classList = "item-pic";
    itemPic.src = require("../res/img/cuisine/"+picName+".jpeg");
    itemPic.style = "height: 80px; width: 120px;"
    itemPic.alt = item.name;
    itemDiv.appendChild(itemPic);

    const itemName = document.createElement("div");
    itemName.classList = "item-name";
    itemName.textContent = item.name;
    itemDiv.appendChild(itemName);

    const itemPrice = document.createElement("div");
    itemPrice.classList = "item-price";
    itemPrice.textContent = `Rs. ${item.price}`;
    itemDiv.appendChild(itemPrice);    

    return itemDiv;
}

export const loadMenu = () => {
    const contentDiv = document.querySelector("#content");

    const mainDiv = document.createElement("div");
    mainDiv.id = "menu-main";
    mainDiv.classList = "main";
    contentDiv.appendChild(mainDiv);

    const heading = document.createElement("h1");
    heading.textContent = "Our Menu";
    mainDiv.appendChild(heading);

    const itemContainer = document.createElement("div");
    itemContainer.classList = "items";
    mainDiv.appendChild(itemContainer)

    const itemsArr = initiateItems();
    itemsArr.forEach(item => {
        const itemDiv = setupItemDiv(item);
        itemContainer.appendChild(itemDiv);
    });
}