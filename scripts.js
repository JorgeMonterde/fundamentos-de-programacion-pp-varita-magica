// A function that generates certain number of random colors
function randomColors(numColors=1){
    let randomColors = [];
    for(i=0; i<numColors; i++){
        let colorNumber1 = Math.floor(Math.random()*255);
        let colorNumber2 = Math.floor(Math.random()*255);
        let colorNumber3 = Math.floor(Math.random()*255);
        randomColors.push(`rgb(${colorNumber1}, ${colorNumber2}, ${colorNumber3})`);
    }
    return randomColors
}
console.log(randomColors (9))


//disables all links ("a")
let allLinks = document.getElementsByTagName("a");
function noLink(a){
        a.href = "";
} 

for(j=0; j<allLinks.length; j++){
    let linkToDelete = allLinks[j];
    linkToDelete.addEventListener("click", function (){noLink(linkToDelete)});
}


//change images when clicked
let allImg = document.querySelectorAll("img");
console.log(allImg)

function changeImg(image){
    image.setAttribute("src", "assets/magic-6.gif")
}

for(i=0; i<allImg.length; i++){
    let imageToChange = allImg[i];
    imageToChange.addEventListener("click", function(){changeImg(imageToChange)})
}

//change images when mouse is over them
function changeImgHover(image){
    image.setAttribute("src", "assets/abracadabra.gif")
}

function changeImgOut(image, originalSrc){
    image.setAttribute("src", `${originalSrc}`)
}

for(i=0; i<allImg.length; i++){
    let imageToChange = allImg[i];
    let originalImg = imageToChange.src;
    imageToChange.addEventListener("mouseover", function(){changeImgHover(imageToChange)});
    imageToChange.addEventListener("mouseout", function(){changeImgOut(imageToChange, originalImg)});
}

//change "p"'s background and color
let allP = document.querySelectorAll("p");

function changeBackAndColor(p, back, color){
    p.style.background = `${back}`;
    p.style.color = `${color}`;
}

for(i=0; i<allP.length; i++){
    let pToChange = allP[i];
    pToChange.addEventListener("click", function(){changeBackAndColor(pToChange, randomColors(), "white")})
}

//change "p"'s background and color when its over them
for(i=0; i<allP.length; i++){
    let pToChange2 = allP[i];
    pToChange2.addEventListener("mouseover", function(){changeBackAndColor(pToChange2, "blue", "pink")});
    pToChange2.addEventListener("mouseout", function(){changeBackAndColor(pToChange2, "white", "black")})
}

//change "section"s and "article"s background
let allArticle = document.querySelectorAll("article");
let allSection = document.querySelectorAll("section");

function changeElement(elementToChange, color=randomColors()){
    elementToChange.style.background = `${color}`;
}

for(i=0; i<allArticle.length; i++){
    let articleToChange = allArticle[i];
    articleToChange.addEventListener("click", function (){changeElement(articleToChange)});
}
for(i=0; i<allSection.length; i++){
    let sectionToChange = allSection[i];
    sectionToChange.addEventListener("click", function (){changeElement(sectionToChange)});
}

//change "section"s and "article"s background when its over them
for(i=0; i<allArticle.length; i++){
    let articleToChange2 = allArticle[i];
    articleToChange2.addEventListener("mouseover", function(){changeElement(articleToChange2, "green")});
    articleToChange2.addEventListener("mouseout", function(){changeElement(articleToChange2, "aqua")})
}
for(i=0; i<allSection.length; i++){
    let sectionToChange2 = allSection[i];
    sectionToChange2.addEventListener("mouseover", function(){changeElement(sectionToChange2, "green")});
    sectionToChange2.addEventListener("mouseout", function(){changeElement(sectionToChange2, "aqua")})
}





