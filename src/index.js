import "./styles.css";
import { mainBodyContent } from './pages/one.js';
import { shopBodyContent } from "./pages/two.js";
import { aboutPageContent } from "./pages/three.js";
import githubSvg from './images/github.svg';

const mainBody = document.querySelector("#mainBody");

const initLoad = () => {
    mainBody.appendChild(createNav());
    mainBody.appendChild(mainBodyContent());
    mainBody.appendChild(createFooter());
    activePage("home");
}

const shopLoad = () => {
    mainBody.appendChild(createNav());
    mainBody.appendChild(shopBodyContent());
    mainBody.appendChild(createFooter());
    activePage("shop");
}

const aboutLoad = () => {
    mainBody.appendChild(createNav());
    mainBody.appendChild(aboutPageContent());
    mainBody.appendChild(createFooter());
    activePage("about");
}

const resetBody = () => {
    mainBody.innerHTML = "";
}

const activePage = (name) => {
    const buttonselect = document.querySelector("#"+name);
    buttonselect.classList = "nav-button active";
}


const createNav = () => {
    const headerEl = document.createElement("header");

    const teashopEl = document.createElement("h1");
    teashopEl.innerHTML = "Tea Shop!"
    headerEl.appendChild(teashopEl);

    const navEl = document.createElement("nav");

    const buttonHome = document.createElement("button");
    buttonHome.innerHTML = "Home"
    buttonHome.classList = "nav-button";
    buttonHome.id = "home";
    buttonHome.addEventListener('click', () => {
        resetBody();
        initLoad();
    });
    navEl.appendChild(buttonHome);

    const buttonContent = document.createElement("button");
    buttonContent.innerHTML = "Shop"
    buttonContent.classList = "nav-button";
    buttonContent.id = "shop";
    buttonContent.addEventListener('click', () => {
        resetBody();
        shopLoad();
    });
    navEl.appendChild(buttonContent);

    const buttonContact = document.createElement("button");
    buttonContact.innerHTML = "About"
    buttonContact.classList = "nav-button";
    buttonContact.id = "about";
    buttonContact.addEventListener('click', () => {
        resetBody();
        aboutLoad();
    });
    navEl.appendChild(buttonContact);

    headerEl.appendChild(navEl);
    return headerEl;
};

const createFooter = () => {
    const footerEl = document.createElement("footer");

    const linkEl = document.createElement("a");
    linkEl.href = "https://github.com/RegmiS";
    linkEl.target = "_blank";
    linkEl.relList = "noopener noreferrer";
    linkEl.innerHTML = "Developed by RegmiS";

    const imgEl = document.createElement("img");
    imgEl.src = githubSvg;

    linkEl.appendChild(imgEl);
    footerEl.appendChild(linkEl);

    return footerEl;
}



initLoad();