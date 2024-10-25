import mainImg from '../images/tea-images/healthy-edge.png';

const mainBodyContent = () => {
    const contentDiv = document.createElement("div");
    contentDiv.classList = "content";
    const mainDiv = document.createElement("div");
    mainDiv.classList = "main";

    const oneP = document.createElement("p");
    oneP.innerHTML = "Start your tea journey here.";
    mainDiv.appendChild(oneP);

    const twoP = document.createElement("p");
    twoP.innerHTML = "Serving the needs of tea enthusiasts since 1805";
    mainDiv.appendChild(twoP);

    const imgMain = document.createElement("img");
    imgMain.src = mainImg;
    imgMain.classList = "home-img";
    mainDiv.appendChild(imgMain);

    const threeP = document.createElement("p");
    threeP.innerHTML = "Order online or find a distributor nearby!";
    mainDiv.append(threeP);
    
    contentDiv.append(mainDiv);
    return contentDiv;
}

export {mainBodyContent}