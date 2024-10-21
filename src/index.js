import "./styles.css";

const createNav = () => {
    const navEl = document.createElement("nav");

    const buttonHome = document.createElement("button");
    buttonHome.innerHTML = "Home"
    navEl.appendChild(buttonHome);

    const buttonContent = document.createElement("button");
    buttonContent.innerHTML = "Content"
    navEl.appendChild(buttonContent);

    const buttonContact = document.createElement("button");
    buttonContact.innerHTML = "Contact"
    navEl.appendChild(buttonContact);
    return navEl;
};

const contentEl = document.querySelector("#content");
contentEl.appendChild(createNav());