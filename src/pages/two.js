import DragonPearls from '../images/tea-images/black-dragon-pearls.png';
import gyokuro from '../images/tea-images/imperial-gyokuro-genmaicha.png';
import matcha from '../images/tea-images/matcha-iri-sencha-441.png';
import lemonade from '../images/tea-images/orange-lemonade.png';
import yame from '../images/tea-images/yame-gyokuro-grade-1-organic-801.png';

const shopItem = (picture, itemName, itemDesc) => {
    const gridItemA = document.createElement("div");
    gridItemA.classList = "grid-item";
    const gridImgA = document.createElement("img");
    gridImgA.src = picture;
    gridItemA.appendChild(gridImgA);
    const gridHA = document.createElement("h2")
    gridHA.innerHTML = itemName;
    gridItemA.appendChild(gridHA);
    const gridPA = document.createElement("p");
    gridPA.innerHTML = itemDesc;
    gridItemA.appendChild(gridPA);

    return gridItemA;
}

const shopBodyContent = () => {
    const contentDiv = document.createElement("div");
    contentDiv.classList = "content";
    const mainDiv = document.createElement("div");
    mainDiv.classList = "tea-list";

    const gridItemA = shopItem(DragonPearls, "Black Dragon Pearls", "Black Dragon Pearl tea is malty, sweet with notes of raisins, chocolate and earth");
    mainDiv.appendChild(gridItemA);

    const gridItemB = shopItem(gyokuro, "Imperial Gyokuro Genmaicha", "Traditional toasted brown rice Imperial Gyrokuro Genmaicha is fragrant, toasty and sweet");
    mainDiv.appendChild(gridItemB);

    const gridItemC = shopItem(matcha, "Matcha Iri Sencha", "Sencha dusted with high quality matcha is strong, grassy and sweet");
    mainDiv.appendChild(gridItemC);

    const gridItemD = shopItem(lemonade, "Orange Lemonade", "Real orange slices and tangerine pieces blended together with eucalyptus and lemongrass");
    mainDiv.appendChild(gridItemD);

    const gridItemE = shopItem(yame, "Yame Gyokuro Grade 1", "Highest quality shade grown Gyokuro from Yame");
    mainDiv.appendChild(gridItemE);

    contentDiv.appendChild(mainDiv);
    return contentDiv;
}

export {shopBodyContent}