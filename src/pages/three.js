
import mapImg from '../images/hero_maps_static_api.png'

const aboutPageContent = () => {
    const contentDiv = document.createElement("div");
    contentDiv.classList = "content";
    const mainDiv = document.createElement("div");
    mainDiv.classList = "main";

    const hdEl = document.createElement("h3");
    hdEl.innerHTML = "About us";
    mainDiv.appendChild(hdEl);

    const pEl = document.createElement("p");
    pEl.innerHTML = "Located in over 15 different cities";
    pEl.classList = "page3-p";
    mainDiv.appendChild(pEl);

    const imgEl = document.createElement("img");
    imgEl.src = mapImg;
    imgEl.classList = "page3-img";
    mainDiv.appendChild(imgEl);

    const ptEl = document.createElement("p");
    ptEl.innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, accusantium ipsum quod quas sint laborum debitis. Obcaecati enim quia, delectus eveniet rem ex voluptate repudiandae, exercitationem temporibus veniam in tempora?";
    ptEl.classList = "page3-p";
    mainDiv.appendChild(ptEl);

    contentDiv.append(mainDiv);
    return contentDiv;
}

export {aboutPageContent}