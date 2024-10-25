import "./styles.css";
import { mainBodyContent } from './pages/one.js';
import githubSvg from './images/github.svg';

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


const mainBody = document.querySelector("#mainBody");
mainBody.appendChild(createNav());

mainBody.appendChild(mainBodyContent());

mainBody.appendChild(createFooter());