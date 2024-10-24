import "./styles.css";

const createNav = () => {
    const headerEl = document.createElement("header");

    const teashopEl = document.createElement("h1");
    teashopEl.innerHTML = "Tea Shop!"
    headerEl.appendChild(teashopEl);

    const navEl = document.createElement("nav");

    const buttonHome = document.createElement("button");
    buttonHome.innerHTML = "Home"
    buttonHome.classList = "nav-button active";
    navEl.appendChild(buttonHome);

    const buttonContent = document.createElement("button");
    buttonContent.innerHTML = "Shop"
    buttonContent.classList = "nav-button";
    navEl.appendChild(buttonContent);

    const buttonContact = document.createElement("button");
    buttonContact.innerHTML = "About"
    buttonContact.classList = "nav-button";
    navEl.appendChild(buttonContact);

    headerEl.appendChild(navEl);
    return headerEl;
};

const mainBody = document.querySelector("#mainBody");
mainBody.appendChild(createNav());